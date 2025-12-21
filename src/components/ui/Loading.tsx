import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div className="w-12 h-12 border-4 border-healthcare-primary/20 border-t-healthcare-primary rounded-full animate-spin"></div>
      <p className="text-healthcare-muted dark:text-slate-500 text-xs font-bold uppercase tracking-widest animate-pulse">Loading...</p>
    </div>
  );
};

export default Loading;
