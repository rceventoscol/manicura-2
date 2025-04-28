
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-manicura-darkred">Contáctanos</DialogTitle>
          <DialogDescription className="text-gray-600">
            Reserva una cita o envíanos un mensaje y te responderemos a la brevedad.
          </DialogDescription>
        </DialogHeader>
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre</label>
            <Input 
              id="name" 
              placeholder="Tu nombre" 
              className="border-gray-300 focus:border-manicura-pink"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo electrónico</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="tu@email.com" 
              className="border-gray-300 focus:border-manicura-pink"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje</label>
            <Textarea 
              id="message" 
              placeholder="¿Cómo podemos ayudarte?" 
              className="min-h-[120px] border-gray-300 focus:border-manicura-pink"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-manicura-pink hover:bg-manicura-darkred text-white transition-colors"
          >
            Enviar mensaje
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
