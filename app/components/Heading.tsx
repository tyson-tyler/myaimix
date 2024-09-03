import TagLine from "./layout/design/Tagline";

const Heading = ({ className, title, text, tag }: any) => {
  return (
    <div
      className={`${className} w-full mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && (
        <h2 className="lg:text-4xl text-center text-gray-500 md:text-2xl sm:text-xl text-lg">
          {title}
        </h2>
      )}
      {text && <p className="lg:text-sm text-xs mt-4 text-gray-500">{text}</p>}
    </div>
  );
};

export default Heading;
