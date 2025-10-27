import React from 'react';
import { Smartphone, Images, LayoutGrid, MessageCircle, CreditCard } from 'lucide-react';

const screenshots = [
  { title: 'Property Listings', color: 'from-[#007AFF]/10 to-[#E6F0FF]/40', Icon: LayoutGrid },
  { title: 'Powerful Filters', color: 'from-violet-500/10 to-[#E6F0FF]/40', Icon: Images },
  { title: 'Real-Time Chat', color: 'from-emerald-500/10 to-[#E6F0FF]/40', Icon: MessageCircle },
  { title: 'Booking & Payments', color: 'from-amber-500/10 to-[#E6F0FF]/40', Icon: CreditCard },
];

const PhoneMock = () => (
  <div className="relative mx-auto aspect-[9/19.5] w-64 rounded-[2.5rem] border border-white/30 bg-gradient-to-br from-white/80 to-white/50 p-3 shadow-2xl backdrop-blur xl:w-72">
    <div className="h-full w-full overflow-hidden rounded-[2rem] bg-white">
      <div className="flex h-10 items-center justify-center border-b bg-[#F8FAFF] text-xs text-slate-500">HousingHub • Beta</div>
      <div className="flex h-[420px] items-center justify-center bg-gradient-to-br from-[#E6F0FF] to-white">
        <Smartphone className="h-16 w-16 text-[#007AFF]" />
      </div>
      <div className="flex h-12 items-center justify-center gap-2 border-t bg-white text-xs">
        <span className="h-1.5 w-8 rounded-full bg-slate-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
      </div>
    </div>
    <div className="absolute left-1/2 top-2 -ml-12 h-1.5 w-24 rounded-full bg-slate-200" />
  </div>
);

const AppPreview = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#E6F0FF]/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">See the app in action</h3>
            <p className="mt-2 text-slate-600">
              3D rotating mockup with cycling screens: listings, filters, chat, booking flow, and owner dashboard.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {screenshots.map(({ title, color, Icon }) => (
                <div
                  key={title}
                  className={`rounded-2xl border border-white/30 bg-white/60 p-4 backdrop-blur transition hover:shadow-lg`}
                >
                  <div className={`mb-3 inline-flex rounded-xl bg-gradient-to-br ${color} p-3`}>
                    <Icon className="h-5 w-5 text-[#007AFF]" />
                  </div>
                  <p className="text-sm font-medium text-slate-800">{title}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">Available on Android • iOS coming soon</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="animate-[spin_16s_linear_infinite]">
              <div className="-rotate-6">
                <PhoneMock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
