import { Form } from '@/views/components';

import { useLang } from '@/global/hooks/useLang';

interface ParamsProp {}

export const Params: React.FC<ParamsProp> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs.params);

  const items = [
    {
      active: true,
      key: 'status',
      value: 'completed',
      description: 'Filter result by status',
      isRequired: true,
    },
    {
      active: true,
      key: 'sort',
      value: 'created_at',
      description: 'Sorting by filed value',
      isRequired: false,
    },
  ];

  return (
    <div className="px-[15px] pb-[15px]">
      <div>
        <h4 className="mb-2 text-sm">{lang.queryParamsTitle()}</h4>
        <Form.KeyValueEditor items={items} edit={['active', 'key', 'value']} />
      </div>

      <div className="mt-2">
        <h4 className="mb-2 text-sm">{lang.pathVariablesTitle()}</h4>
        <Form.KeyValueEditor items={items} edit={['value']} />
      </div>
    </div>
  );
};
