function Testimonials({ testimonials }) {
  const defaultReviews = [
    {
      initials: 'BS',
      name: 'Budi Santoso',
      location: 'Jakarta • FTMO Funded $100K',
      roi: '+11.2% ROI',
      rating: 5,
      text: '"Sudah jalan 4 bulan di prop firm FTMO, drawdown terjaga stabil di bawah 4% dan sudah 2x payout lancar! Sangat menenangkan karena tahu ada Hard Stop Loss di tiap trade."'
    },
    {
      initials: 'HK',
      name: 'Hendro Kusuma',
      location: 'Surabaya • ECN Real Account',
      roi: '+18.4% NET',
      rating: 5,
      text: '"Enak banget nggak perlu begadang mantau chart XAUUSD lagi. Sistem proteksi modalnya sangat disiplin waktu news NFP keluar. Portofolio terus bertumbuh tanpa stress."'
    },
    {
      initials: 'RA',
      name: 'Reza Ananda',
      location: 'Bandung • IB Partner User',
      roi: '+9.8% PROFIT',
      rating: 5,
      text: '"Dapat gratis lisensinya lewat jalur IB broker, support admin fast response pas setup VPS malam-malam. Recommended buat yang mau trading autopilot yang aman."'
    }
  ];

  const reviews = Array.isArray(testimonials) && testimonials.length > 0 ? testimonials.map((review) => ({
    initials: review.initials || 'FX',
    name: review.name || 'Member',
    location: review.location || 'Indonesia',
    roi: review.roi || '+0% ROI',
    rating: Number(review.rating) || 5,
    text: review.text || ''
  })) : defaultReviews;

  return (
    <section className="px-gutter py-space-lg flex flex-col gap-space-md bg-surface-container-lowest">
      <div className="flex flex-col gap-space-xs">
        <span className="font-label-code text-label-code text-primary uppercase font-bold">Trader Community Feedback</span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Testimoni Member Aktif</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Ratusan trader telah membuktikan keandalan algoritma FX Automation Club di akun personal & tantangan prop firm.
        </p>
      </div>

      <div className="flex flex-col gap-space-sm">
        {reviews.map((review, index) => (
          <div key={`${review.name}-${index}`} className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm font-bold text-primary">
                  {review.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm font-bold text-on-surface">{review.name}</span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant">{review.location}</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-code text-[10px] font-bold">{review.roi}</span>
            </div>
            <div className="flex text-primary gap-0.5 my-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body-sm text-body-sm text-on-surface italic">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;