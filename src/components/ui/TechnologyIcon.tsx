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
  'React Native': '/images/tech/native.png',
  'Next.js': '/images/tech/next.svg',
  'Tailwind': '/images/tech/tailwind.svg',
  'Tailwind CSS': '/images/tech/tailwind.svg',
  'CSS/Tailwind': '/images/tech/tailwind.png',
  'TypeScript': '/images/tech/typescript.png',
  'Node.js': '/images/tech/node.png',
  'Express': '/images/tech/express.png',
  'Express.js': '/images/tech/express.png',
  'MongoDB': '/images/tech/mongo.png',
  'Python': '/images/tech/python.png',
  'PHP': '/images/tech/php.png',
  'Firebase': '/images/tech/firebase.png',
  'RESTful APIs': '/images/tech/restapi.png',
  'HTML5': '/images/tech/html.png',
  'JavaScript': '/images/tech/javascript.png',
  'Bootstrap': '/images/tech/bootstrap.jpeg',
  'Java': '/images/tech/java.png',
  'C++': '/images/tech/c.png',
  'Arduino': '/images/tech/arduino.jpeg',
  'Git': '/images/tech/git.png',
  'GitHub': '/images/tech/github.png',
  'Azure DevOps': '/images/tech/azure.jpeg',
  'Postman': '/images/tech/postman.jpeg',
  'Figma': '/images/tech/figma.png',
  'VS Code': '/images/tech/vscode.jpeg',
  'SQL Server': '/images/tech/sql.png',
  'Android Studio': '/images/tech/android.jpeg',
  'Kotlin': '/images/tech/kotlin.png',
  'C#': '/images/tech/c.png', // Using C image for C# since specific one not found
  'NoSQL': '/images/tech/no.png',
  'MySQL': '/images/tech/mysql.png',
  'CSS3': '/images/tech/css.png',
  'Arduino IDE': '/images/tech/arduino.jpeg',
  '.NET': '/images/tech/c.png', // Using C image for .NET since specific one not found
  'Flutter': '/images/tech/draw.jpeg',
  'Expo': '/images/tech/react.png', // Using React image for Expo since specific one not found
  'Spring Boot': '/images/tech/java.png', // Using Java image for Spring Boot
  'JWT': '/images/tech/restapi.png', // Using REST API image for JWT
  'Material UI': '/images/tech/react.png', // Using React image for Material UI
  'Material Design': '/images/tech/android.jpeg', // Using Android image for Material Design
  'Framer Motion': '/images/tech/react.png', // Using React image for Framer Motion
  'Prisma': '/images/tech/node.png', // Using Node.js image for Prisma
  'PostgreSQL': '/images/tech/sql.png', // Using SQL image for PostgreSQL
  'Redux': '/images/tech/react.png', // Using React image for Redux
  'Google Maps API': '/images/tech/restapi.png' // Using REST API image for Google Maps API
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
