import { supabase } from './supabase-client';
import { projects as mockProjects } from './data';

// Tüm projeleri getir
export async function getProjects() {
  try {
    // Supabase projeleri çek
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) {
      console.error('Projeler getirilirken hata oluştu:', error);
      // Hata durumunda örnek verileri kullan
      return mockProjects;
    }

    // Veri varsa döndür, yoksa örnek verileri kullan
    return data && data.length > 0 ? data : mockProjects;
  } catch (error) {
    console.error('Projeler getirilirken beklenmeyen hata:', error);
    // Hata durumunda örnek verileri kullan
    return mockProjects;
  }
}

// Öne çıkan projeleri getir
export async function getFeaturedProjects() {
  try {
    // Supabase'den öne çıkan projeleri çek
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('createdAt', { ascending: false });

    if (error) {
      console.error('Öne çıkan projeler getirilirken hata oluştu:', error);
      // Hata durumunda örnek verilerden öne çıkanları filtrele
      return mockProjects.filter(project => project.featured);
    }

    // Veri varsa döndür, yoksa örnek verilerden öne çıkanları kullan
    return data && data.length > 0 
      ? data 
      : mockProjects.filter(project => project.featured);
  } catch (error) {
    console.error('Öne çıkan projeler getirilirken beklenmeyen hata:', error);
    // Hata durumunda örnek verilerden öne çıkanları kullan
    return mockProjects.filter(project => project.featured);
  }
}

// Belirli bir kategori için projeleri getir
export async function getProjectsByCategory(category: string) {
  try {
    if (category === 'Tümü') {
      return getProjects();
    }

    // Supabase'den kategoriye göre projeleri çek
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('createdAt', { ascending: false });

    if (error) {
      console.error(`${category} kategorisindeki projeler getirilirken hata oluştu:`, error);
      // Hata durumunda örnek verilerden kategoriyi filtrele
      return mockProjects.filter(project => project.category === category);
    }

    // Veri varsa döndür, yoksa örnek verilerden kategoriyi kullan
    return data && data.length > 0 
      ? data 
      : mockProjects.filter(project => project.category === category);
  } catch (error) {
    console.error(`${category} kategorisindeki projeler getirilirken beklenmeyen hata:`, error);
    // Hata durumunda örnek verilerden kategoriyi kullan
    return mockProjects.filter(project => project.category === category);
  }
} 