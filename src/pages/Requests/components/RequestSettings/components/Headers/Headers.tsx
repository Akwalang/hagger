import { Form, KeyValueItem } from '@/views/components';

import { useLang } from '@/global/hooks/useLang';

interface HeadersProp {
  headers: KeyValueItem[];
}

export const Headers: React.FC<HeadersProp> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs.headers);

  return (
    <div className="px-[15px] pb-[15px]">
      <div>
        <h4 className="mb-2 text-sm">{lang.headersTitle()}</h4>
        <Form.KeyValueEditor items={props.headers} />
      </div>
    </div>
  );
};
