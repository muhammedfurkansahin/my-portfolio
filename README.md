# Portfolio Sitesi

Next.js, Tailwind CSS ve Supabase ile oluşturulmuş modern bir portfolio sitesi.

## Özellikler

- 🚀 Next.js 14 App Router
- 💅 Tailwind CSS ile modern ve duyarlı tasarım
- 🔥 Framer Motion ile animasyonlar
- 🔍 SEO dostu yapı
- 📱 Tamamen mobil uyumlu
- 🌐 Supabase ile veri yönetimi
- 🎨 Modern UI/UX 

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Projeyi klonlayın
git clone https://github.com/username/portfolio-website.git

# Proje dizinine gidin
cd portfolio-website

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyebilirsiniz.

## Çevre Değişkenleri

Uygulamayı çalıştırmak için bir `.env.local` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Görselleri Değiştirme

Projede kullanılan örnek görselleri kendi görsellerinizle değiştirmek için:

1. `public/images` klasörüne kendi görsellerinizi ekleyin
2. Projedeki ilgili dosyalarda görsel yollarını güncelleyin

## Dağıtım

Bu uygulamayı Vercel'e deploy etmek önerilir:

[![Vercel ile Deploy Et](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/username/portfolio-website)

## Proje Yapısı

```
├── components/       # UI bileşenleri
├── lib/              # Yardımcı fonksiyonlar ve veri işlemleri
├── public/           # Statik dosyalar
├── src/              # Kaynak kodları
│   ├── app/          # Next.js App Router sayfaları
│   ├── styles/       # Global stiller
│   └── types/        # TypeScript tipleri
└── ...
```

## Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

## İletişim

- Website - [yourwebsite.com](https://yourwebsite.com)
- GitHub - [@username](https://github.com/username)
- LinkedIn - [@username](https://linkedin.com/in/username)
