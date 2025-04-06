import { Form } from '@/views/components';

import { useLang } from '@/global/hooks/useLang';

interface HeadersProp {}

export const Headers: React.FC<HeadersProp> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs.headers);

  const items = [
    {
      active: true,
      key: 'authorization',
      value: 'Bearer qwertyuiop',
      description: 'Authorization header',
      isRequired: false,
    },
    {
      active: true,
      key: 'x-id',
      value: '',
      description: 'User data',
      isRequired: false,
    },
  ];

  return (
    <div className="px-[15px] pb-[15px]">
      <div>
        <h4 className="mb-2 text-sm">{lang.headersTitle()}</h4>
        <Form.KeyValueEditor items={items} edit={['active', 'key', 'value']} />
      </div>
    </div>
  );
};
