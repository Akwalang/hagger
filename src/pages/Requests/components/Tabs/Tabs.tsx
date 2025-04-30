import { MouseEvent } from 'react';

import { useWorkspaceStore } from '@/global/stores/workspace';
import { getActiveGroup } from '@/global/stores/workspace/selectors';

import { HorizontalScrollArea, ScrollBar } from "@/views/ui/scroll-area";

import { Tab } from './components/Tab/Tab';

interface TabsProps {}

export const Tabs: React.FC<TabsProps> = () => {
  const group = useWorkspaceStore(getActiveGroup);
  const pages = useWorkspaceStore((state) => state.pages);

  const closePage = useWorkspaceStore((state) => state.closePage);
  const setActivePage = useWorkspaceStore((state) => state.setActivePage);

  const tabs = group.pageIds.map((id) => {
    const props = {
      id,
      name: pages[id].tab.name,
      badge: pages[id].tab.badge,
      isActive: id === group.activePageId,
      setActivePage: (event: MouseEvent) => {
        event.stopPropagation();

        if (event.button !== 0) return;

        setActivePage(id);
      },
      closeTab: (event: MouseEvent) => {
        event.stopPropagation();
        closePage(id);
      },
    };

    return <Tab key={id} {...props} />;
  });

  return (
    <HorizontalScrollArea className="w-full h-[38px] flex justify-center overflow-visible">
      <div className="flex w-full h-[35px] items-center" children={tabs} />
      <ScrollBar
        className="h-[5px] [&>div]:top-[5px] [&>div]:bg-foreground"
        orientation="horizontal"
      />
    </HorizontalScrollArea>
  );
};
