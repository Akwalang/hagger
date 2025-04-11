import * as BaseRS from "@/views/ui/resizable";

import { RequestMain } from '../../components/RequestMain/RequestMain';
import { RequestSettings } from '../../components/RequestSettings/RequestSettings';
import { Response } from '../../components/Response/Response';

import { usePageStore } from "../../stores/page";
import { useUiStore } from "../../stores/ui";

import { getActivePage } from "../../stores/page/selectors";

interface RequestLayoutProps {
  requestSettings: React.ReactNode;
  response: React.ReactNode;
}

export const RequestLayout: React.FC<RequestLayoutProps> = (props) => {
  const page = usePageStore(getActivePage);

  const size = useUiStore((state) => state.requestSize);
  const setRequestSize = useUiStore((state) => state.setRequestSize);

  const layout = [size, 100 - size];

  if (!page) return null;

  return (
    <div className="flex grow flex-col items-stretch h-full">
      <div className="h-[80px]">
        <RequestMain page={page} />
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
