import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';

const EMPTY_HERO = {
  badge: 'ALGO TRADING MT4 & MT5 • VERIFIED PRO',
  headline: 'Trading Otomatis dengan Manajemen Risiko Terukur',
  subheadline:
    'Expert Advisor (EA) institusional berbasis Price Action & Momentum tanpa Martingale berbahaya. Dirancang khusus untuk trader pemula maupun prop-firm trader yang mendambakan pertumbuhan portofolio konsisten.',
  primary_cta_text: 'Lihat Bukti Performa',
  primary_cta_link: '#bukti-performa',
  secondary_cta_text: 'Pilihan Paket Lisensi',
  secondary_cta_link: '#pilihan-paket',
};

const EMPTY_PRICING = {
  title: '',
  badge: '',
  price: '',
  period: '/ bulan',
  description: '',
  button_text: '',
  button_link: 'https://t.me/',
  highlight: false,
};

const EMPTY_TESTIMONIAL = {
  name: '',
  location: '',
  initials: '',
  roi: '',
  rating: 5,
  text: '',
};

const EMPTY_FAQ = {
  question: '',
  answer: '',
};

function ContentManager() {
  const [tab, setTab] = useState('hero');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [hero, setHero] = useState(EMPTY_HERO);
  const [pricing, setPricing] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [editingPricingId, setEditingPricingId] = useState(null);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  const [editingFaqId, setEditingFaqId] = useState(null);

  const [pricingForm, setPricingForm] = useState(EMPTY_PRICING);
  const [testimonialForm, setTestimonialForm] = useState(EMPTY_TESTIMONIAL);
  const [faqForm, setFaqForm] = useState(EMPTY_FAQ);

  const tabs = useMemo(
    () => [
      { key: 'hero', label: 'Hero' },
      { key: 'pricing', label: 'Pricing' },
      { key: 'testimonials', label: 'Testimonials' },
      { key: 'faqs', label: 'FAQs' },
    ],
    [],
  );

  const loadContent = async () => {
    setLoading(true);
    try {
      const [{ data: heroSettings }, { data: pricingData }, { data: testimonialData }, { data: faqData }] = await Promise.all([
        supabase.from('site_settings').select('*').eq('key', 'hero').maybeSingle(),
        supabase.from('pricing_tiers').select('*').eq('active', true).order('sort_order', { ascending: true }),
        supabase.from('testimonials').select('*').eq('active', true).order('sort_order', { ascending: true }),
        supabase.from('faqs').select('*').eq('active', true).order('sort_order', { ascending: true }),
      ]);

      setHero(heroSettings?.value || EMPTY_HERO);
      setPricing(pricingData || []);
      setTestimonials(testimonialData || []);
      setFaqs(faqData || []);
    } catch (err) {
      setError(err.message || 'Gagal memuat konten landing page.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleHeroSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert(
          {
            key: 'hero',
            value: hero,
            active: true,
          },
          { onConflict: 'key' },
        );

      if (error) throw error;
      setSuccess('Data hero berhasil disimpan.');
      await loadContent();
    } catch (err) {
      setError(err.message || 'Gagal menyimpan hero.');
    } finally {
      setLoading(false);
    }
  };

  const handlePricingSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        ...pricingForm,
        title: pricingForm.title.trim(),
        badge: pricingForm.badge.trim(),
        price: pricingForm.price.trim(),
        description: pricingForm.description.trim(),
        period: pricingForm.period.trim() || '/ bulan',
        button_text: pricingForm.button_text.trim(),
        button_link: pricingForm.button_link.trim() || 'https://t.me/',
        highlight: pricingForm.highlight,
        active: true,
        sort_order: pricing.length + 1,
      };

      if (!payload.title || !payload.price || !payload.button_text) {
        throw new Error('Judul, harga, dan tombol CTA harus diisi.');
      }

      if (editingPricingId) {
        const { error } = await supabase.from('pricing_tiers').update(payload).eq('id', editingPricingId);
        if (error) throw error;
        setSuccess('Paket pricing berhasil diperbarui.');
      } else {
        const { error } = await supabase.from('pricing_tiers').insert([payload]);
        if (error) throw error;
        setSuccess('Paket pricing berhasil ditambahkan.');
      }

      setPricingForm(EMPTY_PRICING);
      setEditingPricingId(null);
      await loadContent();
    } catch (err) {
      setError(err.message || 'Gagal menambahkan pricing.');
    } finally {
      setLoading(false);
    }
  };

  const handleTestimonialSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        ...testimonialForm,
        name: testimonialForm.name.trim(),
        location: testimonialForm.location.trim(),
        initials: testimonialForm.initials.trim(),
        roi: testimonialForm.roi.trim(),
        rating: Number(testimonialForm.rating) || 5,
        text: testimonialForm.text.trim(),
        active: true,
        sort_order: testimonials.length + 1,
      };

      if (!payload.name || !payload.text) {
        throw new Error('Nama dan testimoni harus diisi.');
      }

      if (editingTestimonialId) {
        const { error } = await supabase.from('testimonials').update(payload).eq('id', editingTestimonialId);
        if (error) throw error;
        setSuccess('Testimoni berhasil diperbarui.');
      } else {
        const { error } = await supabase.from('testimonials').insert([payload]);
        if (error) throw error;
        setSuccess('Testimoni berhasil ditambahkan.');
      }

      setTestimonialForm(EMPTY_TESTIMONIAL);
      setEditingTestimonialId(null);
      await loadContent();
    } catch (err) {
      setError(err.message || 'Gagal menyimpan testimoni.');
    } finally {
      setLoading(false);
    }
  };

  const handleFaqSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        ...faqForm,
        question: faqForm.question.trim(),
        answer: faqForm.answer.trim(),
        active: true,
        sort_order: faqs.length + 1,
      };

      if (!payload.question || !payload.answer) {
        throw new Error('Pertanyaan dan jawaban harus diisi.');
      }

      if (editingFaqId) {
        const { error } = await supabase.from('faqs').update(payload).eq('id', editingFaqId);
        if (error) throw error;
        setSuccess('FAQ berhasil diperbarui.');
      } else {
        const { error } = await supabase.from('faqs').insert([payload]);
        if (error) throw error;
        setSuccess('FAQ berhasil ditambahkan.');
      }

      setFaqForm(EMPTY_FAQ);
      setEditingFaqId(null);
      await loadContent();
    } catch (err) {
      setError(err.message || 'Gagal menyimpan FAQ.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (table, id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data ini?')) return;

    try {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) throw error;
      setSuccess('Data berhasil dihapus.');
      await loadContent();
    } catch (err) {
      setError(err.message || 'Gagal menghapus data.');
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-white/10 bg-surface-container p-6 shadow-lg shadow-black/10">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">CMS</p>
          <h2 className="text-3xl font-bold text-on-surface">Content Manager</h2>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                tab === item.key
                  ? 'bg-primary text-on-primary'
                  : 'border border-white/10 bg-surface text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {error && <p className="mb-4 text-sm text-error">{error}</p>}
        {success && <p className="mb-4 text-sm text-primary">{success}</p>}

        {tab === 'hero' && (
          <form onSubmit={handleHeroSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-surface p-4">
            <div>
              <label className="mb-1 block text-sm text-secondary">Badge</label>
              <input
                value={hero.badge}
                onChange={(event) => setHero((current) => ({ ...current, badge: event.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-secondary">Headline</label>
              <input
                value={hero.headline}
                onChange={(event) => setHero((current) => ({ ...current, headline: event.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-secondary">Subheadline</label>
              <textarea
                rows="4"
                value={hero.subheadline}
                onChange={(event) => setHero((current) => ({ ...current, subheadline: event.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-secondary">Primary CTA Text</label>
                <input
                  value={hero.primary_cta_text}
                  onChange={(event) => setHero((current) => ({ ...current, primary_cta_text: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-secondary">Primary CTA Link</label>
                <input
                  value={hero.primary_cta_link}
                  onChange={(event) => setHero((current) => ({ ...current, primary_cta_link: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-secondary">Secondary CTA Text</label>
                <input
                  value={hero.secondary_cta_text}
                  onChange={(event) => setHero((current) => ({ ...current, secondary_cta_text: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-secondary">Secondary CTA Link</label>
                <input
                  value={hero.secondary_cta_link}
                  onChange={(event) => setHero((current) => ({ ...current, secondary_cta_link: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-primary px-4 py-3 font-semibold text-on-primary disabled:opacity-60"
            >
              {loading ? 'Menyimpan...' : 'Simpan Hero'}
            </button>
          </form>
        )}

        {tab === 'pricing' && (
          <div className="space-y-6">
            <form onSubmit={handlePricingSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-surface p-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-secondary">Judul</label>
                  <input
                    value={pricingForm.title}
                    onChange={(event) => setPricingForm((current) => ({ ...current, title: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-secondary">Badge</label>
                  <input
                    value={pricingForm.badge}
                    onChange={(event) => setPricingForm((current) => ({ ...current, badge: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm text-secondary">Harga</label>
                  <input
                    value={pricingForm.price}
                    onChange={(event) => setPricingForm((current) => ({ ...current, price: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-secondary">Periode</label>
                  <input
                    value={pricingForm.period}
                    onChange={(event) => setPricingForm((current) => ({ ...current, period: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
                <div className="flex items-center gap-2 pt-7">
                  <input
                    type="checkbox"
                    checked={pricingForm.highlight}
                    onChange={(event) => setPricingForm((current) => ({ ...current, highlight: event.target.checked }))}
                    className="h-4 w-4"
                  />
                  <label className="text-sm text-secondary">Highlight</label>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm text-secondary">Deskripsi</label>
                <textarea
                  rows="3"
                  value={pricingForm.description}
                  onChange={(event) => setPricingForm((current) => ({ ...current, description: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-secondary">Teks Tombol</label>
                  <input
                    value={pricingForm.button_text}
                    onChange={(event) => setPricingForm((current) => ({ ...current, button_text: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-secondary">Link Tombol</label>
                  <input
                    value={pricingForm.button_link}
                    onChange={(event) => setPricingForm((current) => ({ ...current, button_link: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button type="submit" disabled={loading} className="rounded-xl bg-primary px-4 py-3 font-semibold text-on-primary disabled:opacity-60">
                  {loading ? 'Menyimpan...' : editingPricingId ? 'Update Pricing' : 'Tambah Pricing'}
                </button>
                {editingPricingId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingPricingId(null);
                      setPricingForm(EMPTY_PRICING);
                    }}
                    className="rounded-xl border border-white/10 px-4 py-3 font-semibold text-on-surface"
                  >
                    Batal
                  </button>
                )}
              </div>
            </form>

            <div className="space-y-3">
              {pricing.map((item) => (
                <div key={item.id} className="rounded-xl border border-white/10 bg-surface p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-on-surface">{item.title}</p>
                      <p className="text-sm text-secondary">{item.price} • {item.period}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingPricingId(item.id);
                          setPricingForm({
                            title: item.title,
                            badge: item.badge || '',
                            price: item.price,
                            period: item.period || '/ bulan',
                            description: item.description || '',
                            button_text: item.button_text || '',
                            button_link: item.button_link || 'https://t.me/',
                            highlight: Boolean(item.highlight),
                          });
                        }}
                        className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-on-surface"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete('pricing_tiers', item.id)}
                        className="rounded-lg border border-error/40 bg-error/10 px-3 py-1.5 text-xs text-error"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'testimonials' && (
          <div className="space-y-6">
            <form onSubmit={handleTestimonialSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-surface p-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-secondary">Nama</label>
                  <input
                    value={testimonialForm.name}
                    onChange={(event) => setTestimonialForm((current) => ({ ...current, name: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-secondary">Lokasi</label>
                  <input
                    value={testimonialForm.location}
                    onChange={(event) => setTestimonialForm((current) => ({ ...current, location: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm text-secondary">Initials</label>
                  <input
                    value={testimonialForm.initials}
                    onChange={(event) => setTestimonialForm((current) => ({ ...current, initials: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-secondary">ROI</label>
                  <input
                    value={testimonialForm.roi}
                    onChange={(event) => setTestimonialForm((current) => ({ ...current, roi: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-secondary">Rating</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={testimonialForm.rating}
                    onChange={(event) => setTestimonialForm((current) => ({ ...current, rating: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-secondary">Testimoni</label>
                <textarea
                  rows="4"
                  value={testimonialForm.text}
                  onChange={(event) => setTestimonialForm((current) => ({ ...current, text: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                />
              </div>

              <div className="flex gap-3">
                <button type="submit" disabled={loading} className="rounded-xl bg-primary px-4 py-3 font-semibold text-on-primary disabled:opacity-60">
                  {loading ? 'Menyimpan...' : editingTestimonialId ? 'Update Testimoni' : 'Tambah Testimoni'}
                </button>
                {editingTestimonialId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingTestimonialId(null);
                      setTestimonialForm(EMPTY_TESTIMONIAL);
                    }}
                    className="rounded-xl border border-white/10 px-4 py-3 font-semibold text-on-surface"
                  >
                    Batal
                  </button>
                )}
              </div>
            </form>

            <div className="space-y-3">
              {testimonials.map((item) => (
                <div key={item.id} className="rounded-xl border border-white/10 bg-surface p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-on-surface">{item.name}</p>
                      <p className="text-sm text-secondary">{item.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingTestimonialId(item.id);
                          setTestimonialForm({
                            name: item.name,
                            location: item.location || '',
                            initials: item.initials || '',
                            roi: item.roi || '',
                            rating: item.rating || 5,
                            text: item.text || '',
                          });
                        }}
                        className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-on-surface"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete('testimonials', item.id)}
                        className="rounded-lg border border-error/40 bg-error/10 px-3 py-1.5 text-xs text-error"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'faqs' && (
          <div className="space-y-6">
            <form onSubmit={handleFaqSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-surface p-4">
              <div>
                <label className="mb-1 block text-sm text-secondary">Pertanyaan</label>
                <input
                  value={faqForm.question}
                  onChange={(event) => setFaqForm((current) => ({ ...current, question: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-secondary">Jawaban</label>
                <textarea
                  rows="4"
                  value={faqForm.answer}
                  onChange={(event) => setFaqForm((current) => ({ ...current, answer: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface"
                />
              </div>

              <div className="flex gap-3">
                <button type="submit" disabled={loading} className="rounded-xl bg-primary px-4 py-3 font-semibold text-on-primary disabled:opacity-60">
                  {loading ? 'Menyimpan...' : editingFaqId ? 'Update FAQ' : 'Tambah FAQ'}
                </button>
                {editingFaqId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingFaqId(null);
                      setFaqForm(EMPTY_FAQ);
                    }}
                    className="rounded-xl border border-white/10 px-4 py-3 font-semibold text-on-surface"
                  >
                    Batal
                  </button>
                )}
              </div>
            </form>

            <div className="space-y-3">
              {faqs.map((item) => (
                <div key={item.id} className="rounded-xl border border-white/10 bg-surface p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-on-surface">{item.question}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingFaqId(item.id);
                          setFaqForm({
                            question: item.question,
                            answer: item.answer,
                          });
                        }}
                        className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-on-surface"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete('faqs', item.id)}
                        className="rounded-lg border border-error/40 bg-error/10 px-3 py-1.5 text-xs text-error"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContentManager;
