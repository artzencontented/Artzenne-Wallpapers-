import React from 'react';
import { WALLPAPER_LINKS } from './constants';
import LinkCard from './components/LinkCard';
import { LinkItem } from './types';

const App: React.FC = () => {
  
  const handleLinkClick = (item: LinkItem) => {
    console.log(`Navigating to: ${item.title}`);
    if (item.url && item.url !== '#') {
      window.open(item.url, '_blank');
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Dark White Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative z-10 flex flex-col items-center py-12 px-4 sm:px-6 w-full h-full overflow-y-auto">
        <main className="w-full max-w-3xl space-y-4">
          
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 tracking-tight bg-gradient-to-tl from-white via-yellow-500 to-white bg-clip-text text-transparent focus-in-expand-normal">
            The Best Wallpapers
          </h1>

          <div className="flex flex-col gap-4">
            {WALLPAPER_LINKS.map((link) => (
              <LinkCard 
                key={link.id} 
                item={link} 
                onClick={handleLinkClick}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;