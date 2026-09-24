function Hero({ hero }) {
  const content = hero?.value || hero || null;

  const badge = content?.badge || 'ALGO TRADING MT4 & MT5 • VERIFIED PRO';
  const headline = content?.headline || 'Trading Otomatis dengan Manajemen Risiko Terukur';
  const subheadline =
    content?.subheadline ||
    'Expert Advisor (EA) institusional berbasis Price Action & Momentum tanpa Martingale berbahaya. Dirancang khusus untuk trader pemula maupun prop-firm trader yang mendambakan pertumbuhan portofolio konsisten.';
  const primaryCtaText = content?.primary_cta_text || 'Lihat Bukti Performa';
  const primaryCtaLink = content?.primary_cta_link || '#bukti-performa';
  const secondaryCtaText = content?.secondary_cta_text || 'Pilihan Paket Lisensi';
  const secondaryCtaLink = content?.secondary_cta_link || '#pilihan-paket';

  return (
    <section className="px-gutter pt-space-md pb-space-lg flex flex-col gap-space-md">
      <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high w-fit">
        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
        <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-wider">
          {badge}
        </span>
      </div>

      <div className="flex flex-col gap-space-xs">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold tracking-tight">
          {headline}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">{subheadline}</p>
      </div>

      <div className="flex flex-col gap-space-xs pt-space-xs">
        <a
          className="w-full h-12 flex items-center justify-center gap-space-xs px-space-md rounded-xl bg-primary-container text-on-primary-container font-label-ui text-label-ui uppercase tracking-wider font-bold shadow-[0_0_24px_rgba(25,184,107,0.35)] active:scale-[0.99] transition-transform"
          href={primaryCtaLink}
        >
          <span className="material-symbols-outlined text-[20px]">analytics</span>
          <span>{primaryCtaText}</span>
        </a>
        <a
          className="w-full h-12 flex items-center justify-center gap-space-xs px-space-md rounded-xl bg-surface-container-high text-on-surface font-label-ui text-label-ui uppercase tracking-wider font-semibold active:bg-surface-container-highest transition-colors"
          href={secondaryCtaLink}
        >
          <span className="material-symbols-outlined text-[20px]">tune</span>
          <span>{secondaryCtaText}</span>
        </a>
      </div>

      <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
        <div className="flex flex-col items-center justify-center p-space-xs rounded-xl bg-surface-container text-center">
          <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          <span className="font-label-code text-label-code text-on-surface font-bold mt-1">Myfxbook</span>
          <span className="font-body-sm text-[11px] text-on-surface-variant">Terverifikasi</span>
        </div>
        <div className="flex flex-col items-center justify-center p-space-xs rounded-xl bg-surface-container text-center">
          <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
          <span className="font-label-code text-label-code text-primary font-bold mt-1">{'< 8.4%'}</span>
          <span className="font-body-sm text-[11px] text-on-surface-variant">Max Drawdown</span>
        </div>
        <div className="flex flex-col items-center justify-center p-space-xs rounded-xl bg-surface-container text-center">
          <span className="material-symbols-outlined text-primary text-[20px]">groups</span>
          <span className="font-label-code text-label-code text-on-surface font-bold mt-1">1,850+</span>
          <span className="font-body-sm text-[11px] text-on-surface-variant">Active Member</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;