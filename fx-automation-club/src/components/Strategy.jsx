function Strategy() {
  const strategyPillars = [
    {
      icon: 'candlestick_chart',
      title: 'SMC Liquidity Sweep & Momentum',
      description: 'Mendeteksi stop-hunt dan False Breakout bank sentral. Order baru di-trigger saat volume buy/sell terkonfirmasi, menghindari volatilitas whipsaw tak terarah.',
      iconColor: 'text-primary',
      iconBg: 'bg-surface-container-high'
    },
    {
      icon: 'gshield',
      title: 'Strict Stop Loss & Trailing Dinamis',
      description: 'Setiap open position memiliki batas risiko (Hard SL). Profit dikunci bertahap melalui Smart Trailing Stop untuk memaksimalkan trend panjang.',
      iconColor: 'text-primary',
      iconBg: 'bg-surface-container-high'
    },
    {
      icon: 'dangerous',
      title: 'Zero Martingale & Anti-Grid',
      description: 'Bebas sistem pelipatan lot berbahaya. Akun Anda tidak akan pernah mengalami floating ratusan pip atau margin call yang menghanguskan seluruh modal.',
      iconColor: 'text-error',
      iconBg: 'bg-error-container/20'
    },
    {
      icon: 'bolt',
      title: 'Built-in Equity Protector',
      description: 'Circuit breaker otomatis: jika drawdown harian mencapai batas 3%, robot mematikan seluruh aktivitas transaksi hingga sesi pasar hari berikutnya.',
      iconColor: 'text-primary',
      iconBg: 'bg-surface-container-high'
    }
  ];

  const specs = [
    { label: 'Platform', value: 'MetaTrader 4 & MT5' },
    { label: 'Timeframe', value: 'H1 (Optimal) & M15' },
    { label: 'Pair Rekomendasi', value: 'EURUSD, GBPUSD, Gold' },
    { label: 'Kebutuhan VPS', value: '< 10ms Latency' }
  ];

  return (
    <section className="px-gutter py-space-lg flex flex-col gap-space-md">
      <div className="flex flex-col gap-space-xs">
        <span className="font-label-code text-label-code text-primary uppercase font-bold">Algorithmic Engine</span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Logika & Arsitektur Robot</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Dikembangkan menggunakan konsep Smart Money Concept (SMC) & Trend Following presisi untuk mengeksekusi order hanya di fase likuiditas institusional valid.
        </p>
      </div>

      {/* Strategy Pillars Cards */}
      <div className="flex flex-col gap-space-xs">
        {strategyPillars.map((pillar, index) => (
          <div key={index} className="p-space-md rounded-xl bg-surface-container flex gap-space-sm items-start">
            <div className={`w-10 h-10 rounded-lg ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center flex-shrink-0`}>
              <span className="material-symbols-outlined text-[22px]">{pillar.icon}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-headline-sm text-sm font-bold text-on-surface">{pillar.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Spesifikasi Teknis EA Grid */}
      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
        <span className="font-label-code text-label-code text-primary uppercase font-bold">Spesifikasi Mesin EA</span>
        <div className="grid grid-cols-2 gap-space-xs text-sm">
          {specs.map((spec, index) => (
            <div key={index} className="p-space-xs rounded bg-surface-container">
              <span className="font-body-sm text-[11px] text-on-surface-variant block">{spec.label}</span>
              <span className="font-label-code text-label-code text-on-surface font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Strategy;