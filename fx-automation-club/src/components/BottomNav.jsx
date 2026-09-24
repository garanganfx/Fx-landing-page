function BottomNav() {
  const navItems = [
    { path: 'overview', label: 'EA Hub', icon: 'grid_view', active: true },
    { path: 'live-performance', label: 'Signals', icon: 'monitoring', active: false },
    { path: 'licensing-tiers', label: 'Plans', icon: 'verified', active: false },
    { path: 'trading-terminal', label: 'Console', icon: 'terminal', active: false }
  ];

  return (
    <nav className="flex items-center justify-around h-14 px-space-xs" data-active-classes="text-primary font-bold">
      {navItems.map((item) => (
        <a
          key={item.path}
          className={`flex flex-col items-center justify-center w-14 h-12 transition-colors ${
            item.active ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
          }`}
          data-path={item.path}
          href="#"
          aria-current={item.active ? 'page' : undefined}
        >
          <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
          <span className="font-label-code text-[10px] uppercase leading-none mt-1">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default BottomNav;