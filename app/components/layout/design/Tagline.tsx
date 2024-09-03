import brackets from "./Brackets";

const TagLine = ({ className, children }: any) => {
  return (
    <div className={`tagline flex items-center text-xs ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
