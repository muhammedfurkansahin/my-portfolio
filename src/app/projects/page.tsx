'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter, FiX } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import { projects } from '@/lib/data';

// Tüm projelerin listelendiği sayfa
export default function ProjectsPage() {
  // Kategori filtresi için state
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [showFilters, setShowFilters] = useState(false);
  
  // Tüm benzersiz kategorileri çıkar
  const allCategories = ['Tümü', ...new Set(projects.map(project => project.category))];
  
  // Aktif kategoriye göre projeleri filtrele
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'Tümü') return true;
    return project.category === activeCategory;
  });

  // Animasyon için varyantlar
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projelerim</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Bugüne kadar üzerinde çalıştığım çeşitli projeler. Her biri farklı zorluklarla başa çıkmamı 
            ve yeni beceriler geliştirmemi sağladı.
          </p>
        </motion.div>

        {/* Filtre Mobil Buton */}
        <div className="md:hidden mb-6 text-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {showFilters ? (
              <>
                <FiX className="mr-2" />
                Filtreleri Kapat
              </>
            ) : (
              <>
                <FiFilter className="mr-2" />
                Filtreleri Göster
              </>
            )}
          </button>
        </div>
        
        {/* Filtreler */}
        <div className={`mb-10 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="flex flex-wrap justify-center gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projeler Listesi */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Bu kategori için henüz proje eklenmemiş.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                {/* Proje Görseli */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Proje İçeriği */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                    {project.featured && (
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Teknolojiler */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        <FiExternalLink className="mr-1" />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        <FiGithub className="mr-1" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
} 