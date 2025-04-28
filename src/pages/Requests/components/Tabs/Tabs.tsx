import { MouseEvent } from 'react';
import { X } from 'lucide-react';

import { useWorkspaceStore } from '@/global/stores/workspace';
import { getActiveGroup } from '@/global/stores/workspace/selectors';

import { Separator } from '@/views/ui/separator';
import { HorizontalScrollArea, ScrollBar } from "@/views/ui/scroll-area";

import { cn } from '@/utils/react';

interface TabProps {
  name: string;
  badge: {
    text: string;
    color: string;
  };
  isActive: boolean;
  setActivePage: (event: MouseEvent<HTMLDivElement>) => void;
  closeTab: (event: MouseEvent<HTMLDivElement>) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  return (
    <>
      <div className={cn(
        "relative h-full text-sm flex items-center basis-[160px] min-w-[90px]",
        props.isActive && "cursor-default",
        !props.isActive && "cursor-pointer hover:[&>div:last-child]:opacity-100",
      )} onClick={props.setActivePage}>
        <div className="flex flex-col justify-center grow h-full pl-3 pr-0.5">
          <div className={`text-[0.6rem] px-1 py-0 ml-[-3px] mb-[-4px] opacity-85`}>{props.badge.text}</div>
          <div className="relative w-full">
            {"\u00a0"}
            <div className="absolute left-0 top-0 w-full h-full text-ellipsis overflow-hidden whitespace-nowrap">
              {props.name}
            </div>
          </div>
        </div>
        <div className="h-full flex items-center cursor-pointer hover:[&>svg]:stroke-primary" onClick={props.closeTab}>
          <X className="h-[14px]" />
        </div>
        <div className={cn(
          "absolute left-[5px] right-[5px] bottom-[-1px] h-[2px]",
          props.isActive ? "bg-primary" : "bg-primary/50 opacity-0",
        )} />
      </div>
      <Separator className="h-[45%]" orientation="vertical" />
    </>
  );
};

interface TabsProps {}

export const Tabs: React.FC<TabsProps> = () => {
  const group = useWorkspaceStore(getActiveGroup);
  const pages = useWorkspaceStore((state) => state.pages);

  const closePage = useWorkspaceStore((state) => state.closePage);
  const setActivePage = useWorkspaceStore((state) => state.setActivePage);

  const tabs = group.pageIds.map((id) => {
    const props = {
      name: pages[id].tab.name,
      badge: pages[id].tab.badge,
      isActive: id === group.activePageId,
      setActivePage: (event: MouseEvent) => {
        event.stopPropagation();
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
