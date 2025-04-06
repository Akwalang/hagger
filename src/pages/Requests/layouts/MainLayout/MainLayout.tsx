import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/views/ui/resizable";

import { useUiStore } from "../../stores/ui.store";

interface MainLayoutProps {
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
      <ResizablePanel defaultSize={layout[0]} minSize={15} maxSize={30}>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={layout[1]}>
        {props.requestLayout}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
