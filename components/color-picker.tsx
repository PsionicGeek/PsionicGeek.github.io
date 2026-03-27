'use client';

import * as React from 'react';
import { Palette } from 'lucide-react';

const PRESET_COLORS = [
  '#FF4E00', // Default Orange
  '#00E5FF', // Cyan
  '#FF0055', // Pink
  '#00FF66', // Green
  '#8A2BE2', // Purple
  '#FFD700', // Gold
];

export function ColorPicker() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [accent, setAccent] = React.useState('#FF4E00');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const savedColor = localStorage.getItem('accent-color');
    if (savedColor) {
      setAccent(savedColor);
      document.documentElement.style.setProperty('--accent', savedColor);
    }
  }, []);

  const handleColorChange = (color: string) => {
    setAccent(color);
    document.documentElement.style.setProperty('--accent', color);
    localStorage.setItem('accent-color', color);
  };

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent transition-colors"
        aria-label="Change accent color"
        style={{ color: isOpen ? accent : undefined, borderColor: isOpen ? accent : undefined }}
      >
        <Palette size={18} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 p-3 bg-surface border border-border rounded-xl shadow-xl z-50 w-48 flex flex-wrap gap-2">
            {PRESET_COLORS.map(color => (
              <button
                key={color}
                onClick={() => {
                  handleColorChange(color);
                  setIsOpen(false);
                }}
                className="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110"
                style={{ 
                  backgroundColor: color,
                  borderColor: accent === color ? 'var(--text-primary)' : 'transparent'
                }}
                aria-label={`Set accent color to ${color}`}
              />
            ))}
            <div className="w-full mt-2 pt-2 border-t border-border flex items-center justify-between">
              <span className="text-xs text-text-secondary font-medium">Custom</span>
              <div className="relative w-8 h-8 rounded overflow-hidden border border-border">
                <input 
                  type="color" 
                  value={accent}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="absolute -inset-2 w-12 h-12 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
