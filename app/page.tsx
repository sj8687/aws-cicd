"use client";

import React from "react";

export default function HappyBirthdaySanket() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">
      <div className="bg-white/80 rounded-3xl shadow-xl p-8 flex flex-col items-center max-w-md">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-2 text-center animate-bounce">
          🎉 Happy Birthday, Sanket! 🎉
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Wishing you an awesome day — <span className="font-semibold text-blue-500">15 Aug</span>
        </p>

        {/* Cake */}
        <div className="relative mb-8">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex space-x-2">
            <span className="text-2xl animate-pulse">🕯️</span>
            <span className="text-2xl animate-pulse">🕯️</span>
          </div>
          <div className="text-6xl">🎂</div>
        </div>

        {/* Balloons */}
        <div className="flex space-x-3 mb-8">
          <span className="text-3xl animate-float">🎈</span>
          <span className="text-3xl animate-float delay-100">🎈</span>
          <span className="text-3xl animate-float delay-200">🎈</span>
          <span className="text-3xl animate-float delay-300">🎈</span>
        </div>

        {/* Confetti */}
        <div className="flex flex-wrap justify-center mb-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full mx-1 my-1 inline-block ${
                [
                  "bg-pink-400",
                  "bg-yellow-400",
                  "bg-blue-400",
                  "bg-green-400",
                  "bg-purple-400",
                  "bg-red-400",
                ][i % 6]
              }`}
            ></span>
          ))}
        </div>

        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
          onClick={() => alert("Send your wish to Sankett! 🥳")}
        >
          Send a wish
        </button>
      </div>

      {/* Tailwind custom animation for balloons */}
      <style>{`
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        .animate-float.delay-100 { animation-delay: 0.2s; }
        .animate-float.delay-200 { animation-delay: 0.4s; }
        .animate-float.delay-300 { animation-delay: 0.6s; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </main>
  );
}