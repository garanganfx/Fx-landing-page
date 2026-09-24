function Performance() {
  return (
    <section className="px-gutter py-space-lg flex flex-col gap-space-md bg-surface-container-lowest" id="bukti-performa">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-code text-label-code text-primary uppercase font-bold">Audit Real-Time</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Bukti Performa Trading</h2>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-code text-[11px] text-primary uppercase font-semibold">Live Feed</span>
        </div>
      </div>

      {/* Live Performance Stats Widget Card */}
      <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-md shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
            <div>
              <div className="font-headline-sm text-sm font-bold text-on-surface">Auto-Alpha v3.4 Portfolio</div>
              <div className="font-label-code text-[11px] text-on-surface-variant">MT5 ECN Real Account • 1:100</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-code text-[10px] font-bold">VERIFIED</span>
        </div>

        {/* Core Metrics 2x2 Grid */}
        <div className="grid grid-cols-2 gap-space-xs">
          <div className="p-space-sm rounded-lg bg-surface-container-high flex flex-col">
            <span className="font-label-ui text-label-ui text-on-surface-variant uppercase">Total Return</span>
            <span className="font-metric-xl text-metric-xl text-primary font-bold">+312.4%</span>
            <span className="font-body-sm text-[11px] text-on-surface-variant">Sejak Juli 2023</span>
          </div>
          <div className="p-space-sm rounded-lg bg-surface-container-high flex flex-col">
            <span className="font-label-ui text-label-ui text-on-surface-variant uppercase">Monthly Avg</span>
            <span className="font-metric-xl text-metric-xl text-primary font-bold">+14.8%</span>
            <span className="font-body-sm text-[11px] text-on-surface-variant">Compound Rate</span>
          </div>
          <div className="p-space-sm rounded-lg bg-surface-container-high flex flex-col">
            <span className="font-label-ui text-label-ui text-on-surface-variant uppercase">Max Drawdown</span>
            <span className="font-metric-md text-metric-md text-on-surface font-bold">7.82%</span>
            <span className="font-body-sm text-[11px] text-on-surface-variant">Batas Prop Aman</span>
          </div>
          <div className="p-space-sm rounded-lg bg-surface-container-high flex flex-col">
            <span className="font-label-ui text-label-ui text-on-surface-variant uppercase">Win Rate / PF</span>
            <span className="font-metric-md text-metric-md text-on-surface font-bold">
              74.2% <span className="text-xs text-on-surface-variant font-normal">| 2.14</span>
            </span>
            <span className="font-body-sm text-[11px] text-on-surface-variant">Risk:Reward 1:2.3</span>
          </div>
        </div>

        {/* Verified Chart Preview Placeholder */}
        <div className="flex flex-col gap-1.5">
          <div className="relative w-full rounded-lg overflow-hidden bg-surface-container-lowest">
            <img
              className="w-full h-44 object-cover object-center"
              alt="Screenshot of an institution-grade MetaTrader 5 strategy tester equity curve glowing in neon emerald green against deep black obsidian dark UI with detailed date timeline metrics and drawdown bars below"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChTIPLBcB_rutHN7zP1jAonhzn_dTlZfi959E0zGA55IHEamkeOxIJS2VcRRhXDf8DUlpF9aK2B7v-oEKLTyDvt5C3ScKv6FUNL1Z3aLHnzJsUJ2LJzuVCt9XtgIVb7yDyTyeSpn229EDaVN7O1hcaE4xYYq8zXk8xzzsxoeamBZ_VNlqYp6hbpp8zaG1RY2yelBmtE90FkUFF9qbT6-OJjKnRMTFxvDoZlJCS5pob_VSBq-00Ov9oRw"
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-surface-container/90 backdrop-blur-md">
              <span className="font-label-code text-[11px] text-on-surface flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[14px]">query_stats</span>
                EURUSD & XAUUSD H1 Strategy Tester Backtest
              </span>
            </div>
          </div>
        </div>

        {/* Action Verification Links */}
        <div className="grid grid-cols-1 gap-space-xs pt-space-xs">
          <a
            className="h-10 px-space-sm rounded-lg bg-surface-container-high flex items-center justify-between text-on-surface active:text-primary transition-colors"
            href="https://www.myfxbook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-label-ui text-label-ui font-medium flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px]">link</span>
              Buka Akun Myfxbook Terverifikasi
            </span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">north_east</span>
          </a>
          <a
            className="h-10 px-space-sm rounded-lg bg-surface-container-high flex items-center justify-between text-on-surface active:text-primary transition-colors"
            href="#"
          >
            <span className="font-label-ui text-label-ui font-medium flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px]">picture_as_pdf</span>
              Unduh Laporan Audit Detail (PDF)
            </span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">download</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Performance;