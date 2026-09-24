function Installation() {
  const steps = [
    {
      number: '01',
      title: 'Buka Akun Broker Rekomendasi',
      description: 'Gunakan broker ECN / Raw Spread dengan leverage minimal 1:100 agar slippage mendekati nol saat eksekusi posisi.'
    },
    {
      number: '02',
      title: 'Sewa Cloud VPS Forex',
      description: 'Gunakan VPS berlokasi di London / New York dengan latensi ping < 5ms ke server broker agar eksekusi instan 24 jam.'
    },
    {
      number: '03',
      title: 'Instal File EA & Load Preset',
      description: 'Copy file (.ex4 / .ex5) ke folder Experts MT4/MT5. Muat file .set teruji kami sesuai profil risiko (Konservatif / Prop-Firm).'
    },
    {
      number: '04',
      title: 'Aktifkan "AutoTrading"',
      description: 'Klik tombol AutoTrading hingga ikon wajah tersenyum. Biarkan algoritma mengidentifikasi peluang profit secara otomatis.'
    }
  ];

  return (
    <section className="px-gutter py-space-lg flex flex-col gap-space-md">
      <div className="flex flex-col gap-space-xs">
        <span className="font-label-code text-label-code text-primary uppercase font-bold">Quick Start Guide</span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">4 Langkah Mudah Menjalankan Robot</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Proses setup instan kurang dari 15 menit. Tim support kami siap mendampingi via remote assistance.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="flex flex-col gap-space-sm relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container">
            <div className="w-9 h-9 rounded-full bg-primary text-on-primary font-label-code font-bold flex items-center justify-center flex-shrink-0">
              {step.number}
            </div>
            <div className="flex flex-col min-w-0">
              <h4 className="font-headline-sm text-sm font-bold text-on-surface">{step.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation Box */}
      <div className="p-space-md rounded-xl bg-surface-container-high flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs text-primary">
          <span className="material-symbols-outlined text-[20px]">recommend</span>
          <span className="font-label-code text-label-code uppercase font-bold">Rekomendasi Resmi Kami</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface">
          Tersedia voucher diskon 20% sewa VPS Forex berkecepatan tinggi serta link rebate cash-back spread khusus member FX Automation Club.
        </p>
      </div>
    </section>
  );
}

export default Installation;