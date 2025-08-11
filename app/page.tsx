"use client"

import React from "react";

export default function HappyBirthdaySanket() {
  return (
    <main className="wrap">
      <div className="scene">
        <h1 className="title">🎉 Happy Birthday, Sanket! 🎉</h1>
        <p className="subtitle">Wishing you an awesome day — 15 Aug</p>

        <div className="cake" aria-hidden>
          <div className="candle">👌🫴</div>
          <div className="layers">🎂</div>
        </div>

        <div className="balloons" aria-hidden>
          <div className="ballooon b1">🎈</div>
          <div className="balloon b2">🎈</div>
          <div className="balloon b3">🎈</div>
          <div className="balloon b4">🎈</div>
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

      
    
    </main>
  );
}
