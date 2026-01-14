import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-zinc-900 rounded-xl shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(24,24,27,1)] transition-all duration-200 cursor-default group">
      <div className="flex items-center gap-3">
        {/* Simple dot indicator */}
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 group-hover:bg-teal-500 transition-colors border border-zinc-900" />
        <span className="font-bold text-zinc-900 text-sm">
          {skill.name}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
