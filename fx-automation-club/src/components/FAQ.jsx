import { useState } from 'react';

function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultFaqs = [
    {
      question: 'Berapa modal atau deposit minimal yang dibutuhkan?',
      answer: 'Rekomendasi modal mulai dari $100 untuk Cent Account, atau $500 untuk Standard Account dengan lot 0.01. Dengan konfigurasi ini, money management tetap terjaga dalam batas aman.'
    },
    {
      question: 'Apakah EA ini menggunakan strategi berbahaya seperti Martingale?',
      answer: '100% Bebas Martingale dan Averaging ekstrim. Setiap posisi selalu dipasangi Stop Loss (SL) terukur dan cut loss otomatis jika batas risiko harian tercapai.'
    },
    {
      question: 'Apakah perlu komputer/laptop yang menyala 24 jam nonstop?',
      answer: 'Tidak perlu. Kami sarankan menyewa Virtual Private Server (VPS) Forex dengan biaya terjangkau (~$4/bulan) agar EA dapat berjalan 24 jam nonstop tanpa terganggu gangguan listrik atau internet mati di rumah.'
    },
    {
      question: 'Apakah cocok untuk tantangan evaluasi Prop Firm (FTMO, MFF)?',
      answer: 'Sangat cocok! EA kami telah dilengkapi preset khusus Prop Firm dengan proteksi Max Daily Loss 3% (jauh di bawah batas 5% prop firm) dan Max Overall Drawdown di bawah 7%.'
    }
  ];

  const items = Array.isArray(faqs) && faqs.length > 0 ? faqs : defaultFaqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-gutter py-space-lg flex flex-col gap-space-md">
      <div className="flex flex-col gap-space-xs">
        <span className="font-label-code text-label-code text-primary uppercase font-bold">Frequently Asked Questions</span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Pertanyaan yang Sering Diajukan</h2>
      </div>
      <div className="flex flex-col gap-space-xs" id="faq-container">
        {items.map((faq, index) => (
          <div key={`${faq.question}-${index}`} className="rounded-xl bg-surface-container overflow-hidden">
            <button
              className="faq-toggle w-full p-space-md flex items-center justify-between text-left text-on-surface font-headline-sm text-sm font-semibold gap-space-sm"
              type="button"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`material-symbols-outlined text-primary text-[20px] transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`faq-content px-space-md pb-space-md pt-0 text-on-surface-variant font-body-sm text-body-sm ${
                openIndex === index ? '' : 'hidden'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;