'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface TechnologyIconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl';
  showLabel?: boolean;
  className?: string;
}

// Map of technology names to their image paths
const techImageMap: Record<string, string> = {
  'React': '/images/tech/react.svg',
  'React.js': '/images/tech/react.svg',
  'React Native': '/images/tech/react.svg',
  'Next.js': '/images/tech/next.svg',
  'Tailwind': '/images/tech/tailwind.svg',
  'Tailwind CSS': '/images/tech/tailwind.svg',
  'CSS/Tailwind': '/images/tech/tailwind.svg',
  'TypeScript': '/images/tech/typescript.svg',
  'Node.js': '/images/tech/nodejs.svg',
  'Express': '/images/tech/express.svg',
  'Express.js': '/images/tech/express.svg',
  'MongoDB': '/images/tech/mongodb.svg',
  'Laravel': '/images/tech/laravel.svg',
  'Vue.js': '/images/tech/vuejs.svg',
  'Angular': '/images/tech/angular.svg',
  'SASS': '/images/tech/sass.svg',
  'Python': '/images/tech/python.svg',
  'Django': '/images/tech/django.svg',
  'PHP': '/images/tech/php.svg',
  'GraphQL': '/images/tech/graphql.svg',
  'Firebase': '/images/tech/firebase.svg',
  'RESTful APIs': '/images/tech/postman.svg',
};

const sizesMap = {
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  xxl: 'w-20 h-20',
  '3xl': 'w-24 h-24',
};

export function TechnologyIcon({
  name,
  size = 'md',
  showLabel = false,
  className = '',
}: TechnologyIconProps) {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sizeClasses = sizesMap[size];
  const imagePath = techImageMap[name];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {imagePath ? (
        <div className={`relative ${sizeClasses} overflow-hidden`}>
          <Image
            src={imagePath}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
      ) : (
        <div className={`${sizeClasses} bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-medium text-xs sm:text-sm`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      )}
      
      {showLabel && (
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
      )}
    </div>
  );
}
