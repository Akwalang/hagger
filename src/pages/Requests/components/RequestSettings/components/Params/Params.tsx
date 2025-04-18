import { Form, KeyValueItem } from '@/views/components';

import { usePageStore } from '@/pages/Requests/stores/page';
import { useLang } from '@/global/hooks/useLang';
import { curry } from '@/utils/function';

interface ParamsProp {
  path: KeyValueItem[];
  query: KeyValueItem[];
}

export const Params: React.FC<ParamsProp> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs.params);
  const changeRequestParams = usePageStore((state) => state.changeRequestParams);

  return (
    <div className="px-[15px] pb-[15px]">
      { !!props.path.length &&
        <div className="mb-2">
          <h4 className="mb-2 text-sm">{lang.pathVariablesTitle()}</h4>
          <Form.KeyValueEditor items={props.path} onChange={curry(changeRequestParams)('path')} />
        </div>
      }
      <div>
        <h4 className="mb-2 text-sm">{lang.queryParamsTitle()}</h4>
        <Form.KeyValueEditor items={props.query} onChange={curry(changeRequestParams)('query')}  />
      </div>
    </div>
  );
};
