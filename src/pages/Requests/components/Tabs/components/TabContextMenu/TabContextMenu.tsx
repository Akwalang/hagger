import { useState } from "react";

import { useWorkspaceStore, type Group } from "@/global/stores/workspace";
import { getActiveGroup, getActiveEnvironment } from "@/global/stores/workspace/selectors";

import { useLang } from "@/global/hooks";

import { Icon } from "@/views/components";

import * as Base from "@/views/ui/context-menu";
import { WHITESPACE } from "@/utils/react";

interface TabContextMenuProps {
  pageId: string;
  children: React.ReactNode;
}

export const TabContextMenu: React.FC<TabContextMenuProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const lang = useLang((store) => store.pages.requests.requestPages.contextMenu);

  const env = useWorkspaceStore(getActiveEnvironment);
  const group = useWorkspaceStore(getActiveGroup);
  const groups = useWorkspaceStore((state) => state.groups);

  const page = useWorkspaceStore((state) => state.pages[props.pageId]);

  const closeAllPages = useWorkspaceStore((state) => state.closeAllPages);
  const closeAllOtherPages = useWorkspaceStore((state) => state.closeAllOtherPages);
  const movePageToGroup = useWorkspaceStore((state) => state.movePageToGroup);

  const groupsList = env.groupIds.reduce((result, id) => {
    id !== group.id && result.push(groups[id]);

    return result;
  }, [] as Group[]);

  return (
    <Base.ContextMenu onOpenChange={setIsOpen}>
      <Base.ContextMenuTrigger>{props.children}</Base.ContextMenuTrigger>
      { isOpen &&
        <Base.ContextMenuContent className="min-w-[200px]" onClick={(e) => e.stopPropagation()}>
          <Base.ContextMenuLabel>{page.tab.name}</Base.ContextMenuLabel>

          { !!groupsList.length &&
            <>
              <Base.ContextMenuSeparator />

              <Base.ContextMenuSub>
                <Base.ContextMenuSubTrigger>{lang.moveToGroup()}</Base.ContextMenuSubTrigger>
                <Base.ContextMenuSubContent>
                  {groupsList.map((group) => (
                    <Base.ContextMenuItem key={group.id} onClick={() => movePageToGroup(group.id, page.id)}>
                      <Icon icon={group.icon} size={16} />{WHITESPACE}{group.name}
                    </Base.ContextMenuItem>
                  ))}
                </Base.ContextMenuSubContent>
              </Base.ContextMenuSub>
            </>
          }

          <Base.ContextMenuSeparator />

          <Base.ContextMenuItem onClick={() => closeAllOtherPages(group.id, props.pageId)}>{lang.closeAllOther()}</Base.ContextMenuItem>
          <Base.ContextMenuItem onClick={() => closeAllPages(group.id)}>{lang.closeAll()}</Base.ContextMenuItem>
        </Base.ContextMenuContent>
      }
    </Base.ContextMenu>
  );
};
