import { MouseEvent } from 'react';
import { X } from 'lucide-react';

import { createDict } from '@/utils/array';
import { cn } from '@/utils/react';

import { usePageStore } from '../../stores/page';

interface TabProps {
  name: string;
  isActive: boolean;
  setActivePageId: (event: MouseEvent<HTMLDivElement>) => void;
  closeTab: (event: MouseEvent<HTMLDivElement>) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  return (
    <>
      <div className={cn("relative h-full text-sm flex items-center", props.isActive ? "cursor-default" : "cursor-pointer")} onClick={props.setActivePageId}>
        <div className="pl-2 pr-0.5">{props.name}</div>
        <div onClick={props.closeTab}><X className="h-[14px] cursor-pointer" /></div>
        {props.isActive && <div className="absolute left-[5px] right-[5px] bottom-0 h-[2px] bg-primary"/>}
      </div>
      <div className="w-[1px] h-[45%] bg-border brightness-70" />
    </>
  );
};

interface TabsProps {}

export const Tabs: React.FC<TabsProps> = () => {
  const { activePageId, tabs, pages, setActivePageId, closeTab } = usePageStore((state) => state);

  const dict = createDict(pages, 'id');

  const children = tabs.map((tab) => {
    const page = dict.get(tab.pageId);

    const props = {
      key: tab.pageId,
      name: page!.name,
      isActive: tab.pageId === activePageId,
      setActivePageId: () => {
        setActivePageId(tab.pageId);
      },
      closeTab: (event: MouseEvent) => {
        event.stopPropagation();
        closeTab(tab.pageId);
      },
    };

    return <Tab {...props} />;
  });

  return (
    <div className="w-full h-[36px] flex items-center border-b-1 border-b-secondary">
      {children}
    </div>
  );
};
