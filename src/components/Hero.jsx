import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Verified, MessageCircle, Download, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[720px] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-white/40 bg-white/50 px-4 py-1 text-sm font-medium backdrop-blur">
            <span className="mr-2 h-2 w-2 rounded-full bg-[#007AFF]" />
            Beta is live — Android ready
          </span>

          <h1 className="mt-6 bg-gradient-to-r from-[#007AFF] to-[#3B82F6] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Find • Rent • Book — Smarter.
          </h1>

          <p className="mt-4 max-w-2xl text-balance text-base text-slate-700 sm:text-lg">
            HousingHub makes renting seamless with GPS discovery, owner-verified listings, real-time chat, and secure Razorpay payments.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl bg-[#007AFF] px-5 py-3 text-white shadow-lg shadow-[#007AFF]/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
            >
              <Download className="h-5 w-5" /> Download App (Android)
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-slate-900 backdrop-blur transition hover:bg-white"
            >
              <PlayCircle className="h-5 w-5" /> Explore Demo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 backdrop-blur">
              <Verified className="h-4 w-4 text-emerald-500" /> Owner Verified
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 backdrop-blur">
              <Shield className="h-4 w-4 text-[#007AFF]" /> Secure Payments
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 backdrop-blur">
              <MessageCircle className="h-4 w-4 text-violet-500" /> Real-Time Chat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
