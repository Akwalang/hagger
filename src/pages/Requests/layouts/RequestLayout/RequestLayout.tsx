import * as BaseRS from "@/views/ui/resizable";

import { useUiStore } from "../../stores/ui.store";

interface RequestLayoutProps {
  requestMain: React.ReactNode;
  requestSettings: React.ReactNode;
  response: React.ReactNode;
}

export const RequestLayout: React.FC<RequestLayoutProps> = (props) => {
  const size = useUiStore((state) => state.requestSize);
  const setRequestSize = useUiStore((state) => state.setRequestSize);

  const layout = [size, 100 - size];

  return (
    <div className="flex flex-col items-stretch h-full">
      <div className="h-[80px]">
        {props.requestMain}
      </div>
      <div className="flex grow">
        <BaseRS.ResizablePanelGroup
          direction="vertical"
          className="items-stretch"
          onLayout={(sizes: number[]) => setRequestSize(sizes[0])}
        >
          <BaseRS.ResizablePanel defaultSize={layout[0]} className="flex flex-col">
            {props.requestSettings}
          </BaseRS.ResizablePanel>
          <BaseRS.ResizableHandle withHandle />
          <BaseRS.ResizablePanel defaultSize={layout[1]}>
            {props.response}
          </BaseRS.ResizablePanel>
        </BaseRS.ResizablePanelGroup>
      </div>
    </div>
  );
};
