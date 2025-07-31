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
    <div className="flex flex-col">
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
          <div key={index} className="grid grid-cols-[1fr_auto_1.5fr] gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">{leftTitle}</h2>
              <p>{leftTimeline}</p>
              <p>{leftDuration}</p>
            </div>
            <div className="flex justify-self-end items-start relative">
              <div className="flex border p-3 rounded-full justify-center before:absolute before:content-[''] before:w-[1px] before:h-[calc(100%-45px)] before:bg-gray-300 before:top-[45px] before:left-1/2 before:-translate-x-1/2">
                <span className={`h-5 w-5 ${color} rounded-full`}></span>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-[0.5rem_1rem_2rem]">
              <h2 className="text-2xl font-bold">{rightTitle}</h2>
              <p className="text-lg text-gray-500">{rightDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
