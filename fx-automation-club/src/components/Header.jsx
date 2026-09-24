function Header() {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-gutter flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0">
          <img
            alt="FX Automation Club Logo"
            className="h-8 w-auto object-contain flex-shrink-0"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VRj37kSM0exwScT72luHqtG3h7ds_nJ2H32ih7IHsGxVolRmgUdwoR5UPF60dG9DD8DFYsYrUGQigM2u8GdVGVtnu58CoJMrGyLlitqgHVh5gUhYL1neEibw9JT7ICIpRKgSwkG5S2_3vnIoTS2TPeHqPSuvE6KYc6xyV7m6UqdqvaGglv2uQRlbQGuPHxbGZ_sDOXbXS5Cnk69sKwXdbUuJsRQ2_-RK1xMseMl2U84OM6pyDUZynVN_A6"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">
                FX Automation Club
              </span>
              <span className="px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-label-code text-label-code border-0 font-semibold">
                v3.4 PRO
              </span>
            </div>
            <span className="font-label-ui text-label-ui text-on-surface-variant truncate uppercase tracking-wider">
              Overview
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs flex-shrink-0">
          <a
            aria-label="Telegram Channel"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors"
            href="https://t.me/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;