import { MouseEvent } from 'react';
import { X } from 'lucide-react';

import { Separator } from '@/views/ui/separator';

import { cn, WHITESPACE } from '@/utils/react';

import { TabContextMenu } from '../TabContextMenu/TabContextMenu';

interface TabProps {
  id: string;
  name: string;
  badge: {
    text: string;
    color: string;
  };
  isActive: boolean;
  setActivePage: (event: MouseEvent<HTMLDivElement>) => void;
  closeTab: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Tab: React.FC<TabProps> = (props) => {
  return (
    <>
      <div className={cn(
        "relative h-full text-sm flex basis-[160px] min-w-[90px]",
        "[&>span]:w-full [&>span]:h-full [&>span]:flex [&>span]:items-center [&>span]:justify-center",
        props.isActive && "cursor-default",
        !props.isActive && "cursor-pointer hover:[&>div:last-child]:opacity-100",
      )} onClick={props.setActivePage}>
        <TabContextMenu pageId={props.id}>
          <div className="flex flex-col justify-center grow h-full pl-3 pr-0.5">
            <div className={`text-[0.6rem] px-1 py-0 ml-[-3px] mb-[-4px] opacity-85`}>{props.badge.text}</div>
            <div className="relative w-full">
              {WHITESPACE}
              <div className="absolute left-0 top-0 w-full h-full text-ellipsis overflow-hidden whitespace-nowrap">
                {props.name}
              </div>
            </div>
          </div>
          <div
            className={cn(
              "w-[24px] h-full box-content py-[1px] flex items-center cursor-pointer",
              "hover:bg-primary/20 hover:[&>svg]:stroke-primary",
            )}
            onClick={props.closeTab}
          >
            <X className="h-[14px]" />
          </div>
          <div className={cn(
            "absolute left-[5px] right-[5px] bottom-[-1px] h-[2px]",
            props.isActive ? "bg-primary" : "bg-primary/50 opacity-0",
          )} />
        </TabContextMenu>
      </div>
      <Separator className="h-[45%]" orientation="vertical" />
    </>
  );
};
