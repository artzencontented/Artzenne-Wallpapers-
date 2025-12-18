import React from 'react';
import { Link as LinkIcon, ChevronRight } from 'lucide-react';
import { LinkCardProps } from '../types';

const LinkCard: React.FC<LinkCardProps> = ({ item, onClick }) => {
  return (
    // Outer wrapper handles the entrance animation (Scale Up Center)
    <div className="w-full scale-up-center-normal">
      {/* Middle wrapper handles the continuous vibration */}
      <div className="w-full vibrate-3-normal">
        {/* Inner Card handles styling and hover effects */}
        <div 
          onClick={() => onClick && onClick(item)}
          className="group relative w-full
                     glass-card
                     hover:bg-white/20
                     hover:border-yellow-400/40
                     shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20
                     p-5 
                     transition-all duration-500 ease-out cursor-pointer 
                     hover:scale-[1.02]
                     flex items-center justify-between overflow-hidden"
        >
          {/* Central Pulsing Golden Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-1/2 h-1/2 bg-yellow-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700" />
          </div>

          {/* Content Container */}
          <div className="flex flex-col gap-2 relative z-10">
            {/* Top Label Row */}
            <div className="flex items-center gap-2">
              <LinkIcon className="w-3 h-3 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-yellow-400 uppercase drop-shadow-sm">
                Link
              </span>
            </div>
            
            {/* Main Title */}
            <h3 className="text-white text-base font-medium tracking-wide drop-shadow-md group-hover:text-yellow-50 transition-colors duration-300">
              {item.title}
            </h3>
          </div>

          {/* Right Arrow Icon */}
          <div className="pl-4 relative z-10">
            <ChevronRight className="w-5 h-5 text-yellow-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 drop-shadow-sm" />
          </div>
          
          {/* Overlay Shine Effect */}
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;