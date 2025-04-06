import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/views/ui/resizable";

import { useUiStore } from "../../stores/ui.store";

interface MainLayoutProps {
  collection: React.ReactNode;
  requestLayout: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const size = useUiStore((state) => state.collectionSize);
  const setCollectionSize = useUiStore((state) => state.setCollectionSize);

  const layout = [size, 100 - size];

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="items-stretch"
      onLayout={(sizes: number[]) => setCollectionSize(sizes[0])}
    >
      <ResizablePanel className="h-full" defaultSize={layout[0]} minSize={18} maxSize={30}>
        {props.collection}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={layout[1]}>
        {props.requestLayout}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
