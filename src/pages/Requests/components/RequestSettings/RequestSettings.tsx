import { Tabs } from '@/views/components';
import { type KeyValueItem } from '@/views/components/Form/Form';

import { Params } from './components/Params/Params';
import { Headers } from './components/Headers/Headers';

import { Request } from '../../stores/page/domains/request/types';

import { useLang } from '@/global/hooks';

interface RequestSettingsProps extends Request {}

export const RequestSettings: React.FC<RequestSettingsProps> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs);

  const tabs = [
    { name: lang.params.name(), value: 'params', content: () => <Params {...props.request.params} /> },
    { name: lang.headers.name(), value: 'headers', content: () => <Headers /> },
  ];

  return (
    <div className="h-full">
      <Tabs className="px-[15px]" tabs={tabs} defaultValue={tabs[0].value} scrollable={true} />
    </div>
  );
};
