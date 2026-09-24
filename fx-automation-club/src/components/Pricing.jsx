function Pricing({ pricing }) {
  const defaultTiers = [
    {
      id: 'free',
      badge: 'Paket 1 • Solusi Terfavorit Pemula',
      title: 'Free via IB Partner',
      price: 'Rp 0',
      period: '/ seumur hidup',
      badgeClass: 'bg-surface-container-high text-on-surface',
      description: 'Dapatkan lisensi resmi cuma-cuma dengan mendaftar akun di broker mitra teregulasi dengan deposit minimum $200 (dana 100% milik Anda).',
      features: [
        { text: '1 Akun Real MT4 / MT5 Terverifikasi', included: true },
        { text: 'Spread Rendah ECN Execution', included: true },
        { text: 'Preset Konservatif Siap Pakai', included: true },
        { text: 'Multi-Broker Lock (Terkunci ke broker mitra)', included: false }
      ],
      cta: {
        text: 'Daftar Akun Broker Mitra',
        icon: 'arrow_forward',
        className: 'bg-surface-container-high text-primary hover:bg-surface-container-highest',
        href: 'https://t.me/',
        primary: false
      },
      highlight: false
    },
    {
      id: 'vip',
      badge: 'MOST POPULAR EA LICENSE',
      title: 'Lifetime Pro VIP',
      price: 'Rp 2.999.000',
      period: '/ sekali bayar',
      badgeClass: 'bg-primary-container text-on-primary-container',
      description: 'Kebebasan tanpa batas untuk trader profesional & pejuang prop-firm. Bebas gunakan di broker mana pun pilihan Anda.',
      features: [
        { text: 'Bebas Semua Broker (No Lock)', included: true, highlight: true },
        { text: 'Unlimited Demo + 3 Akun Real MT4/MT5', included: true },
        { text: 'VIP Telegram Private Signal Room', included: true },
        { text: 'Priority 1-on-1 VPS Setup via AnyDesk/Zoom', included: true },
        { text: 'Free Update Selamanya (Algoritma Baru)', included: true }
      ],
      cta: {
        text: 'Beli Lifetime VIP',
        icon: 'bolt',
        className: 'bg-primary-container text-on-primary-container shadow-[0_0_20px_rgba(25,184,107,0.4)] hover:shadow-[0_0_30px_rgba(25,184,107,0.6)]',
        href: 'https://t.me/',
        primary: true
      },
      highlight: true
    },
    {
      id: 'yearly',
      badge: 'Paket 2 • Fleksibel',
      title: 'Yearly License',
      price: 'Rp 1.499.000',
      period: '/ per tahun',
      badgeClass: 'bg-surface-container-high text-on-surface',
      description: 'Pilihan ideal untuk mengevaluasi konsistensi robot selama 12 bulan penuh dengan update berkala.',
      features: [
        { text: '1 Akun Real + 2 Akun Demo MT4/MT5', included: true },
        { text: 'Preset Update Berkala Setiap Bulan', included: true },
        { text: 'Akses Grup Diskusi Komunitas', included: true }
      ],
      cta: {
        text: 'Pilih Paket Tahunan',
        icon: 'arrow_forward',
        className: 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest',
        href: 'https://t.me/',
        primary: false
      },
      highlight: false
    }
  ];

  const tiers = Array.isArray(pricing) && pricing.length > 0 ? pricing.map((tier) => ({
    id: tier.id || tier.title,
    badge: tier.badge || 'Paket',
    title: tier.title || 'Paket',
    price: tier.price || 'Rp 0',
    period: tier.period || '/ bulan',
    badgeClass: tier.highlight ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface',
    description: tier.description || '',
    features: Array.isArray(tier.features) ? tier.features : [],
    cta: {
      text: tier.button_text || 'Lihat detail',
      icon: 'arrow_forward',
      className: tier.highlight ? 'bg-primary-container text-on-primary-container shadow-[0_0_20px_rgba(25,184,107,0.4)] hover:shadow-[0_0_30px_rgba(25,184,107,0.6)]' : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest',
      href: tier.button_link || 'https://t.me/',
      primary: Boolean(tier.highlight)
    },
    highlight: Boolean(tier.highlight)
  })) : defaultTiers;

  return (
    <section className="px-gutter py-space-lg flex flex-col gap-space-md bg-surface-container-lowest" id="pilihan-paket">
      <div className="flex flex-col text-center items-center gap-space-xs">
        <span className="font-label-code text-label-code text-primary uppercase font-bold">Akses Eksklusif</span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Pilihan Paket Lisensi</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Pilih opsi lisensi yang paling cocok dengan portofolio & gaya trading Anda.
        </p>
      </div>

      <div className="flex flex-col gap-space-md">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-space-md rounded-xl flex flex-col gap-space-sm relative ${
              tier.highlight ? 'bg-surface-container-high shadow-[0_0_30px_rgba(25,184,107,0.18)]' : 'bg-surface-container'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className={`font-label-code text-label-code uppercase font-bold flex items-center gap-1 ${tier.highlight ? 'text-primary' : ''}`}>
                  {tier.highlight && <span className="material-symbols-outlined text-[14px]">star</span>}
                  {tier.badge}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">{tier.title}</h3>
              </div>
              <span className={`px-2 py-0.5 rounded ${tier.badgeClass} font-label-code text-[10px] font-bold`}>
                {tier.highlight ? 'VIP BEST DEAL' : 'BEST VALUE'}
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className={`font-headline-lg-mobile text-headline-lg-mobile font-bold ${tier.highlight ? 'text-primary' : 'text-on-surface'}`}>
                {tier.price}
              </span>
              <span className="font-body-sm text-on-surface-variant">{tier.period}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{tier.description}</p>
            <div className="flex flex-col gap-1.5 py-space-xs text-sm">
              {(tier.features.length ? tier.features : [{ text: 'Akses premium penuh', included: true }]).map((feature, index) => (
                <div key={index} className={`flex items-center gap-2 ${feature.highlight ? 'text-primary' : feature.included ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  <span className={`material-symbols-outlined text-[18px] ${feature.included ? 'text-primary' : 'text-outline'}`}>
                    {feature.included ? 'check_circle' : 'cancel'}
                  </span>
                  <span className={`font-body-sm text-body-sm ${feature.highlight ? 'font-semibold' : ''}`}>{feature.text}</span>
                </div>
              ))}
            </div>
            <a
              className={`w-full h-${tier.cta.primary ? '12' : '11'} flex items-center justify-center gap-space-xs rounded-xl ${tier.cta.className} font-label-ui text-label-ui uppercase tracking-wider font-${tier.cta.primary ? 'bold' : 'semibold'} ${tier.cta.primary ? 'active:scale-[0.99] transition-transform' : 'active:bg-surface-container-highest transition-colors'}`}
              href={tier.cta.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{tier.cta.text}</span>
              <span className="material-symbols-outlined text-[16px]">{tier.cta.icon}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;