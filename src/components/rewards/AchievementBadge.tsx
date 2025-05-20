
import { useEffect, useState } from 'react';

interface AchievementBadgeProps {
  title: string;
  show: boolean;
  onClose: () => void;
}

const AchievementBadge = ({ title, show, onClose }: AchievementBadgeProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (show) {
      setIsAnimating(true);
      
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // Give time for exit animation
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);
  
  if (!show) return null;
  
  return (
    <div 
      className={`fixed bottom-4 right-4 max-w-xs z-50 transform transition-all duration-300 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg border border-bitcoin p-4 flex items-center">
        <div className="h-12 w-12 rounded-full bg-bitcoin/20 flex items-center justify-center mr-3 animate-pulse-glow">
          <span className="text-bitcoin text-xl">₿</span>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">Achievement Unlocked!</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        <button 
          onClick={onClose}
          className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AchievementBadge;
