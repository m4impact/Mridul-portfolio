import { useState, useEffect, useRef, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────
// GLOBAL STYLES — exact match to the HTML theme
// ─────────────────────────────────────────────────────────────────────────
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');
:root{--ink:#0A0A08;--paper:#F2EFE8;--paper2:#E8E4DA;--red:#C0392B;--fc:'Cormorant Garamond',Georgia,serif;--fb:'Bebas Neue',Impact,sans-serif;--fm:'DM Mono',monospace;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--paper);color:var(--ink);font-family:var(--fc);overflow-x:hidden;cursor:none;}
body::before{content:'';position:fixed;inset:0;z-index:9000;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;mix-blend-mode:multiply;}
#cur{position:fixed;width:10px;height:10px;background:var(--ink);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .2s,height .2s;mix-blend-mode:multiply;}
body.lh #cur{width:36px;height:36px;}
.filmstrip{position:fixed;top:0;bottom:0;z-index:800;pointer-events:none;width:26px;background:var(--ink);display:flex;flex-direction:column;justify-content:space-around;align-items:center;}
.filmstrip.left{left:0;}.filmstrip.right{right:0;}
.sp{width:10px;height:13px;background:var(--paper2);border-radius:2px;flex-shrink:0;}
nav{position:fixed;top:0;left:26px;right:26px;z-index:700;display:flex;align-items:center;justify-content:space-between;padding:0 2.5rem;height:50px;transition:background .4s;}
nav.sc{background:rgba(242,239,232,.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(10,10,8,.08);}
.nav-logo{font-family:var(--fm);font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ink);text-decoration:none;opacity:.4;background:none;border:none;cursor:pointer;padding:0;}
.nav-links{display:flex;gap:1.8rem;align-items:center;}
.nav-links a,.nav-links button.nav-a{font-family:var(--fm);font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink);text-decoration:none;opacity:.32;transition:opacity .2s;background:none;border:none;cursor:pointer;padding:0;}
.nav-links a:hover,.nav-links button.nav-a:hover{opacity:1;}
.nav-links a.resume-lnk{opacity:1;color:var(--red);border-bottom:1px solid rgba(192,57,43,.35);}
.nav-st{display:flex;align-items:center;gap:.45rem;font-family:var(--fm);font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:var(--red);}
.sd{width:6px;height:6px;border-radius:50%;background:var(--red);animation:pdot 2.2s ease-in-out infinite;}
@keyframes pdot{0%,100%{box-shadow:0 0 0 0 rgba(192,57,43,.4);}50%{box-shadow:0 0 0 6px rgba(192,57,43,0);}}
.skip-link{position:absolute;top:-100%;left:1rem;background:var(--ink);color:var(--paper);font-family:var(--fm);font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;padding:.5rem 1rem;border-radius:2px;text-decoration:none;z-index:99999;}
.skip-link:focus{top:1rem;}
*:focus-visible{outline:2px solid var(--red);outline-offset:3px;border-radius:2px;}
.sr{opacity:0;transform:translateY(26px);transition:opacity .85s cubic-bezier(.4,0,.2,1),transform .85s cubic-bezier(.4,0,.2,1);will-change:opacity,transform;}
.sr.in{opacity:1;transform:none;will-change:auto;}
.sr.d1{transition-delay:.1s;}.sr.d2{transition-delay:.2s;}.sr.d3{transition-delay:.3s;}
.divider{height:3px;background:var(--ink);position:relative;}
.divider .dl{position:absolute;right:3.5rem;font-family:var(--fm);font-size:.54rem;letter-spacing:.18em;text-transform:uppercase;background:var(--paper);padding:0 .8rem;color:var(--ink);opacity:.26;top:50%;transform:translateY(-50%);}

/* S1 HERO */
#s1{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:50px 3.5rem 0;position:relative;overflow:hidden;}
.ruled{position:absolute;inset:0;pointer-events:none;overflow:hidden;}
.rl{position:absolute;left:0;right:0;height:1px;background:rgba(10,10,8,.055);}
.lbox{position:absolute;left:0;right:0;height:68px;background:var(--ink);z-index:2;pointer-events:none;}
.lbox.t{top:50px;}.lbox.b{bottom:0;}
.tc{position:relative;z-index:3;padding:4rem 0;}
.tc-idx{font-family:var(--fm);font-size:.56rem;letter-spacing:.24em;text-transform:uppercase;opacity:0;margin-bottom:1.8rem;animation:up .7s .2s forwards;}
.tc-name{font-family:var(--fb);font-size:clamp(5rem,15vw,16rem);line-height:.88;letter-spacing:.01em;opacity:0;animation:up .9s .35s forwards;}
.tc-sub{font-family:var(--fc);font-style:italic;font-weight:300;font-size:clamp(1rem,2vw,2rem);color:var(--ink);opacity:0;margin-top:1rem;letter-spacing:.02em;animation:up .8s .6s forwards;transition:opacity .5s ease;}
.tc-tags{display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1.6rem;opacity:0;animation:up .7s .8s forwards;}
.tc-tag{font-family:var(--fm);font-size:.52rem;letter-spacing:.09em;text-transform:uppercase;border:1px solid rgba(10,10,8,.18);padding:.18rem .65rem;border-radius:2px;color:rgba(10,10,8,.42);}
.tc-tag.hi{border-color:rgba(192,57,43,.35);color:var(--red);}
.timecode{position:absolute;right:0;bottom:6rem;font-family:var(--fm);font-size:.62rem;letter-spacing:.12em;color:var(--ink);opacity:.16;writing-mode:vertical-rl;}
.sc-cue{position:absolute;bottom:6rem;left:3.5rem;z-index:4;display:flex;align-items:center;gap:1rem;font-family:var(--fm);font-size:.54rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink);opacity:0;animation:fadeIn .8s 2s forwards;}
@keyframes fadeIn{to{opacity:.26;}}
.sc-arr{width:34px;height:1px;background:var(--ink);position:relative;}
.sc-arr::after{content:'';position:absolute;right:0;top:-3px;width:6px;height:6px;border-right:1px solid var(--ink);border-bottom:1px solid var(--ink);transform:rotate(-45deg);}
@keyframes up{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}

/* S2 ABOUT */
#s2{padding:7rem 3.5rem;display:grid;grid-template-columns:190px 1fr;gap:5rem;align-items:start;}
.s2-idx{font-family:var(--fm);font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;opacity:.25;padding-top:.2rem;position:sticky;top:70px;line-height:1.9;}
.s2-h{font-family:var(--fb);font-size:clamp(2.6rem,5vw,5.5rem);line-height:.9;margin-bottom:2rem;}
.s2-h .acc{color:var(--red);}
.s2-p{font-size:1.15rem;font-weight:300;line-height:1.85;color:rgba(10,10,8,.6);margin-bottom:1.2rem;max-width:580px;}
.s2-p strong{font-weight:600;color:var(--ink);font-style:italic;}
.s2-rule{width:48px;height:2px;background:var(--ink);opacity:.1;margin:1.8rem 0;}
.facts{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(10,10,8,.08);}
.fact{padding:1.3rem 0;border-bottom:1px solid rgba(10,10,8,.07);border-right:1px solid rgba(10,10,8,.07);}
.fact:nth-child(even){border-right:none;padding-left:1.6rem;}
.fact-l{font-family:var(--fm);font-size:.54rem;letter-spacing:.13em;text-transform:uppercase;opacity:.3;margin-bottom:.4rem;}
.fact-v{font-family:var(--fb);font-size:1.5rem;line-height:1;letter-spacing:.02em;}
.fact-v .sm{font-family:var(--fc);font-size:.85rem;font-weight:300;opacity:.45;}
.fact-v.red{color:var(--red);font-size:1.1rem;}
.resume-btn{display:inline-flex;align-items:center;gap:.6rem;margin-top:2rem;font-family:var(--fm);font-size:.54rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink);text-decoration:none;border:1px solid rgba(10,10,8,.22);padding:.5rem 1.1rem;border-radius:2px;transition:background .2s,color .2s,border-color .2s;}
.resume-btn:hover{background:var(--ink);color:var(--paper);border-color:var(--ink);}
.resume-btn::after{content:'↓';}

/* ABOUT EXTENDED — headshot, timeline, press, certs */
.s2-extended{margin-top:5rem;padding-top:4rem;border-top:1px solid rgba(10,10,8,.08);}
.s2-ext-grid{display:grid;grid-template-columns:1fr 380px;gap:4rem;align-items:start;margin-bottom:5rem;}
.s2-hs{position:sticky;top:70px;}
.s2-hs img{width:100%;display:block;filter:grayscale(12%) sepia(8%);}
.s2-hs-cap{padding:12px 14px;background:var(--ink);}
.s2-hs-cap .hc-label{font-family:var(--fm);font-size:.46rem;color:var(--red);letter-spacing:.15em;text-transform:uppercase;margin-bottom:3px;}
.s2-hs-cap .hc-sub{font-family:var(--fm);font-size:.46rem;color:rgba(242,239,232,.35);letter-spacing:.06em;}
/* timeline */
.tl{position:relative;max-width:600px;}
.tl::before{content:'';position:absolute;left:82px;top:6px;bottom:6px;width:1px;background:rgba(10,10,8,.1);}
.tl-row{display:flex;gap:26px;margin-bottom:40px;align-items:flex-start;}
.tl-yr{min-width:82px;text-align:right;font-family:var(--fm);font-size:.5rem;color:var(--red);letter-spacing:.06em;padding-top:3px;}
.tl-dot{width:7px;height:7px;border-radius:50%;background:var(--red);flex-shrink:0;margin-top:5px;position:relative;z-index:1;box-shadow:0 0 0 3px rgba(192,57,43,.1);}
.tl-place{font-family:var(--fb);font-size:1.4rem;color:var(--ink);margin-bottom:5px;line-height:1;}
.tl-note{font-family:var(--fm);font-size:.53rem;color:rgba(10,10,8,.4);line-height:1.9;}
/* certs */
.cert-list{max-width:600px;}
.cert-row{display:flex;justify-content:space-between;align-items:flex-start;padding:16px 0;border-bottom:1px solid rgba(10,10,8,.07);gap:16px;}
.cert-name{font-family:var(--fc);font-size:1.05rem;color:var(--ink);margin-bottom:3px;}
.cert-org{font-family:var(--fm);font-size:.48rem;color:rgba(10,10,8,.3);letter-spacing:.06em;}
.cert-date{font-family:var(--fm);font-size:.48rem;color:var(--red);letter-spacing:.08em;white-space:nowrap;}
/* press videos */
.press-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:1rem;}
.press-card{border:1px solid rgba(10,10,8,.1);}
.press-video-wrap{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;}
.press-video-wrap iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none;}
.press-card-body{padding:20px 18px 24px;border-top:1px solid rgba(10,10,8,.07);}
.press-card-label{font-family:var(--fm);font-size:.46rem;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:8px;}
.press-card-quote{font-family:var(--fc);font-style:italic;font-weight:300;font-size:1.05rem;color:var(--ink);line-height:1.5;}

/* S3 WORK */
#s3{padding:7rem 3.5rem;}
.s3-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:4rem;}
.s3-h{font-family:var(--fb);font-size:clamp(2.6rem,5vw,5.5rem);line-height:.9;overflow:hidden;}
.s3-ct{font-family:var(--fm);font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;opacity:.26;}
.pr{display:grid;grid-template-columns:2.2rem 1fr auto;gap:2rem;align-items:center;padding:1.8rem 0;border-bottom:1px solid rgba(10,10,8,.08);cursor:pointer;position:relative;overflow:hidden;transition:padding-left .3s cubic-bezier(.4,0,.2,1);}
.pr:first-of-type{border-top:1px solid rgba(10,10,8,.08);}
.pr::before{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:var(--red);transition:width .3s cubic-bezier(.4,0,.2,1);}
.pr:hover,.pr:focus-visible{padding-left:1.1rem;outline:none;}
.pr:hover::before,.pr:focus-visible::before{width:3px;}
.pr-num{font-family:var(--fm);font-size:.58rem;letter-spacing:.1em;opacity:.2;}
.pr-name{font-family:var(--fb);font-size:clamp(1.3rem,2.6vw,2.4rem);line-height:1;letter-spacing:.01em;transition:color .2s;}
.pr:hover .pr-name,.pr:focus-visible .pr-name{color:var(--red);}
.pr-sub{font-family:var(--fc);font-style:italic;font-weight:300;font-size:.9rem;color:rgba(10,10,8,.42);margin-top:.22rem;}
.pr-tags{display:flex;gap:.45rem;margin-top:.45rem;flex-wrap:wrap;}
.pr-tag{font-family:var(--fm);font-size:.5rem;letter-spacing:.08em;text-transform:uppercase;border:1px solid rgba(10,10,8,.16);padding:.15rem .5rem;border-radius:2px;color:rgba(10,10,8,.38);}
.pr-tag.live{border-color:rgba(192,57,43,.32);color:var(--red);}
.pr-meta{text-align:right;}
.pr-yr{font-family:var(--fm);font-size:.54rem;letter-spacing:.1em;opacity:.22;display:block;}
.pr-cue{font-family:var(--fc);font-style:italic;font-size:.82rem;color:var(--red);margin-top:.18rem;opacity:0;transition:opacity .2s;}
.pr:hover .pr-cue,.pr:focus-visible .pr-cue{opacity:1;}
.px{max-height:0;overflow:hidden;transition:max-height .55s cubic-bezier(.4,0,.2,1);}
.px.open{max-height:800px;}
.px-in{padding:1.6rem 0 1.6rem 3.8rem;display:grid;grid-template-columns:1.3fr 1fr;gap:3rem;border-bottom:1px solid rgba(10,10,8,.05);}
.px-body{font-size:1rem;font-weight:300;line-height:1.85;color:rgba(10,10,8,.56);}
.px-note{display:inline-block;margin-top:.7rem;font-family:var(--fm);font-size:.52rem;letter-spacing:.1em;text-transform:uppercase;color:var(--red);border:1px solid rgba(192,57,43,.28);padding:.16rem .55rem;border-radius:2px;}
.px-outcome{display:block;margin-top:.9rem;font-family:var(--fm);font-size:.52rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(10,10,8,.55);border-left:2px solid var(--red);padding-left:.6rem;line-height:1.7;}
.px-link{display:inline-flex;align-items:center;gap:.4rem;margin-top:.8rem;font-family:var(--fm);font-size:.5rem;letter-spacing:.1em;text-transform:uppercase;color:var(--red);text-decoration:none;border:1px solid rgba(192,57,43,.28);padding:.18rem .6rem;border-radius:2px;transition:background .2s,color .2s;}
.px-link:hover{background:var(--red);color:var(--paper);}
.px-stats{display:flex;flex-direction:column;gap:.8rem;}
.px-stat{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid rgba(10,10,8,.06);padding-bottom:.65rem;}
.px-sl{font-family:var(--fm);font-size:.52rem;letter-spacing:.1em;text-transform:uppercase;opacity:.28;}
.px-sv{font-family:var(--fb);font-size:1.1rem;letter-spacing:.02em;}
/* hoops photos inside project 05 */
.hoops-hero{position:relative;margin:1rem 0 .8rem;overflow:hidden;}
.hoops-hero img{width:100%;max-height:440px;object-fit:cover;object-position:center top;display:block;filter:grayscale(8%) sepia(6%);}
.hoops-pair{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;}
.hoops-pair>div{position:relative;overflow:hidden;}
.hoops-pair img{width:100%;height:280px;object-fit:cover;display:block;filter:grayscale(8%) sepia(6%);}
.photo-overlay{position:absolute;bottom:0;left:0;right:0;padding:24px 14px 12px;background:linear-gradient(transparent,rgba(10,10,8,.88));}
.photo-ol-label{font-family:var(--fm);font-size:.44rem;color:var(--red);letter-spacing:.14em;text-transform:uppercase;margin-bottom:3px;}
.photo-ol-sub{font-family:var(--fc);font-style:italic;font-size:.9rem;color:var(--paper);}

/* MARQUEE */
.mq-wrap{background:var(--red);padding:.65rem 0;overflow:hidden;}
.mq-inner{display:flex;gap:3rem;white-space:nowrap;width:max-content;animation:mq 22s linear infinite;}
.mq-inner:hover{animation-play-state:paused;}
.mi{font-family:var(--fm);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--paper);display:flex;align-items:center;gap:.6rem;}
.mi::after{content:'·';opacity:.4;}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* S4 SKILLS */
#s4{background:var(--ink);color:var(--paper);padding:7rem 3.5rem;position:relative;overflow:hidden;}
.s4-bg{position:absolute;font-family:var(--fb);font-size:26vw;color:rgba(242,239,232,.02);top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap;pointer-events:none;}
.s4-h{font-family:var(--fb);font-size:clamp(2.6rem,5vw,5.5rem);line-height:.9;color:var(--paper);position:relative;z-index:2;margin-bottom:4rem;}
.s4-h .acc{color:var(--red);}
.sk-track{position:relative;z-index:2;}
.sk-row{display:flex;align-items:center;gap:2rem;padding:1.3rem 0;border-bottom:1px solid rgba(242,239,232,.06);}
.sk-row:first-child{border-top:1px solid rgba(242,239,232,.06);}
.sk-lbl{font-family:var(--fm);font-size:.56rem;letter-spacing:.13em;text-transform:uppercase;color:rgba(242,239,232,.3);min-width:145px;}
.sk-bar{flex:1;height:1px;background:rgba(242,239,232,.07);position:relative;}
.sk-fill{position:absolute;left:0;top:0;height:100%;background:var(--paper);width:0;transition:width 1.4s cubic-bezier(.4,0,.2,1);}
.sk-pills{display:flex;gap:.45rem;flex-wrap:wrap;min-width:215px;justify-content:flex-end;}
.sk-pill{font-family:var(--fm);font-size:.48rem;letter-spacing:.08em;text-transform:uppercase;border:1px solid rgba(242,239,232,.11);padding:.16rem .55rem;border-radius:2px;color:rgba(242,239,232,.38);}
.tools-strip{position:relative;z-index:2;margin-top:3rem;padding-top:2.2rem;border-top:1px solid rgba(242,239,232,.06);}
.tools-lbl{font-family:var(--fm);font-size:.54rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(242,239,232,.22);margin-bottom:1rem;}
.tools-list{display:flex;gap:.5rem;flex-wrap:wrap;}
.tool{font-family:var(--fm);font-size:.52rem;letter-spacing:.08em;text-transform:uppercase;border:1px solid rgba(242,239,232,.09);padding:.2rem .65rem;border-radius:2px;color:rgba(242,239,232,.32);transition:border-color .2s,color .2s;}
.tool:hover{border-color:rgba(242,239,232,.28);color:rgba(242,239,232,.65);}
.tool.cert{border-color:rgba(192,57,43,.28);color:rgba(192,57,43,.65);}

/* SERVICES — added after skills, still in the single-page flow */
#s6{padding:7rem 3.5rem;position:relative;z-index:1;isolation:isolate;}
.s6-h{font-family:var(--fb);font-size:clamp(2.6rem,5vw,5.5rem);line-height:.9;margin-bottom:4rem;}
.svc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:0;border:1px solid rgba(10,10,8,.08);margin-bottom:5rem;}
.svc-card{padding:36px 30px;border-right:1px solid rgba(10,10,8,.08);border-bottom:1px solid rgba(10,10,8,.08);transition:background .25s;cursor:default;}
.svc-card:hover{background:rgba(10,10,8,.02);}
.svc-card-h{font-family:var(--fb);font-size:1.45rem;color:var(--ink);margin-bottom:10px;line-height:1;}
.svc-card-b{font-family:var(--fm);font-size:.56rem;line-height:1.9;color:rgba(10,10,8,.42);}
.tier-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;}
.tier-card{padding:32px 28px;border:1px solid rgba(10,10,8,.12);transition:border-color .25s,background .25s;cursor:default;}
.tier-card:hover{border-color:var(--red);background:rgba(192,57,43,.02);}
.tier-name{font-family:var(--fm);font-size:.52rem;letter-spacing:.12em;text-transform:uppercase;color:var(--red);margin-bottom:14px;}
.tier-desc{font-family:var(--fm);font-size:.54rem;color:rgba(10,10,8,.42);line-height:1.8;}

/* S5 CONTACT */
#s5{padding:7rem 3.5rem;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;position:relative;z-index:1;isolation:isolate;}
.s5-h{font-family:var(--fb);font-size:clamp(2.2rem,5vw,5.5rem);line-height:.88;margin-bottom:1.6rem;word-break:break-word;}
.s5-sub{font-size:1.05rem;font-weight:300;line-height:1.85;color:rgba(10,10,8,.5);max-width:340px;margin-bottom:2rem;}
.c-links{display:flex;flex-direction:column;isolation:isolate;}
.cl{display:flex;align-items:center;justify-content:space-between;padding:1.5rem 0;border-bottom:1px solid rgba(10,10,8,.08);text-decoration:none;color:var(--ink);position:relative;isolation:isolate;transition:padding-left .3s;}
.cl:first-child{border-top:1px solid rgba(10,10,8,.08);}
.cl::before{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:var(--red);transition:width .3s;z-index:-1;}
.cl:hover{padding-left:.9rem;}
.cl:hover::before{width:3px;}
.cl-n{font-family:var(--fb);font-size:1.6rem;letter-spacing:.02em;transition:color .2s;position:relative;z-index:1;}
.cl:hover .cl-n{color:var(--red);}
.cl-a{font-family:var(--fm);font-size:.54rem;letter-spacing:.1em;opacity:.26;transition:opacity .2s,transform .2s;position:relative;z-index:1;}
.cl:hover .cl-a{opacity:.85;transform:translateX(4px);}
/* contact form */
.cf{display:flex;flex-direction:column;gap:2rem;}
.cf-field{}
.cf-label{font-family:var(--fm);font-size:.5rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(10,10,8,.35);display:block;margin-bottom:8px;transition:color .2s;}
.cf-label.on{color:var(--red);}
.cf-label.err{color:#c0392b;}
.cf-input{width:100%;background:transparent;border:none;border-bottom:1px solid rgba(10,10,8,.18);color:var(--ink);font-family:var(--fm);font-size:.72rem;padding:10px 0;outline:none;transition:border-color .25s;letter-spacing:.04em;box-sizing:border-box;}
.cf-input:focus{border-bottom-color:var(--red);}
.cf-input.err-border{border-bottom-color:#c0392b;}
textarea.cf-input{resize:none;line-height:1.8;}
.cf-btn{align-self:flex-start;font-family:var(--fm);font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;padding:.6rem 1.8rem;background:var(--ink);color:var(--paper);border:none;cursor:pointer;transition:background .2s;border-radius:2px;}
.cf-btn:hover{background:var(--red);}
.cf-sent{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:260px;gap:12px;}
.cf-sent-tick{font-family:var(--fc);font-size:3rem;color:var(--red);}
.cf-sent-msg{font-family:var(--fm);font-size:.56rem;color:rgba(10,10,8,.45);letter-spacing:.08em;}

/* FOOTER */
footer{background:var(--ink);padding:2rem 3.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.8rem;}
.ft-l{font-family:var(--fm);font-size:.54rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(242,239,232,.22);}
.ft-r{font-family:var(--fm);font-size:.52rem;letter-spacing:.1em;color:rgba(242,239,232,.14);}
.ft-r span{color:var(--red);}
.ft-links{display:flex;gap:1.4rem;}
.ft-links a{font-family:var(--fm);font-size:.5rem;color:rgba(242,239,232,.28);text-decoration:none;letter-spacing:.08em;transition:color .2s;}
.ft-links a:hover{color:var(--red);}

/* RESPONSIVE */
@media(max-width:860px){
  .filmstrip{display:none;}
  nav{left:0;right:0;padding:0 1.2rem;}
  .nav-links{gap:.8rem;}
  #s1,#s3,#s4,#s5,#s6{padding-left:1.4rem;padding-right:1.4rem;}
  #s2{grid-template-columns:1fr;gap:1.5rem;padding:4rem 1.4rem;}
  .s2-idx{position:static;}
  #s5{grid-template-columns:1fr;gap:3rem;}
  .px-in{grid-template-columns:1fr;}
  .pr{grid-template-columns:2rem 1fr;}
  .pr-meta{display:none;}
  .sk-row{flex-wrap:wrap;}
  .sk-pills{min-width:auto;}
  .s2-ext-grid{grid-template-columns:1fr;}
  .s2-hs{position:static;}
  .press-grid{grid-template-columns:1fr;}
  .hoops-pair{grid-template-columns:1fr;}
  .hoops-pair img{height:220px;}
  footer{flex-direction:column;gap:.8rem;text-align:center;}
}
@media(max-width:580px){
  .nav-links{gap:.5rem;}
  .nav-links a,.nav-links button.nav-a{font-size:.44rem;letter-spacing:.06em;}
}
`;

// ─────────────────────────────────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────────────────────────────────
function useSEO() {
  useEffect(() => {
    document.title = "Mridul Pathak — Decision Analytics & Product Strategy";
    const sm = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    sm("name","description","MDA student at VCU, Richmond VA. Decision analytics, market entry strategy, demand forecasting, product management. CPT/OPT ready. Incoming PM at TMF May 2026.");
    sm("name","author","Mridul Pathak");
    sm("name","keywords","Mridul Pathak, Decision Analytics, Product Manager, VCU, Richmond, Market Entry, Demand Forecasting, CPT, OPT");
    sm("property","og:type","website"); sm("property","og:url","https://www.mridulpathak.com/");
    sm("property","og:title","Mridul Pathak — Decision Analytics & Product Strategy");
    sm("property","og:description","MDA student at VCU (Marketing Concentration). Decision analytics, market entry, forecasting, product management. CPT/OPT ready. Incoming PM at TMF May 2026.");
    sm("property","og:image","https://www.mridulpathak.com/og-preview.jpg");
    sm("property","og:image:width","1200"); sm("property","og:image:height","630");
    sm("property","og:locale","en_US"); sm("property","og:site_name","Mridul Pathak");
    sm("name","twitter:card","summary_large_image");
    sm("name","twitter:title","Mridul Pathak — Decision Analytics & Product Strategy");
    sm("name","twitter:description","MDA student at VCU. Decision analytics, market entry, forecasting, product management. CPT/OPT ready. Incoming PM at TMF May 2026.");
    sm("name","twitter:image","https://www.mridulpathak.com/og-preview.jpg");
    let can = document.querySelector("link[rel='canonical']"); if (!can) { can = document.createElement("link"); can.setAttribute("rel","canonical"); document.head.appendChild(can); } can.setAttribute("href","https://www.mridulpathak.com/");
    let sd = document.getElementById("schema-person"); if (!sd) { sd = document.createElement("script"); sd.id = "schema-person"; sd.type = "application/ld+json"; document.head.appendChild(sd); }
    sd.textContent = JSON.stringify({ "@context":"https://schema.org","@type":"Person","name":"Mridul Pathak","url":"https://www.mridulpathak.com","jobTitle":"Decision Analytics Student · CPT/OPT Ready · Incoming PM at TMF","email":"pathakm3@vcu.edu","alumniOf":{"@type":"CollegeOrUniversity","name":"Virginia Commonwealth University"},"address":{"@type":"PostalAddress","addressLocality":"Richmond","addressRegion":"VA","addressCountry":"US"},"sameAs":["https://linkedin.com/in/mridul-pathak","https://github.com/m4impact"] });
  }, []);
}

// ─────────────────────────────────────────────────────────────────────────
// CURSOR
// ─────────────────────────────────────────────────────────────────────────
function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const mv = e => { el.style.left = e.clientX + "px"; el.style.top = e.clientY + "px"; document.body.classList.toggle("lh", !!e.target.closest("a,button,.pr,.cl,.svc-card,.tier-card")); };
    const hide = () => { el.style.opacity = "0"; };
    const show = () => { el.style.opacity = "1"; };
    document.addEventListener("mousemove", mv);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    return () => { document.removeEventListener("mousemove", mv); document.removeEventListener("mouseleave", hide); document.removeEventListener("mouseenter", show); };
  }, []);
  return <div ref={ref} id="cur" aria-hidden="true" />;
}

// ─────────────────────────────────────────────────────────────────────────
// FILMSTRIP
// ─────────────────────────────────────────────────────────────────────────
function Filmstrip() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const calc = () => setN(Math.ceil(window.innerHeight / 36) + 4);
    calc(); window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  const spots = Array.from({ length: n });
  return (<>
    <div className="filmstrip left" aria-hidden="true">{spots.map((_, i) => <div key={i} className="sp" />)}</div>
    <div className="filmstrip right" aria-hidden="true">{spots.map((_, i) => <div key={i} className="sp" />)}</div>
  </>);
}

// ─────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────
function Nav() {
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 55);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <nav className={sc ? "sc" : ""} role="navigation" aria-label="Main navigation">
      <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Mridul Pathak</button>
      <div className="nav-links">
        {[["s2","About"],["s3","Work"],["s4","Skills"],["s6","Services"],["s5","Contact"]].map(([id, label]) => (
          <button key={id} className="nav-a" onClick={() => go(id)} aria-label={`Go to ${label} section`}>{label}</button>
        ))}
        <a href="/resume.pdf" className="resume-lnk" target="_blank" rel="noopener noreferrer" aria-label="Download resume PDF">Résumé ↓</a>
      </div>
      <div className="nav-st" aria-label="Current status"><div className="sd" aria-hidden="true" />Student · Building</div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────────────────────────────────
function useScrollReveal(dep) {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add("in"), i * 55); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".sr").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

// ─────────────────────────────────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────────────────────────────────
const MQ = ["Decision Analytics","Market Entry Strategy","Demand Forecasting","Product Management","Stakeholder Communication","Go-To-Market"];
function Marquee() {
  return (
    <div className="mq-wrap" aria-hidden="true">
      <div className="mq-inner">{[...MQ,...MQ].map((t, i) => <span key={i} className="mi">{t}</span>)}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// S1 — HERO
// ─────────────────────────────────────────────────────────────────────────
const HEADLINES = ["Data finds the story.\nI tell it.", "Numbers don't lie.\nContext does.", "Every decision\nleaves a signal."];

function S1() {
  const [hIdx, setHIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [lines, setLines] = useState([]);
  const [tc, setTc] = useState("00:00:00:00");

  useEffect(() => {
    const build = () => setLines(Array.from({ length: Math.ceil(window.innerHeight / 50) + 2 }, (_, i) => i * 50));
    build(); window.addEventListener("resize", build); return () => window.removeEventListener("resize", build);
  }, []);

  useEffect(() => {
    const t = setInterval(() => { setFading(true); setTimeout(() => { setHIdx(i => (i + 1) % HEADLINES.length); setFading(false); }, 500); }, 3800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const h = () => {
      const p = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      const s = Math.floor(p * 7200), fr = Math.floor((p * 7200 % 1) * 24);
      const pad = n => String(n).padStart(2, "0");
      setTc(`${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(fr)}`);
    };
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <section id="s1" aria-label="Introduction">
      <div className="ruled" aria-hidden="true">{lines.map(t => <div key={t} className="rl" style={{ top: t }} />)}</div>
      <div className="lbox t" aria-hidden="true" />
      <div className="lbox b" aria-hidden="true" />
      <div className="tc">
        <div className="tc-idx">// 001 &nbsp;·&nbsp; Richmond, VA &nbsp;·&nbsp; VCU MDA '26</div>
        <h1 className="tc-name">Mridul<br />Pathak</h1>
        <p className="tc-sub" style={{ opacity: fading ? 0 : 1 }}>{HEADLINES[hIdx]}</p>
        <div className="tc-tags">
          {["Product Strategy","Decision Analytics","Market Entry","Forecasting","CPT / OPT Ready"].map(t => <span key={t} className="tc-tag">{t}</span>)}
          <span className="tc-tag hi">Joining TMF as PM · May 2026</span>
        </div>
      </div>
      <div className="timecode" aria-hidden="true">{tc}</div>
      <div className="sc-cue" aria-hidden="true"><div className="sc-arr" />Scroll to play</div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// S2 — ABOUT  (sticky sidebar + bio + headshot + timeline + certs + press)
// ─────────────────────────────────────────────────────────────────────────
function S2() {
  return (
    <section id="s2" aria-label="About">
      {/* sticky sidebar index */}
      <div className="s2-idx sr" aria-hidden="true">
        // 002<br />About<br /><br />
        VCU<br />Richmond, VA<br /><br />
        MDA · Marketing<br />Concentration<br /><br />
        Grad: Dec 2026<br /><br />
        MBA · UPES<br />India · 2024–25<br /><br />
        B.A. Econ<br />Delhi · 2021
      </div>

      {/* main body */}
      <div>
        <h2 className="s2-h sr">The kind of<br />analyst who<br />actually <span className="acc">ships.</span></h2>
        <p className="s2-p sr d1">I'm a <strong>Master's student in Decision Analytics</strong> at Virginia Commonwealth University, concentrating in marketing. My coursework is applied — Decision Analytics, Forecasting Methods, Marketing Analytics, Statistical Modelling, Prescriptive Analytics. Real businesses, real data, real decisions.</p>
        <p className="s2-p sr d2">On the side, I'm building <strong>MAT — My Ambition Tool</strong>, a free business planning platform for first-time founders who can't afford consultants. Still in progress, but that's the honest truth of building something from scratch.</p>
        <p className="s2-p sr d3">In <strong>May 2026</strong>, I join <strong>TMF (Richmond)</strong> as a Product Manager. I'm actively seeking <strong>CPT/OPT-aligned opportunities</strong> to translate analytical insights into commercial and growth-focused decisions — because showing up prepared is the only way I know how.</p>
        <div className="s2-rule sr" />

        {/* facts grid */}
        <div className="facts sr">
          {[["Degree","MDA","· VCU '26"],["Undergrad","B.A. Econ","· Delhi"],null,null].filter((_,i)=>i<2).map((f,i) => (
            <div key={i} className="fact">
              <div className="fact-l">{f[0]}</div>
              <div className="fact-v">{f[1]} <span className="sm">{f[2]}</span></div>
            </div>
          ))}
          <div className="fact"><div className="fact-l">Joining</div><div className="fact-v red">PM · TMF <span className="sm" style={{color:"var(--red)",opacity:.7}}>May '26</span></div></div>
          <div className="fact"><div className="fact-l">Status</div><div className="fact-v" style={{fontSize:".85rem",color:"var(--red)"}}>CPT / OPT Ready</div></div>
          <div className="fact"><div className="fact-l">Activities</div><div className="fact-v" style={{fontSize:".82rem"}}>AMA <span className="sm">· Gamma Iota Sigma</span></div></div>
          <div className="fact"><div className="fact-l">Currently</div><div className="fact-v" style={{fontSize:"1rem",color:"var(--red)"}}>Building MAT</div></div>
        </div>

        <a className="resume-btn sr d2" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download resume PDF">Resume </a>

        {/* ── EXTENDED: headshot + timeline + certs + press ── */}
        <div className="s2-extended">

          {/* headshot + bio detail */}
          <div className="s2-ext-grid sr">
            <div>
              <div style={{fontFamily:"var(--fm)",fontSize:".52rem",letterSpacing:".18em",textTransform:"uppercase",opacity:.28,marginBottom:"1rem"}}>// The full story</div>
              {["I grew up watching decisions get made with the wrong data — or no data at all. That gap between what numbers show and what people actually do became the thing I kept coming back to.",
                "Economics at Delhi gave me the language. An MBA at UPES gave me the pressure. In between, I worked in industrial supply — not glamorous, but it taught me how real businesses make decisions under real constraints.",
                "In 2024 I stopped theorizing and built something. A basketball tournament in the mountains of Uttarakhand. No blueprint, no budget, just a belief it was worth doing. The Indian Air Force sent teams. Corporate sponsors came on board. A local news channel showed up — twice. 1,000 people filled the stands.",
                "Now I'm at VCU completing an MS in Decision Analytics (Marketing Concentration), graduating December 2026. Find the signal. Make it useful. Help someone decide.",
              ].map((p, i) => <p key={i} className="s2-p" style={{transitionDelay:`${i*.08}s`}}>{p}</p>)}
            </div>
            <div className="s2-hs">
              <img src="/mridul-headshot.jpg" alt="Mridul Pathak at the Uttarakhand Hoops Fest press conference, March 2024" />
              <div className="s2-hs-cap">
                <div className="hc-label">Press Conference</div>
                <div className="hc-sub">Uttarakhand Hoops Fest · March 2024</div>
              </div>
            </div>
          </div>

          {/* timeline */}
          <div style={{marginBottom:"4rem"}}>
            <div style={{fontFamily:"var(--fm)",fontSize:".52rem",letterSpacing:".18em",textTransform:"uppercase",opacity:.28,marginBottom:"1.8rem"}} className="sr">// The path</div>
            <div className="tl">
              {[{yr:"2018–21",place:"Delhi",note:"BA Economics · University of Delhi · Markets are just people making decisions under uncertainty."},
                {yr:"2022–23",place:"Rudrapur",note:"Marketing Intern · Industrial supply sector · Learned that data without context is just noise."},
                {yr:"2024–25",place:"Dehradun",note:"MBA · UPES · Founded Uttarakhand Hoops Fest. Built it from nothing. 1,000+ people showed up."},
                {yr:"Aug 2025–",place:"Richmond, VA",note:"MS Decision Analytics · VCU · Marketing Concentration · Building the quantitative foundation to match the intuitions earned in the field. Graduating Dec 2026."},
              ].map((t, i) => (
                <div key={i} className="tl-row sr" style={{transitionDelay:`${i*.1}s`}}>
                  <div className="tl-yr">{t.yr}</div>
                  <div className="tl-dot" aria-hidden="true" />
                  <div><div className="tl-place">{t.place}</div><div className="tl-note">{t.note}</div></div>
                </div>
              ))}
            </div>
          </div>

          {/* certifications */}
          <div style={{marginBottom:"4rem"}}>
            <div style={{fontFamily:"var(--fm)",fontSize:".52rem",letterSpacing:".18em",textTransform:"uppercase",opacity:.28,marginBottom:"1.8rem"}} className="sr">// Certifications</div>
            <div className="cert-list">
              {[{name:"Project Management Certificate",org:"London School of Business & Finance",date:"Jul 2025"},
                {name:"VCU Leadership Foundations",org:"Virginia Commonwealth University",date:"Dec 2025"},
                {name:"CAPM — Certified Associate in Project Management",org:"Project Management Institute (PMI)",date:"In Progress"},
              ].map((c, i) => (
                <div key={i} className="cert-row sr" style={{transitionDelay:`${i*.1}s`}}>
                  <div><div className="cert-name">{c.name}</div><div className="cert-org">{c.org}</div></div>
                  <div className="cert-date">{c.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* press / YouTube */}
          <div>
            <div style={{fontFamily:"var(--fm)",fontSize:".52rem",letterSpacing:".18em",textTransform:"uppercase",opacity:.28,marginBottom:".8rem"}} className="sr">// In the press</div>
            <p className="s2-p sr d1" style={{marginBottom:"2rem"}}>A local news channel covered the event twice — before and on the day itself. That doesn't happen unless something real is being built.</p>
            <div className="press-grid">
              <div className="press-card sr">
                <div className="press-video-wrap">
                  <iframe src="https://www.youtube.com/embed/NaBxIBpsMDE" title="Uttarakhand Hoops Fest — pre-event press conference" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                </div>
                <div className="press-card-body">
                  <div className="press-card-label">Pre-event · Press Conference</div>
                  <blockquote className="press-card-quote">"Nothing meaningful happens alone. This city showed up for its youth — and its youth showed up for sport."</blockquote>
                </div>
              </div>
              <div className="press-card sr d1">
                <div className="press-video-wrap">
                  <iframe src="https://www.youtube.com/embed/UuKnFZZl_vs?start=170" title="Uttarakhand Hoops Fest — event day news coverage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                </div>
                <div className="press-card-body">
                  <div className="press-card-label">Event Day · News Coverage</div>
                  <blockquote className="press-card-quote">"We wanted them to walk into that stadium and realise — there is a future here."</blockquote>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// S3 — WORK  (accordion projects + Hoops Fest photos)
// ─────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  { n:"01", name:"MAT — My Ambition Tool", sub:"Free business planning platform for first-time founders", tags:[["live","In Progress"],["","Product"],["","Web App"],["","Free"]], yr:"2026 →",
    body:"A free tool that walks anyone — student, street vendor, first-time founder — through building a real business plan, cost model, and 12-month strategy roadmap. Plain questions. No jargon, no MBA needed.\n\nBuilding this alongside my degree. Currently in design and early development. The goal isn't to look impressive — it's to be genuinely useful to people who've never had access to this kind of help.",
    outcome:"Goal: Launch beta to 50 early users by graduation (Dec 2026)", note:"// Active Build — not launched yet",
    stats:[["Status","In Development"],["Target","First-time Founders"],["Price","Free"],["Stage","Design + Early Build"]], link:null, photos:false },
  { n:"02", name:"Crafteve India — U.S. Market Entry", sub:"Decision analytics consulting · VCU · Nov 2025", tags:[["","Market Analysis"],["","CBA"],["","Sensitivity Analysis"],["","Go-To-Market"]], yr:"Nov 2025",
    body:"Crafteve is an Indian manufacturer of handcrafted wooden gifting décor. They had ₹100,000 to invest and one question: expand in India, or pilot entry into the U.S.?\n\nI ran market, customer, competitor, and comparative analysis — plus a sensitivity analysis modelling tariffs, logistics costs, and demand variance. Recommendation: phased U.S. pilot, with clear KPIs to decide whether to continue or redirect capital.",
    outcome:"Outcome: Client adopted the phased pilot recommendation. KPI framework used to set Q1 2026 review gate.",
    stats:[["Client","Crafteve India"],["Recommendation","U.S. Pilot"],["Methods","CBA · Sensitivity"],["Course","Decision Analytics · VCU"]], link:null, photos:false },
  { n:"03", name:"Nightingale Ice Cream — Demand Forecasting", sub:"Real client project · Forecasting Methods · VCU · Nov 2025", tags:[["","Forecasting"],["","R Studio"],["","Seasonality"],["","Sensitivity"]], yr:"Nov 2025",
    body:"A forecasting project for Nightingale Ice Cream, a real Richmond business. Using R Studio, I applied moving averages and exponential smoothing to model sales patterns, seasonality, and quarter-ahead demand.\n\nRan ±5–10% sensitivity scenarios to give the owner a range of realistic outcomes — not just a point estimate that could mislead planning.",
    outcome:"Outcome: Owner used Q1 2026 forecast to adjust inventory and staffing — reducing estimated overstock by ~12%.",
    stats:[["Tools","R Studio"],["Methods","Exp. Smoothing · MA"],["Output","Q-ahead Forecast"],["Course","Forecasting Methods · VCU"]], link:"https://drive.google.com/YOUR_NIGHTINGALE_LINK", photos:false },
  { n:"04", name:"Krishi Drone — Agri-Tech Startup", sub:"UPES Incubator Program · Precision farming for rural India", tags:[["","Startup"],["","Incubator"],["","GTM Strategy"],["","Subscription Model"]], yr:"Aug 2024",
    body:"A precision agriculture drone startup that reached the UPES incubator. The concept: affordable drone-based crop monitoring for Indian smallholder farmers, on a subscription model.\n\nCollaborated with the UPES School of Engineering on prototyping. I led the business case — CBA on build vs. launch cost, farmer-first market positioning, and a go-to-market strategy built around seasonal demand and affordability.",
    outcome:"Outcome: Business case accepted into UPES incubator program. Prototype phase initiated with School of Engineering.",
    stats:[["Stage","UPES Incubator"],["Model","Subscription"],["Market","Rural India"],["Year","2024"]], link:"https://drive.google.com/YOUR_KRISHI_LINK", photos:false },
  { n:"05", name:"Uttarakhand Hoops Fest", sub:"Founder & President · 3-day sports event · 1,000+ attendees", tags:[["","Founder"],["","Event Operations"],["","Sponsorships"],["","Ongoing"]], yr:"Feb 2024 →",
    body:"Founded and ran a 3-day basketball tournament in Uttarakhand, India. Managed logistics, vendor relationships, sponsorship outreach, and team coordination from scratch.\n\n1,000+ people showed up. It's where I learned the actual difference between planning something and executing it. That gap is where most things fail — and where I learned to not let them.",
    outcome:"Outcome: Secured 4 local sponsors. Broke even in year one. Planning the 2026 edition with an expanded format and regional teams.",
    stats:[["Attendees","1,000+"],["Format","3-day Event"],["Role","Founder & President"],["Status","Ongoing"]], link:null, photos:true },
];

function ProjectRow({ p }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(o => !o), []);
  const onKey = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } };
  return (
    <div>
      <div className="pr sr" role="button" tabIndex={0} aria-expanded={open} aria-controls={`px-${p.n}`} onClick={toggle} onKeyDown={onKey}>
        <span className="pr-num" aria-hidden="true">{p.n}</span>
        <div className="pr-info">
          <div className="pr-name">{p.name}</div>
          <div className="pr-sub">{p.sub}</div>
          <div className="pr-tags">{p.tags.map(([cls, t], i) => <span key={i} className={`pr-tag${cls ? " " + cls : ""}`}>{t}</span>)}</div>
        </div>
        <div className="pr-meta" aria-hidden="true">
          <span className="pr-yr">{p.yr}</span>
          <div className="pr-cue">{open ? "Collapse ↑" : "Expand →"}</div>
        </div>
      </div>
      <div className={`px${open ? " open" : ""}`} id={`px-${p.n}`} role="region" aria-label={`${p.name} details`}>
        <div className="px-in">
          <div className="px-body">
            {p.body.split("\n\n").map((para, i) => <p key={i} style={{ marginBottom: "1rem" }}>{para}</p>)}
            <span className="px-outcome">{p.outcome}</span>
            {p.note && <span className="px-note" style={{ display: "block", marginTop: "1rem" }}>{p.note}</span>}
            {p.link && <a className="px-link" href={p.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>View Case Study →</a>}
            {p.photos && (
              <div style={{ marginTop: "1.5rem" }}>
                <div className="hoops-hero">
                  <img src="/hoops-champions.jpg" alt="Uttarakhand Hoops Fest champions receiving ₹51,000 prize, Kashipur March 2024" />
                  <div className="photo-overlay">
                    <div className="photo-ol-label">Kashipur · March 2024</div>
                    <div className="photo-ol-sub">Champions receive ₹51,000 prize — Uttarakhand Hoops Fest Basketball Tournament</div>
                  </div>
                </div>
                <div className="hoops-pair">
                  <div>
                    <img src="/hoops-ceremony.jpg" alt="Opening ceremony at Uttarakhand Hoops Fest" />
                    <div className="photo-overlay"><div className="photo-ol-label">Opening Ceremony</div></div>
                  </div>
                  <div>
                    <img src="/hoops-opening.jpg" alt="Lamp lighting inauguration at Uttarakhand Hoops Fest" />
                    <div className="photo-overlay"><div className="photo-ol-label">Inauguration · Lamp Lighting</div></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="px-stats">{p.stats.map(([l, v]) => <div key={l} className="px-stat"><span className="px-sl">{l}</span><span className="px-sv">{v}</span></div>)}</div>
        </div>
      </div>
    </div>
  );
}

function S3() {
  return (
    <section id="s3" aria-label="Selected work">
      <div className="s3-head sr">
        <h2 className="s3-h">Selected<br />Work.</h2>
        <span className="s3-ct">05 projects</span>
      </div>
      {PROJECTS.map(p => <ProjectRow key={p.n} p={p} />)}
      <div style={{ borderTop: "1px solid rgba(10,10,8,.08)" }} />
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// S4 — SKILLS  (dark section, exact HTML theme)
// ─────────────────────────────────────────────────────────────────────────
function S4() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return; e.target.querySelectorAll(".sk-fill").forEach(f => { f.style.width = f.dataset.w; }); io.unobserve(e.target); });
    }, { threshold: .1 });
    const t = document.querySelector(".sk-track"); if (t) io.observe(t);
    return () => io.disconnect();
  }, []);

  const skills = [
    { lbl: "Strategy & Analysis", w: "84%", a: 84, pills: ["Market Entry","CBA","Sensitivity"] },
    { lbl: "Forecasting", w: "76%", a: 76, pills: ["Exp. Smoothing","Moving Avg","R Studio"], d: "d1" },
    { lbl: "Product Thinking", w: "72%", a: 72, pills: ["Roadmapping","GTM","User Research"], d: "d2" },
    { lbl: "Stakeholder Comms", w: "80%", a: 80, pills: ["Decks","Reporting","Cross-functional"], d: "d3" },
    { lbl: "Data & Visualisation", w: "68%", a: 68, pills: ["Excel","Tableau","Power BI"] },
  ];

  return (
    <section id="s4" aria-label="Skills">
      <div className="s4-bg" aria-hidden="true">SKILL</div>
      <h2 className="s4-h sr">What I<br />actually <span className="acc">know.</span></h2>
      <div className="sk-track">
        {skills.map(({ lbl, w, a, pills, d }, i) => (
          <div key={i} className={`sk-row sr${d ? " " + d : ""}`}>
            <span className="sk-lbl">{lbl}</span>
            <div className="sk-bar" role="progressbar" aria-valuenow={a} aria-valuemin={0} aria-valuemax={100} aria-label={`${lbl} proficiency ${a}%`}><div className="sk-fill" data-w={w} /></div>
            <div className="sk-pills">{pills.map(p => <span key={p} className="sk-pill">{p}</span>)}</div>
          </div>
        ))}
      </div>
      <div className="tools-strip sr d2">
        <div className="tools-lbl">// Tools</div>
        <div className="tools-list">{["R Studio","Python (basic)","Excel","Tableau","Power BI","AMPL","PowerPoint","MS Word"].map(t => <span key={t} className="tool">{t}</span>)}</div>
      </div>
      <div className="tools-strip sr d3">
        <div className="tools-lbl">// Certifications</div>
        <div className="tools-list">{["Project Mgmt Cert · LSBF · Jul 2025","VCU Leadership Foundations · Dec 2025","CAPM · PMI · In Progress"].map(c => <span key={c} className="tool cert">{c}</span>)}</div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// S6 — SERVICES  (between skills and contact, matching the HTML style)
// ─────────────────────────────────────────────────────────────────────────
const SERVICES = [
  { title: "Market Research Reports", body: "Competitive mapping, segment sizing, consumer profiling — packaged into a report you can act on." },
  { title: "Consumer Insight Decks", body: "Qualitative and quantitative research into how your customers think and why they buy. Presentation-ready." },
  { title: "Demand Forecasting", body: "Time series modeling to help you anticipate what's coming. Moving averages, exponential smoothing, scenario testing." },
  { title: "Sponsorship Consulting", body: "From pitch decks to partnership structures. Built on real experience securing sponsors for a 1,000-person event." },
  { title: "Event Strategy", body: "End-to-end strategic planning — from concept to execution. Operations, stakeholder management, commercial strategy." },
  { title: "Data Analysis & Visualization", body: "Turn raw data into clarity. Python, R, Tableau, Power BI — whichever gets the insight across cleanest." },
];
const TIERS = [
  { name: "Starter", desc: "For individuals and early-stage startups who have a specific question and need a clear, honest answer." },
  { name: "Pro", desc: "For growing businesses with defined research or analytics needs — ongoing or one-off." },
  { name: "Expert", desc: "For established teams requiring depth, multiple deliverables, or someone to think alongside them." },
];

function S6() {
  return (
    <section id="s6" aria-label="Services">
      <div className="s3-head sr">
        <h2 className="s6-h">What I<br />can do.</h2>
        <span className="s3-ct">06 offerings</span>
      </div>
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <div key={i} className="svc-card sr" style={{ transitionDelay: `${i * .07}s` }}>
            <div className="svc-card-h">{s.title}</div>
            <p className="svc-card-b">{s.body}</p>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: "var(--fm)", fontSize: ".52rem", letterSpacing: ".18em", textTransform: "uppercase", opacity: .28, marginBottom: "1.8rem" }} className="sr">// How I work</div>

      {/* marketing hook — lowers the barrier to reach out */}
      <div className="sr d1" style={{ maxWidth: 620, marginBottom: "3.5rem" }}>
        <p style={{ fontFamily: "var(--fc)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.2rem,2.2vw,1.8rem)", color: "var(--ink)", lineHeight: 1.45, marginBottom: "1.2rem" }}>
          It's not always about the money.
        </p>
        <p style={{ fontFamily: "var(--fm)", fontSize: ".6rem", color: "rgba(10,10,8,.45)", lineHeight: 1.95, letterSpacing: ".03em" }}>
          Some of the best work starts with a conversation — no brief, no budget, no commitment.
          If you have a problem that needs thinking through, reach out. I'd rather talk first
          and figure out what actually makes sense than send a quote into the void.
          Scope, timeline, and everything else can follow once we know it's worth pursuing.
        </p>
        <p style={{ fontFamily: "var(--fm)", fontSize: ".6rem", color: "rgba(10,10,8,.3)", lineHeight: 1.95, letterSpacing: ".03em", marginTop: ".8rem" }}>
          // The conversation is always free.
        </p>
      </div>

      <div className="tier-row">
        {TIERS.map((t, i) => (
          <div key={i} className="tier-card sr" style={{ transitionDelay: `${i * .12}s` }}>
            <div className="tier-name">{t.name}</div>
            <p className="tier-desc">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA nudge */}
      <div className="sr d3" style={{ marginTop: "2.8rem", paddingTop: "2.2rem", borderTop: "1px solid rgba(10,10,8,.08)" }}>
        <p style={{ fontFamily: "var(--fm)", fontSize: ".58rem", color: "rgba(10,10,8,.38)", lineHeight: 1.9, letterSpacing: ".03em", maxWidth: 520 }}>
          Not sure which fits? Don't worry about it.
          Drop a message below — tell me what you're working on and what you need.
          That's enough to start.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// S5 — CONTACT  (exact HTML 2-col layout + form)
// ─────────────────────────────────────────────────────────────────────────
function S5() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e); return Object.keys(e).length === 0;
  };
  const submit = e => { e.preventDefault(); if (validate()) setSent(true); };

  const iStyle = f => ({ width: "100%", background: "transparent", border: "none", borderBottom: `1px solid ${focused === f ? "var(--red)" : errors[f] ? "#c0392b" : "rgba(10,10,8,.18)"}`, color: "var(--ink)", fontFamily: "var(--fm)", fontSize: ".72rem", padding: "10px 0", outline: "none", transition: "border-color .25s", letterSpacing: ".04em", boxSizing: "border-box" });

  return (
    <section id="s5" aria-label="Contact">
      {/* left: headline + links */}
      <div>
        <h2 className="s5-h sr">Let's talk<br />about<br />something<br />real.</h2>
        <p className="s5-sub sr d1">If you're building something, need analysis done, or just want to talk strategy — I'm around. Always interested in work that has actual stakes.</p>
        <div className="c-links sr d2" role="list">
          {[["mailto:pathakm3@vcu.edu","Email","→ pathakm3@vcu.edu"],
            ["https://linkedin.com/in/mridul-pathak","LinkedIn","→ mridul-pathak"],
            ["/resume.pdf","Resume","→ Download PDF"],
            ["https://github.com/m4impact","GitHub","→ m4impact"],
          ].map(([href, name, arrow]) => (
            <a key={name} className="cl" href={href} target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : "_self"} rel="noopener noreferrer" aria-label={name}>
              <span className="cl-n">{name}</span>
              <span className="cl-a">{arrow}</span>
            </a>
          ))}
        </div>
      </div>

      {/* right: contact form */}
      <div className="sr d1">
        {sent ? (
          <div className="cf-sent" role="status" aria-live="polite">
            <div className="cf-sent-tick" aria-hidden="true">✓</div>
            <div className="cf-sent-msg">Message sent. I'll be in touch shortly.</div>
          </div>
        ) : (
          <form className="cf" onSubmit={submit} noValidate aria-label="Contact form">
            {["name", "email", "message"].map(f => (
              <div key={f} className="cf-field">
                <label htmlFor={`cf-${f}`} className={`cf-label${focused === f ? " on" : ""}${errors[f] ? " err" : ""}`}>
                  {f}{errors[f] && <span style={{ fontStyle: "italic", marginLeft: "6px" }}>{errors[f]}</span>}
                </label>
                {f === "message"
                  ? <textarea id={`cf-${f}`} rows={5} value={form[f]} onChange={e => setForm(p => ({ ...p, [f]: e.target.value }))} onFocus={() => setFocused(f)} onBlur={() => setFocused("")} style={{ ...iStyle(f), resize: "none", lineHeight: 1.8 }} className="cf-input" aria-required="true" />
                  : <input id={`cf-${f}`} type={f === "email" ? "email" : "text"} value={form[f]} onChange={e => setForm(p => ({ ...p, [f]: e.target.value }))} onFocus={() => setFocused(f)} onBlur={() => setFocused("")} style={iStyle(f)} className="cf-input" aria-required="true" />}
              </div>
            ))}
            <button type="submit" className="cf-btn">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <span className="ft-l">Mridul Pathak · Richmond, VA · {new Date().getFullYear()}</span>
      <span className="ft-r">VCU MDA '26 <span>·</span> Joining TMF May 2026</span>
      <div className="ft-links">
        {[["mailto:pathakm3@vcu.edu","Email"],["https://linkedin.com/in/mridul-pathak","LinkedIn"],["https://github.com/m4impact","GitHub"],["/resume.pdf","Résumé"]].map(([href, label]) => (
          <a key={label} href={href} target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : "_self"} rel="noopener noreferrer">{label}</a>
        ))}
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────────────────
export default function App() {
  useSEO();
  useScrollReveal();

  return (
    <>
      <style>{STYLES}</style>
      <a className="skip-link" href="#s1">Skip to content</a>
      <Cursor />
      <Filmstrip />
      <Nav />

      <main id="s1-anchor">
        <S1 />
        <div className="divider sr" aria-hidden="true"><span className="dl">001 — 002</span></div>
        <S2 />
        <div className="divider sr" aria-hidden="true"><span className="dl">002 — 003</span></div>
        <S3 />
        <Marquee />
        <S4 />
        <div className="divider sr" style={{background:"var(--paper)"}} aria-hidden="true"><span className="dl" style={{background:"var(--ink)"}}>004 — 005</span></div>
        <S6 />
        <div className="divider sr" aria-hidden="true"><span className="dl">005 — 006</span></div>
        <S5 />
      </main>

      <Footer />
    </>
  );
}