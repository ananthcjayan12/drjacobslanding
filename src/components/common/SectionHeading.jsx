import { twMerge } from 'tailwind-merge';

const SectionHeading = ({ title, subtitle, centered = false, className }) => {
  return (
    <div className={twMerge(
      'mb-12 md:mb-16',
      centered && 'text-center mx-auto max-w-2xl',
      className
    )}>
      {subtitle && (
        <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
