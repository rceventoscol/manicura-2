
import React, { useState, useRef } from 'react';
import Logo from '@/components/Logo';
import ContactModal from '@/components/ContactModal';
import ServiceCard from '@/components/ServiceCard';
import { Heart, Scissors, Brush, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = () => {
    setIsContactModalOpen(true);
  };

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 px-6 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Logo onClick={handleLogoClick} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-manicura-pink section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-full h-full max-w-[500px]" />
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              La Manicura
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-8 animate-fade-in">
              Nails · Beauty · Spa
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-manicura-darkred px-8 py-3 rounded-full font-medium hover:bg-manicura-darkred hover:text-white transition-colors animate-fade-in"
            >
              Reservar cita
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-manicura-darkred mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Nails" 
              description="Manicuras, pedicuras, uñas esculpidas, gelish y diseños personalizados para que tus manos luzcan perfectas en todo momento."
              icon={<Scissors size={48} strokeWidth={1.5} />}
            />
            <ServiceCard 
              title="Beauty" 
              description="Tratamientos faciales, maquillaje profesional y cuidados especiales para realzar tu belleza natural con productos de alta calidad."
              icon={<Brush size={48} strokeWidth={1.5} />}
            />
            <ServiceCard 
              title="Spa" 
              description="Experimenta la relajación total con nuestros tratamientos de spa, masajes y terapias que te harán sentir renovada y radiante."
              icon={<Heart size={48} strokeWidth={1.5} />}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-manicura-light section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-manicura-darkred mb-6">
              Nuestra Experiencia
            </h2>
            <p className="text-xl text-gray-700 italic mb-8">
              "En La Manicura no solo cuidamos tus manos, creamos experiencias de belleza que te hacen sentir especial."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm">
                <Heart className="text-manicura-pink mr-2" size={20} fill="#e875a0" />
                <span className="text-manicura-darkred">Atención personalizada</span>
              </div>
              <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm">
                <Heart className="text-manicura-pink mr-2" size={20} fill="#e875a0" />
                <span className="text-manicura-darkred">Profesionales certificados</span>
              </div>
              <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm">
                <Heart className="text-manicura-pink mr-2" size={20} fill="#e875a0" />
                <span className="text-manicura-darkred">Productos premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white section-padding" ref={contactSectionRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-manicura-darkred mb-12">
            Contáctanos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-manicura-light p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-manicura-darkred mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-manicura-pink mr-3" size={20} />
                  <span>Av. Princesa 123, Madrid, España</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-manicura-pink mr-3" size={20} />
                  <span>+34 91 234 5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-manicura-pink mr-3" size={20} />
                  <span>info@lamanicura.com</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-manicura-darkred hover:text-manicura-pink transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-manicura-darkred hover:text-manicura-pink transition-colors">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-manicura-darkred mb-6">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-manicura-pink"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-manicura-pink"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-manicura-pink"
                    placeholder="¿Cómo podemos ayudarte?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-manicura-pink text-white py-3 rounded-md hover:bg-manicura-darkred transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-manicura-darkred text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <Heart className="mr-2" size={20} fill="#ffffff" />
                <span className="font-playfair text-xl">La Manicura</span>
              </div>
            </div>
            <div className="text-sm">
              © 2025 La Manicura. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
