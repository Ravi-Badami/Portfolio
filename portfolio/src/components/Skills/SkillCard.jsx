import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-xl hover:border-teal-500/50 hover:shadow-md transition-all duration-300 group">
      <div className="flex items-center gap-3">
        {/* Simple dot indicator */}
        <div className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-teal-500 transition-colors" />
        <span className="font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">
          {skill.name}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
