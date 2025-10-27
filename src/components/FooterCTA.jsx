import React from 'react';
import { Download, UserPlus, PlayCircle, Mail, Github, Twitter, Linkedin, Shield } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer className="relative border-t bg-white/80 backdrop-blur">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold tracking-tight">Simplify Your Housing Journey Today</h3>
          <p className="mt-2 text-slate-600">Focused on rent and booking requests with honest beta messaging.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#download" className="inline-flex items-center gap-2 rounded-xl bg-[#007AFF] px-5 py-3 text-white shadow-lg shadow-[#007AFF]/30 transition hover:brightness-110">
              <Download className="h-5 w-5" /> Download Android
            </a>
            <a href="#owner" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-50">
              <UserPlus className="h-5 w-5" /> Join as Owner
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-50">
              <PlayCircle className="h-5 w-5" /> Explore Demo
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">iOS waitlist: coming soon</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold">About</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#how" className="hover:text-slate-900">How It Works</a></li>
              <li><a href="#privacy" className="hover:text-slate-900">Privacy</a></li>
              <li><a href="#terms" className="hover:text-slate-900">Terms</a></li>
              <li><a href="#faq" className="hover:text-slate-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> harshparmar.dev@gmail.com</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4" /> Secure by design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Social</h4>
            <div className="mt-3 flex gap-3 text-slate-600">
              <a aria-label="GitHub" href="#" className="rounded-full border border-slate-200 p-2 hover:text-slate-900"><Github className="h-4 w-4" /></a>
              <a aria-label="Twitter" href="#" className="rounded-full border border-slate-200 p-2 hover:text-slate-900"><Twitter className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="rounded-full border border-slate-200 p-2 hover:text-slate-900"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-xs text-slate-500">
          © 2025 HousingHub by Harsh Parmar
        </div>
      </section>
    </footer>
  );
};

export default FooterCTA;
