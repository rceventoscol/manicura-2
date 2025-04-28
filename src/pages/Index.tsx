import React, { useState, useRef } from 'react';
import Logo from '@/components/Logo';
import ContactModal from '@/components/ContactModal';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Scissors, Brush, Instagram, Facebook, MapPin, Phone, Mail, Flower } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const handleLogoClick = () => {
    heroRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const openWhatsApp = () => {
    window.open('https://wa.me/573168850370?text=Hola%2C%20me%20gustaría%20reservar%20una%20cita', '_blank');
  };
  const reviews = [{
    id: 1,
    name: "Maria Rodriguez",
    image: "/lovable-uploads/579073f0-571a-414a-96c4-61b875a76b09.png",
    rating: 5,
    text: "Excelente servicio, muy profesionales y el ambiente es muy agradable. Recomendado 100%."
  }, {
    id: 2,
    name: "Carolina Mendez",
    image: "/lovable-uploads/f73307f6-731f-4bca-9457-275954279604.png",
    rating: 5,
    text: "Me encantó el servicio, las chicas son muy amables y el trabajo es impecable. Volveré pronto."
  }, {
    id: 3,
    name: "Laura Gomez",
    image: "/lovable-uploads/158f29eb-45c7-4321-8555-832a2a9123a6.png",
    rating: 5,
    text: "Super recomendado, el mejor servicio de manicura en Bucaramanga. Siempre salgo feliz con mis uñas."
  }];
  return <div className="min-h-screen flex flex-col">
      <header className="px-6 sticky top-0 z-10 shadow-sm bg-[fdecf6] bg-[#fdecf6] my-0 py-0">
        <div className="container mx-auto flex justify-between items-center">
          <Logo onClick={handleLogoClick} />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button onClick={scrollToServices} className="text-white bg-manicura-pink hover:bg-manicura-pink/80 rounded-full">
                  Servicios
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem className="ml-2">
                <Button onClick={scrollToContact} className="text-white bg-manicura-pink hover:bg-manicura-pink/80 rounded-full">
                  Contacto
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <section className="bg-[#fdecf6] section-padding relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/lovable-uploads/158f29eb-45c7-4321-8555-832a2a9123a6.png" alt="Nail Polish" className="w-full h-full " />
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center px-0 mx-0 my-0 py-0">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in md:text-[e875a0] text-manicura-pink">
              La Manicura
            </h1>
            <p className="text-xl font-light mb-8 animate-fade-in md:text-[gray-7e875a0] text-manicura-pink">
              Nails · Beauty · Spa
            </p>
            <Button onClick={openWhatsApp} className="text-white bg-manicura-pink hover:bg-manicura-pink/80 rounded-full px-8 py-6">
              Reservar cita
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 md:text-[e875a0] text-manicura-pink px-0 py-[114px]">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="Nails" description="Manicuras, pedicuras, uñas esculpidas, gelish y diseños personalizados para que tus manos luzcan perfectas en todo momento." icon={<Scissors size={48} strokeWidth={1.5} />} />
            <ServiceCard title="Beauty" description="Tratamientos faciales, maquillaje profesional y cuidados especiales para realzar tu belleza natural con productos de alta calidad." icon={<Brush size={48} strokeWidth={1.5} />} />
            <ServiceCard title="Spa" description="Experimenta la relajación total con nuestros tratamientos de spa, masajes y terapias que te harán sentir renovada y radiante." icon={<Flower size={48} strokeWidth={1.5} />} />
          </div>
        </div>
      </section>

      <section className="bg-manicura-light section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-manicura-pink">
              Nuestra Experiencia
            </h2>
            <p className="text-xl text-gray-700 italic mb-8">
              "En La Manicura no solo cuidamos tus manos, creamos experiencias de belleza que te hacen sentir especial."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm">
                <img src="/lovable-uploads/d07f4402-7594-41f8-a693-e7c86d06d3eb.png" alt="Logo Mini" className="w-5 h-5 mr-2" />
                <span className="text-manicura-pink">Atención personalizada</span>
              </div>
              <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm">
                <img src="/lovable-uploads/d07f4402-7594-41f8-a693-e7c86d06d3eb.png" alt="Logo Mini" className="w-5 h-5 mr-2" />
                <span className="text-manicura-pink">Profesionales certificados</span>
              </div>
              <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm">
                <img src="/lovable-uploads/d07f4402-7594-41f8-a693-e7c86d06d3eb.png" alt="Logo Mini" className="w-5 h-5 mr-2" />
                <span className="text-manicura-pink">Productos premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding" ref={reviewsRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-manicura-pink">
            Reseñas de Google
          </h2>
          <div className="flex items-center justify-center">
            <Carousel className="w-full max-w-4xl">
              <CarouselContent>
                {reviews.map(review => <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/2">
                    <ReviewCard name={review.name} image={review.image} rating={review.rating} text={review.text} />
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-manicura-pink text-white hover:bg-manicura-pink/80" />
              <CarouselNext className="right-0 bg-manicura-pink text-white hover:bg-manicura-pink/80" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding" ref={contactSectionRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 md:text-[e875a0] text-manicura-pink">
            Contáctanos
          </h2>
          <div>
            <div className="bg-manicura-light p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-manicura-pink">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-manicura-pink mr-3" size={20} />
                  <span>Cra. 35 #52 - 123, Cabecera del llano, Bucaramanga, Santander</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-manicura-pink mr-3" size={20} />
                  <span>+57 (316) 885-0370</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-manicura-pink mr-3" size={20} />
                  <span>info@lamanicura.com</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-manicura-pink hover:text-manicura-pink/80 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://m.facebook.com/@Lamanicurabga" target="_blank" rel="noopener noreferrer" className="text-manicura-pink hover:text-manicura-pink/80 transition-colors">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-manicura-pink">Ubicación</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2297869628363!2d-73.10674392394207!3d7.1017288164788925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f0ec4d23ef7%3A0xb89047eb15c141b9!2sCra.%2035%20%2352-123%2C%20Bucaramanga%2C%20Santander!5e0!3m2!1ses!2sco!4v1713926404423!5m2!1ses!2sco" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-white py-8 bg-[#fdecf6]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <img src="/lovable-uploads/d07f4402-7594-41f8-a693-e7c86d06d3eb.png" alt="La Manicura Logo" className="h-8 mr-2" />
                <span className="font-playfair text-[te5719e] text-[#e5719e]">La Manicura</span>
              </div>
            </div>
            <div className="font-playfair text-[te5719e] text-[#e5719e]">
              © 2025 La Manicura. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>;
};
export default Index;