"use client"

import React from "react";

export default function HappyBirthdaySanket() {
  return (
    <main className="wrap">
      <div className="scene">
        <h1 className="title">🎉 Happy Birthday, Sanket! 🎉</h1>
        <p className="subtitle">Wishing you an awesome day — 15 Aug</p>

        <div className="cake" aria-hidden>
          <div className="candle">🕯️</div>
          <div className="layerss">🎂</div>
        </div>

        <div className="balloons" aria-hidden>
          <div className="balloon b1">🎈</div>
          <div className="balloon b2">🎈</div>
          <div className="balloon b3">🎈</div>
          <div className="balloon b4">🎈</div>
        </div>

        <div className="confetti" aria-hidden>
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className={`conf c${i % 6}`}></span>
          ))}
        </div>

        <button
          className="wishBtn"
          onClick={() => alert("Send your wish to Sanket! 🥳")}
        >
          Send a wish
        </button>
      </div>

      <style jsx>{`
        :root{
          --bg1: #0f172a;
          --bg2: #0b1220;
          --card: rgba(255,255,255,0.06);
          --accent: #ff6b6b;
        }

        .wrap{
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          background: radial-gradient(ellipse at 10% 20%, rgba(255,200,55,0.06), transparent 10%), linear-gradient(120deg,var(--bg1), var(--bg2));
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          color: #fff;
          padding:2rem;
        }

        .scene{
          width:100%;
          max-width:980px;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), transparent 40%);
          border-radius:18px;
          padding:3.2rem;
          box-shadow: 0 10px 30px rgba(2,6,23,0.6);
          text-align:center;
          position:relative;
          overflow:hidden;
        }

        .title{
          font-size:2.4rem;
          margin:0 0 .2rem 0;
          letter-spacing:0.6px;
          text-shadow: 0 4px 18px rgba(0,0,0,0.6);
        }

        .subtitle{
          margin:0 0 1.6rem 0;
          opacity:0.85;
        }

        .cake{
          font-size:4rem;
          margin: 16px auto 18px;
          transform: translateY(0);
          animation: floatCake 3.5s ease-in-out infinite;
        }

        @keyframes floatCake{
          0%{ transform: translateY(0)}
          50%{ transform: translateY(-10px)}
          100%{ transform: translateY(0)}
        }

        .candle{
          font-size:1.8rem;
          display:inline-block;
          margin-bottom:0.5rem;
          animation: tinyFlicker 1.4s infinite;
        }

        @keyframes tinyFlicker{
          0%{opacity:1; transform: translateY(0)}
          50%{opacity:0.75; transform: translateY(-2px)}
          100%{opacity:1; transform: translateY(0)}
        }

        .balloons{
          position:absolute;
          left:0;right:0;top:0;bottom:0;
          pointer-events:none;
        }

        .balloon{
          position:absolute;
          bottom:-120px;
          font-size:2.2rem;
          transform-origin:50% 100%;
          opacity:0.95;
          animation: rise 7s ease-in infinite;
        }

        .b1{ left:8%; animation-delay:0.2s; --clr:#ff7aa2 }
        .b2{ left:24%; animation-delay:0.9s; --clr:#ffd86b }
        .b3{ left:44%; animation-delay:0.4s; --clr:#8bd3ff }
        .b4{ left:70%; animation-delay:1.6s; --clr:#b39bff }

        .balloon::after{
          content:"";
          position:absolute;
          left:50%; transform: translateX(-50%);
          bottom:-36px; width:2px; height:36px; background:rgba(255,255,255,0.12);
        }

        @keyframes rise{
          0%{ transform: translateY(0) rotate(0deg); opacity:0 }
          10%{ opacity:1 }
          50%{ transform: translateY(-55vh) rotate(8deg) }
          100%{ transform: translateY(-110vh) rotate(-6deg); opacity:0 }
        }

        .confetti{
          position:absolute; inset:0; pointer-events:none;
        }

        .conf{
          position:absolute;
          top:-10vh;
          width:8px; height:12px;
          opacity:0.95;
          transform-origin:center;
          animation: fall 4s linear infinite;
        }

        /* variations */
        .c0{ left:6%; animation-delay:0s }
        .c1{ left:14%; animation-delay:0.2s }
        .c2{ left:22%; animation-delay:0.35s }
        .c3{ left:36%; animation-delay:0.5s }
        .c4{ left:48%; animation-delay:0.7s }
        .c5{ left:62%; animation-delay:0.9s }

        .c0, .c3{ background:#ff6b6b }
        .c1, .c4{ background:#ffd86b }
        .c2, .c5{ background:#8bd3ff }

        @keyframes fall{
          0%{ transform: translateY(-12vh) rotate(0deg); opacity:1 }
          100%{ transform: translateY(120vh) rotate(360deg); opacity:0 }
        }

        .wishBtn{
          margin-top:1.6rem;
          background: linear-gradient(90deg, #ff8a8a, #ffb86b);
          color:#08101a;
          border:0;
          padding:.8rem 1.6rem;
          border-radius:999px;
          font-weight:700;
          cursor:pointer;
          box-shadow: 0 8px 20px rgba(255,139,139,0.16);
          transition: transform .18s ease, box-shadow .18s ease;
        }

        .wishBtn:active{ transform: translateY(2px) }

        /* responsive */
        @media (max-width:520px){
          .title{ font-size:1.6rem }
          .cake{ font-size:3rem }
        }
      `}</style>
    </main>
  );
}
