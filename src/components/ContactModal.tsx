
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { X, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const handleCall = () => {
    window.location.href = "tel:+573168850370";
    toast.success("Llamando...");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-manicura-darkred">Contáctanos</DialogTitle>
          <DialogDescription className="text-gray-600">
            Reserva una cita o visítanos en nuestra ubicación.
          </DialogDescription>
        </DialogHeader>
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
        
        <div className="space-y-6 mt-4">
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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-manicura-darkred hover:text-manicura-pink transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://m.facebook.com/@Lamanicurabga" target="_blank" rel="noopener noreferrer" className="text-manicura-darkred hover:text-manicura-pink transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <Button 
            onClick={handleCall} 
            className="w-full bg-manicura-pink hover:bg-manicura-darkred text-white transition-colors"
          >
            <Phone size={18} className="mr-2" />
            Llamar ahora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
