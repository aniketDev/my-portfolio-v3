import Image from "next/image";
import { Fragment } from "react";

interface SectionHeadingProps {
  headingPrimary?: string;
  headingAccent?: string;
  subHeading?: string;
  accentFirst?: boolean;
  description?: string;
}

export const SectionHeading = ({
  headingPrimary,
  headingAccent,
  subHeading,
  accentFirst = false,
  description,
}: SectionHeadingProps) => (
  <div className="flex flex-col gap-4 mb-8">
    <div className="flex items-center gap-3">
      {/*<span className="w-7 border-2 border-accent"></span>*/}
      <Image src="/terminal_icon.svg" alt="logo" width={30} height={30} />
      <span className="text-xl">{subHeading}</span>
    </div>
    <h1 className="text-5xl font-bold">
      {accentFirst ? (
        <Fragment>
          <span className="text-accent">{headingAccent}</span> {headingPrimary}
        </Fragment>
      ) : (
        <Fragment>
          {headingPrimary} <span className="text-accent">{headingAccent}</span>
        </Fragment>
      )}
    </h1>
    <p className="mt-4 text-gray-600 text-lg">{description}</p>
  </div>
);
