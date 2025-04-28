
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  image: string;
  rating: number;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  image,
  rating,
  text
}) => {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <div className="flex items-center">
              {Array(rating).fill(0).map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 italic flex-grow">{text}</p>
        <Badge variant="outline" className="mt-4 self-end">
          Google Reviews
        </Badge>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
