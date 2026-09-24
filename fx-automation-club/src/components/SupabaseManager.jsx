import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const initialForm = {
  title: '',
  description: '',
  status: 'draft',
};

function SupabaseManager() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const fetchRecords = async () => {
    try {
      setFetching(true);
      const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });

      if (error) throw error;
      setRecords(data || []);
    } catch (err) {
      setError(err.message || 'Gagal mengambil data dari Supabase.');
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const filteredRecords = records.filter((record) => {
    const matchesSearch =
      !search ||
      record.title.toLowerCase().includes(search.toLowerCase()) ||
      record.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: records.length,
    published: records.filter((record) => record.status === 'published').length,
    draft: records.filter((record) => record.status === 'draft').length,
    archived: records.filter((record) => record.status === 'archived').length,
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        status: form.status,
      };

      if (!payload.title || !payload.description) {
        throw new Error('Judul dan deskripsi harus diisi.');
      }

      if (editingId) {
        const { error } = await supabase.from('posts').update(payload).eq('id', editingId);
        if (error) throw error;
        setSuccess('Data berhasil diperbarui.');
      } else {
        const { error } = await supabase.from('posts').insert([payload]);
        if (error) throw error;
        setSuccess('Data berhasil ditambahkan ke Supabase.');
      }

      resetForm();
      await fetchRecords();
    } catch (err) {
      setError(err.message || 'Gagal menyimpan data.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setForm({
      title: record.title,
      description: record.description,
      status: record.status,
    });
    setError('');
    setSuccess('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      return;
    }

    setError('');
    setSuccess('');

    try {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) throw error;

      setSuccess('Data berhasil dihapus.');
      if (editingId === id) {
        resetForm();
      }
      await fetchRecords();
    } catch (err) {
      setError(err.message || 'Gagal menghapus data.');
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-white/10 bg-surface-container p-6 shadow-lg shadow-black/10">
        <div className="flex flex-col gap-2 mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Supabase</p>
          <h2 className="text-3xl font-bold text-on-surface">Manajemen data</h2>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-surface p-4">
            <p className="text-sm text-secondary">Total</p>
            <p className="mt-2 text-2xl font-bold text-on-surface">{stats.total}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-surface p-4">
            <p className="text-sm text-secondary">Published</p>
            <p className="mt-2 text-2xl font-bold text-primary">{stats.published}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-surface p-4">
            <p className="text-sm text-secondary">Draft</p>
            <p className="mt-2 text-2xl font-bold text-on-surface">{stats.draft}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-surface p-4">
            <p className="text-sm text-secondary">Archived</p>
            <p className="mt-2 text-2xl font-bold text-on-surface">{stats.archived}</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-surface p-4">
            <div>
              <label className="mb-1 block text-sm text-secondary">Judul</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface outline-none ring-0 placeholder:text-on-surface/50"
                placeholder="Masukkan judul"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-secondary">Deskripsi</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface outline-none placeholder:text-on-surface/50"
                placeholder="Masukkan deskripsi"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-secondary">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-on-surface outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {error && <p className="text-sm text-error">{error}</p>}
            {success && <p className="text-sm text-primary">{success}</p>}

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 rounded-xl bg-primary px-4 py-3 font-semibold text-on-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Menyimpan...' : editingId ? 'Update data' : 'Tambah data'}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-white/10 px-4 py-3 font-semibold text-on-surface hover:bg-surface-container-high"
                >
                  Batal
                </button>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-white/10 bg-surface p-4">
            <div className="mb-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-on-surface">Data dari database</h3>
                <button
                  type="button"
                  onClick={fetchRecords}
                  className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-on-surface hover:bg-surface-container-high"
                >
                  Refresh
                </button>
              </div>

              <div className="flex flex-col gap-3 md:flex-row">
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Cari judul atau deskripsi..."
                  className="w-full rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-sm text-on-surface placeholder:text-on-surface/50"
                />

                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-sm text-on-surface"
                >
                  <option value="all">Semua status</option>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            {fetching ? (
              <p className="text-sm text-secondary">Memuat data...</p>
            ) : filteredRecords.length === 0 ? (
              <p className="text-sm text-secondary">
                {records.length === 0 ? 'Belum ada data di tabel posts.' : 'Tidak ada data yang cocok dengan pencarian atau filter.'}
              </p>
            ) : (
              <div className="space-y-3 max-h-[420px] overflow-auto pr-1">
                {filteredRecords.map((record) => (
                  <article key={record.id} className="rounded-xl border border-white/10 bg-surface-container-high p-3">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold text-on-surface">{record.title}</h4>
                      <span className="rounded-full bg-primary/20 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-primary">
                        {record.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-on-surface/80">{record.description}</p>
                    <p className="mt-3 text-[11px] text-secondary">
                      {new Date(record.created_at).toLocaleString('id-ID')}
                    </p>

                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(record)}
                        className="rounded-lg border border-white/10 bg-surface px-3 py-1.5 text-xs font-medium text-on-surface hover:bg-surface-container-high"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(record.id)}
                        className="rounded-lg border border-error/40 bg-error/10 px-3 py-1.5 text-xs font-medium text-error hover:opacity-90"
                      >
                        Hapus
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupabaseManager;
