
import React from 'react';
import { Heart } from 'lucide-react';

interface LogoProps {
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <div 
      className="flex items-center cursor-pointer hover-scale" 
      onClick={onClick}
      title="Contáctanos"
    >
      <Heart className="text-manicura-pink mr-2" size={24} fill="#e875a0" />
      <span className="font-playfair font-bold text-xl text-manicura-darkred">La Manicura</span>
    </div>
  );
};

export default Logo;
