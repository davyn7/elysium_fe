import { cn } from '@/lib/utils';

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  className?: string;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  startIcon,
  endIcon,
  className,
  size = 'medium',
}) => {
  return (
    <button
      type='button'
      className={cn(
        `text-white bg-primary hover:bg-primary/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]`,
        size === 'large'
          ? 'text-xl px-4 py-3'
          : size === 'medium'
          ? 'text-base px-4 py-2'
          : 'text-sm px-1 py-2',
        className
      )}
    >
      {startIcon}
      <div className='mx-2'>{children}</div>
      {endIcon}
    </button>
  );
};

export const DoubleLayerButton = ({
  children,
  startIcon,
  endIcon,
  size = 'medium',
  className,
}: {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  className?: string;
}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2 rounded-md min-w-[140px] w-fit h-fit',
        'transition-all duration-200 ease-in',
        'hover:shadow-none hover:translate-y-0.5 hover:opacity-100',
        `bg-[var(--color-tertiary)] shadow-[-5px_5px_var(--color-secondary)]`,
        size === 'large'
          ? 'text-xl px-4 py-3'
          : size === 'medium'
          ? 'text-base px-4 py-2'
          : 'text-sm px-1 py-2',
        className
      )}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
