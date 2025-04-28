
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card flex flex-col items-center text-center">
      <div className="mb-4 text-manicura-pink">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-manicura-darkred mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
