function Support() {
  return (
    <section className="px-gutter py-space-lg flex flex-col gap-space-md bg-surface-container-lowest">
      <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-md">
        <div className="flex items-center gap-space-sm">
          <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-[28px]">support_agent</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">VIP Support Desk</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Layanan pendampingan instalasi & konsultasi 24/7</p>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs">
          <a
            className="h-12 px-space-md rounded-xl bg-surface-container-high flex items-center justify-between text-on-surface active:text-primary transition-colors"
            href="https://wa.me/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[22px]">chat</span>
              <span className="font-label-ui text-label-ui font-semibold">Konsultasi via WhatsApp</span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">arrow_forward</span>
          </a>
          <a
            className="h-12 px-space-md rounded-xl bg-surface-container-high flex items-center justify-between text-on-surface active:text-primary transition-colors"
            href="https://t.me/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[22px]">send</span>
              <span className="font-label-ui text-label-ui font-semibold">Komunitas VIP Telegram (1,850+)</span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Institutional Risk Disclaimer Footer */}
      <div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs">
        <span className="font-label-code text-[11px] text-outline uppercase font-bold tracking-wider">Disclaimer Risiko & Regulasi</span>
        <p className="font-body-sm text-[12px] leading-relaxed text-outline">
          Trading instrumen Foreign Exchange (Forex) dan Contract for Differences (CFD) melibatkan risiko kerugian modal yang signifikan dan mungkin tidak cocok untuk seluruh investor.
          Kinerja masa lalu atau hasil backtest tidak menjamin profit di masa depan. FX Automation Club adalah penyedia perangkat lunak teknologi algoritma trading (Expert Advisor) dan bukan penasihat keuangan bersertifikat.
          Harap berinvestasi menggunakan dana yang Anda siap tanggung risikonya secara bijak.
        </p>
        <div className="flex items-center justify-between pt-space-xs">
          <span className="font-label-code text-[11px] text-outline">© 2024 FX Automation Club.</span>
          <span className="font-label-code text-[11px] text-primary">All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
}

export default Support;