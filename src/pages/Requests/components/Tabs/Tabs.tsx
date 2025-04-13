import { MouseEvent } from 'react';
import { X } from 'lucide-react';

import { Separator } from '@/views/ui/separator';

import { createDict } from '@/utils/array';
import { cn } from '@/utils/react';

import { usePageStore } from '../../stores/page';
import { getActiveGroup, getTabs } from '../../stores/page/selectors';

interface TabProps {
  name: string;
  isActive: boolean;
  setActivePage: (event: MouseEvent<HTMLDivElement>) => void;
  closeTab: (event: MouseEvent<HTMLDivElement>) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  return (
    <>
      <div className={cn("relative h-full text-sm flex items-center", props.isActive ? "cursor-default" : "cursor-pointer")} onClick={props.setActivePage}>
        <div className="pl-2 pr-0.5">{props.name}</div>
        <div onClick={props.closeTab}><X className="h-[14px] cursor-pointer" /></div>
        {props.isActive && <div className="absolute left-[5px] right-[5px] bottom-[-1px] h-[2px] bg-primary"/>}
      </div>
      <Separator className="h-[45%]" orientation="vertical" />
    </>
  );
};

interface TabsProps {}

export const Tabs: React.FC<TabsProps> = () => {
  const { activePageId, tabs, pages } = usePageStore(getActiveGroup);

  const closeTab = usePageStore((state) => state.closeTab);
  const setActivePage = usePageStore((state) => state.setActivePage);

  const dict = createDict(pages, 'id');

  const children = tabs.map((tab) => {
    const page = dict.get(tab.pageId);

    const props = {
      name: page!.name,
      isActive: tab.pageId === activePageId,
      setActivePage: (event: MouseEvent) => {
        event.stopPropagation();
        setActivePage(tab.pageId);
      },
      closeTab: (event: MouseEvent) => {
        event.stopPropagation();
        closeTab(tab.pageId);
      },
    };

    return <Tab key={tab.pageId} {...props} />;
  });

  return (
    <div className="w-full h-[36px] flex items-center">
      {children}
    </div>
  );
};
