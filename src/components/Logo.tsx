import React from 'react';
interface LogoProps {
  onClick: () => void;
}
const Logo: React.FC<LogoProps> = ({
  onClick
}) => {
  return <div className="flex items-center cursor-pointer hover-scale" onClick={onClick} title="Inicio">
      <img alt="La Manicura Logo" className="h-28 w-28mr-2 rounded-full\n" src="/lovable-uploads/29371134-fd71-4d17-954b-35e735658f90.png" />
    </div>;
};
export default Logo;