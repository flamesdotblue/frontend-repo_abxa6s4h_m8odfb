import React from 'react';
import { MapPin, Rocket, CreditCard, MessageSquare, ShieldCheck, FileText, Filter, BadgeCheck } from 'lucide-react';

const features = [
  { icon: MapPin, title: 'GPS-Based Discovery', desc: 'Auto-detect your location to surface nearby properties instantly.' },
  { icon: Filter, title: '10+ Smart Filters', desc: 'Refine by price, type, amenities, and gender with precision.' },
  { icon: MessageSquare, title: 'Real-Time Chat', desc: 'Typing indicators and instant delivery for seamless talks.' },
  { icon: ShieldCheck, title: 'Owner ID Verification', desc: 'Every owner is verified for trust and safety.' },
  { icon: CreditCard, title: 'Razorpay Payments', desc: 'Encrypted, secure transactions with one-tap checkout.' },
  { icon: FileText, title: 'Professional PDF Receipts', desc: 'Auto-generated receipts for every approved booking.' },
  { icon: BadgeCheck, title: 'Booking Requests', desc: 'Owners approve within 24–48 hours — stay informed with badges.' },
  { icon: Rocket, title: 'Android Ready', desc: 'Optimized for Android devices — iOS coming soon.' },
];

const FeatureCard = ({ Icon, title, desc }) => (
  <div className="group relative rounded-2xl border border-white/30 bg-white/50 p-5 backdrop-blur-xl transition hover:bg-white/70 hover:shadow-lg">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E6F0FF]/60 to-white/10 opacity-0 transition group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-[#007AFF]/10 to-violet-500/10 p-3">
        <Icon className="h-6 w-6 text-[#007AFF]" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  </div>
);

const SecurityPanel = () => (
  <div className="col-span-full mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-white/30 bg-white/60 p-6 backdrop-blur-xl md:grid-cols-2">
    <div>
      <h4 className="text-xl font-semibold">Security First</h4>
      <p className="mt-1 text-sm text-slate-600">
        We combine verified identities, encrypted payments, and secure cloud storage to keep your data safe.
      </p>
      <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
        <li>• Firebase Authentication</li>
        <li>• Owner ID verification mandatory</li>
        <li>• Cloudinary secure storage</li>
        <li>• Razorpay encrypted payments</li>
        <li>• Email verification required</li>
      </ul>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {["Verified Owners", "Encrypted", "Audit Trail", "OTP Login"].map((t) => (
        <div key={t} className="rounded-xl border border-white/40 bg-white/70 p-4 text-center">
          <div className="mx-auto mb-2 h-8 w-8 rounded-lg bg-gradient-to-br from-[#007AFF]/10 to-violet-500/10" />
          <p className="text-xs font-medium text-slate-700">{t}</p>
        </div>
      ))}
    </div>
  </div>
);

const StatsPanel = () => (
  <div className="col-span-full mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-white/30 bg-white/60 p-6 text-center backdrop-blur-xl sm:grid-cols-3">
    <div>
      <p className="text-3xl font-extrabold text-slate-900">100+</p>
      <p className="text-sm text-slate-600">Properties</p>
    </div>
    <div>
      <p className="text-3xl font-extrabold text-slate-900">100%</p>
      <p className="text-sm text-slate-600">Verified Owners</p>
    </div>
    <div>
      <p className="text-3xl font-extrabold text-slate-900">Android</p>
      <p className="text-sm text-slate-600">Ready • iOS soon</p>
    </div>
  </div>
);

const FeatureGrid = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
        <p className="mt-2 text-slate-600">Glass-morphic design with a premium, secure experience from search to booking.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} Icon={f.icon} title={f.title} desc={f.desc} />
        ))}
        <SecurityPanel />
        <StatsPanel />
      </div>
    </section>
  );
};

export default FeatureGrid;
