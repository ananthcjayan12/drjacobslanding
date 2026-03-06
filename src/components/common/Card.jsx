import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, hover = true }) => {
  return (
    <div className={twMerge(
      'bg-white rounded-xl shadow-sm border border-gray-100 p-6',
      hover && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-md',
      className
    )}>
      {children}
    </div>
  );
};

export default Card;
