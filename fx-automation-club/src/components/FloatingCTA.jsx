function FloatingCTA() {
  return (
    <div className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
      <div className="px-gutter pt-space-sm pb-space-xs flex items-center gap-space-sm">
        <a
          aria-label="WhatsApp VIP Consultation"
          className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-surface-container-high text-on-surface hover:text-primary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[22px]">chat</span>
        </a>
        <a
          className="h-12 flex-1 flex items-center justify-center gap-space-xs px-space-md rounded-xl bg-primary-container text-on-primary-container font-label-ui text-label-ui uppercase tracking-wider font-bold shadow-[0_0_24px_rgba(25,184,107,0.4)] hover:shadow-[0_0_32px_rgba(25,184,107,0.65)] transition-all"
          href="#"
        >
          <span>Gabung Sekarang</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}

export default FloatingCTA;