
import React from 'react';

interface LogoProps {
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <div 
      className="flex items-center cursor-pointer hover-scale" 
      onClick={onClick}
      title="Inicio"
    >
      <img 
        src="/lovable-uploads/d07f4402-7594-41f8-a693-e7c86d06d3eb.png" 
        alt="La Manicura Logo" 
        className="h-14 mr-2"
      />
    </div>
  );
};

export default Logo;
