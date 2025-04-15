import { LangSwitcher, ThemeSwitcher } from '@/views/components';

import { cn }from '@/utils/react';

interface MainLayoutProps extends React.ComponentProps<'div'> {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className, ...other }) => {
  // <div className="w-full h-[48px] bg-background brightness-90 border-border border-b-[1px]">
  // </div>

  return (
    <div className={cn("w-full h-svh flex flex-col", className)} {...other}>
      <div className="w-full flex grow items-stretch">
        {children}
      </div>
      <div className="w-full h-[20px] flex justify-between bg-background brightness-90 border-border border-t-[1px]">
        <div className="p-0.5 flex gap-1">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
        <div className="p-0.5">
        </div>
      </div>
    </div>
  );
};
