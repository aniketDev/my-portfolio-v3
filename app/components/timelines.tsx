interface Timeline {
  leftTitle: string;
  leftTimeline?: string;
  leftDuration?: string;
  rightTitle: string;
  rightDescription?: string;
  color?: string;
}

export const Timelines = ({ timelines }: { timelines: Timeline[] }) => {
  return (
    <div className="flex flex-col w-full">
      {timelines.map((timeline, index) => {
        const {
          leftTitle,
          leftTimeline,
          leftDuration,
          rightTitle,
          rightDescription,
          color,
        }: Timeline = timeline;
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.5fr] gap-0 md:gap-8 group">
            {/* Left Side: Company Info (Hidden on small screens, shown on md+) */}
            <div className="hidden md:flex flex-col gap-2 justify-start items-end text-right pt-6 relative group-hover:-translate-x-2 transition-transform duration-300">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">{leftTitle}</h2>
              <div className="inline-flex items-center gap-2 text-gray-500 font-medium bg-white/50 px-3 py-1 rounded-full text-sm mt-1">
                <span>{leftTimeline}</span>
                {leftDuration && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span className="text-gray-400 italic">{leftDuration}</span>
                  </>
                )}
              </div>
            </div>

            {/* Center: Timeline line and node */}
            <div className="hidden md:flex justify-center items-stretch relative">
              {/* Line */}
              <div className={`absolute left-1/2 -ml-px w-0.5 h-full ${index === timelines.length - 1 ? 'bg-gradient-to-b from-gray-200 to-transparent' : 'bg-gray-200'}`}></div>

              {/* Node connecting left and right */}
              <div className="relative mt-8 z-10 w-12 h-12 rounded-full border-4 border-white bg-gray-50 shadow-md flex items-center justify-center group-hover:scale-125 transition-transform duration-500 group-hover:border-accent/20">
                <span className={`h-4 w-4 ${color || 'bg-accent'} rounded-full shadow-inner animate-pulse duration-2000`}></span>
              </div>
            </div>

            {/* Mobile Company Info & Node */}
            <div className="md:hidden flex items-center gap-4 mb-4 mt-8">
              <div className="relative z-10 w-10 h-10 rounded-full border-4 border-white bg-gray-50 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className={`h-3 w-3 ${color || 'bg-accent'} rounded-full shadow-inner`}></span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold text-gray-800">{leftTitle}</h2>
                <div className="text-sm text-gray-500 font-medium">
                  {leftTimeline} {leftDuration && `• ${leftDuration}`}
                </div>
              </div>
            </div>

            {/* Right Side: Role and Description */}
            <div className="flex flex-col gap-4 pb-12 md:pb-16 pt-0 md:pt-4 group-hover:translate-x-2 transition-transform duration-300 ml-12 md:ml-0">
              <div className="bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-accent/20 transition-all duration-300 relative overflow-hidden">
                {/* Decorative background glow for card */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${color ? color.replace('bg-', '') : 'accent'}/10 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

                <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-purple-500 transition-colors duration-300 w-max relative z-10">
                  {rightTitle}
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-3 relative z-10">
                  {rightDescription}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
