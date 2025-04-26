import { MouseEvent } from 'react';
import { X } from 'lucide-react';

import { useWorkspaceStore } from '@/global/stores/workspace';
import { getActiveGroup } from '@/global/stores/workspace/selectors';

import { Separator } from '@/views/ui/separator';

import { cn } from '@/utils/react';

interface TabProps {
  name: string;
  isActive: boolean;
  setActivePage: (event: MouseEvent<HTMLDivElement>) => void;
  closeTab: (event: MouseEvent<HTMLDivElement>) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  return (
    <>
      <div className={cn(
        "relative h-full text-sm flex items-center",
        props.isActive && "cursor-default",
        !props.isActive && "cursor-pointer hover:[&>div:last-child]:opacity-100",
      )} onClick={props.setActivePage}>
        <div className="pl-3 pr-0.5">{props.name}</div>
        <div onClick={props.closeTab}><X className="h-[14px] cursor-pointer" /></div>
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
      name: pages[id].name,
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
    <div className="w-full h-[38px] flex items-center">
      {tabs}
    </div>
  );
};
