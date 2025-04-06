import { Tabs } from '@/views/components';

import { Params } from './components/Params/Params';
import { Headers } from './components/Headers/Headers';

import { type KeyValueItem } from '@/views/components/Form/Form';

import { useLang } from '@/global/hooks';

interface RequestSettingsProps {
  method: string;
  url: string;
  headers: KeyValueItem[];
  params: {
    path: KeyValueItem[];
    query: KeyValueItem[];
  };
}

export const RequestSettings: React.FC<RequestSettingsProps> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs);

  const tabs = [
    { name: lang.params.name(), value: 'params', content: () => <Params /> },
    { name: lang.headers.name(), value: 'headers', content: () => <Headers /> },
  ];

  return (
    <div className="h-full">
      <Tabs className="px-[15px]" tabs={tabs} defaultValue={tabs[0].value} scrollable={true} />
    </div>
  );
};
