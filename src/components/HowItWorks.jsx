import React from 'react';
import { CheckCircle2, UserCheck } from 'lucide-react';

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#007AFF]" />
    <span className="text-sm text-slate-700">{children}</span>
  </li>
);

const HowItWorks = () => {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-white/30 bg-white/70 p-6 backdrop-blur-xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#E6F0FF] px-3 py-1 text-xs font-medium text-[#007AFF]">
            Tenants
          </div>
          <h3 className="text-2xl font-bold">Renting made simple</h3>
          <ul className="mt-4 space-y-2">
            <Bullet>GPS detects location → search nearby properties</Bullet>
            <Bullet>Apply filters (price, type, amenities, gender)</Bullet>
            <Bullet>Chat with owners directly (typing indicators)</Bullet>
            <Bullet>Upload documents (Aadhaar, PAN, photo)</Bullet>
            <Bullet>Pay via Razorpay (encrypted)</Bullet>
            <Bullet>Get professional PDF receipt</Bullet>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/30 bg-gradient-to-br from-white/70 to-violet-50 p-6 backdrop-blur-xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
            Owners
          </div>
          <h3 className="text-2xl font-bold">Operate with confidence</h3>
          <ul className="mt-4 space-y-2">
            <Bullet>Submit ID proof</Bullet>
            <Bullet>Wait for verification (24–48 hrs)</Bullet>
            <Bullet>Add properties with photos/videos</Bullet>
            <Bullet>Manage everything from dashboard</Bullet>
            <Bullet>Chat with tenants</Bullet>
            <Bullet>Accept or reject booking requests</Bullet>
          </ul>
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 text-sm text-slate-700 backdrop-blur">
            <UserCheck className="h-4 w-4 text-violet-600" /> All owners are verified before listings go live
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-white/30 bg-white/60 p-6 backdrop-blur-xl">
        <h4 className="text-lg font-semibold">Coverage</h4>
        <p className="mt-1 text-sm text-slate-600">Currently active in these cities — expanding soon:</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Ahmedabad', 'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad'].map((c) => (
            <span key={c} className="rounded-full bg-[#E6F0FF] px-3 py-1 text-sm text-[#007AFF]">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
