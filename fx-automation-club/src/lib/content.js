import { supabase } from './supabase';

export async function fetchLandingPageData() {
  try {
    const [{ data: heroData }, { data: pricingData }, { data: testimonialData }, { data: faqData }] = await Promise.all([
      supabase.from('site_settings').select('*').eq('active', true).limit(1).maybeSingle(),
      supabase.from('pricing_tiers').select('*').eq('active', true).order('sort_order', { ascending: true }),
      supabase.from('testimonials').select('*').eq('active', true).order('sort_order', { ascending: true }),
      supabase.from('faqs').select('*').eq('active', true).order('sort_order', { ascending: true }),
    ]);

    return {
      hero: heroData || null,
      pricing: pricingData || [],
      testimonials: testimonialData || [],
      faqs: faqData || [],
    };
  } catch (error) {
    console.error('Error fetching landing page data from Supabase:', error);
    return {
      hero: null,
      pricing: [],
      testimonials: [],
      faqs: [],
    };
  }
}
