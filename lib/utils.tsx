import React from 'react';
import Image from 'next/image';
import { Skill } from '@/db/SkillsData';

// Helper for fallback icon placeholder
export const IconPlaceholder = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Render skill icon (either as Image or fallback SVG)
export const renderSkillIcon = (skill: Skill): React.ReactNode => {
  if (skill.icon.startsWith('/')) {
    try {
      return (
        <div className="w-6 h-6 mr-2 grayscale opacity-70">
          <Image 
            src={skill.icon} 
            alt={`${skill.name} icon`} 
            width={24} 
            height={24}
            className="w-full h-full object-contain"
          />
        </div>
      );
     //eslint-disable-next-line  @typescript-eslint/no-unused-vars
    } catch (error) {
      return (
        <div className="w-6 h-6 mr-2 grayscale opacity-70">
          <IconPlaceholder />
        </div>
      );
    }
  }
  
  // Fallback to placeholder
  return (
    <div className="w-6 h-6 mr-2 grayscale opacity-70">
      <IconPlaceholder />
    </div>
  );
};

// Helper function to split skills into rows for grid display
export const getSkillRows = (skills: Skill[], isMobile: boolean, isTablet: boolean) => {
  const itemsPerRow = !isMobile ? (isTablet ? 3 : 6) : 2;
  const rows = [];
  
  for (let i = 0; i < skills.length; i += itemsPerRow) {
    rows.push(skills.slice(i, i + itemsPerRow));
  }
  
  return rows;
};