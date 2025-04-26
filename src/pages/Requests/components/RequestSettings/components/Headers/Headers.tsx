import { Form, KeyValueItem } from '@/views/components';

import { useLang } from '@/global/hooks/useLang';
import { useWorkspaceStore } from '@/global/stores/workspace';
import { curry } from '@/utils/functions';

interface HeadersProp {
  headers: KeyValueItem[];
}

export const Headers: React.FC<HeadersProp> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs.headers);
  const changeRequestHeaders = useWorkspaceStore((state) => state.changeRequestHeaders);

  return (
    <div className="px-[15px] pb-[15px]">
      <div>
        <h4 className="mb-2 text-sm">{lang.headersTitle()}</h4>
        <Form.KeyValueEditor items={props.headers} onChange={curry(changeRequestHeaders)} />
      </div>
    </div>
  );
};
