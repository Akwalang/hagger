import { cn }from '@/utils/react';

interface MainLayoutProps extends React.ComponentProps<'div'> {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className, ...other }) => {
  return (
    <div className={cn("w-full h-svh flex flex-col", className)} {...other}>
      <div className="w-full h-[48px] bg-background brightness-90 border-border border-b-[1px]">
      </div>
      <div className="w-full flex grow items-stretch">
        {children}
      </div>
      <div className="w-full h-[20px] bg-background brightness-90 border-border border-t-[1px]">
      </div>
    </div>
  );
};
