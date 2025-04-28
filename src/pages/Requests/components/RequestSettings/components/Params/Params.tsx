import { Form, KeyValueItem } from '@/views/components';

import { useWorkspaceStore, RequestParamsType } from '@/global/stores/workspace';
import { useLang } from '@/global/hooks/useLang';

interface ParamsProp {
  path: KeyValueItem[];
  query: KeyValueItem[];
}

export const Params: React.FC<ParamsProp> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs.params);
  const changeRequestParams = useWorkspaceStore((state) => state.changeRequestParams);

  return (
    <div className="flex flex-col px-[15px] pb-[15px] gap-[8px]">
      { !!props.path.length &&
        <div>
          <h4 className="mb-2 text-sm">{lang.pathVariablesTitle()}</h4>
          <Form.KeyValueEditor items={props.path} onChange={(...args) => changeRequestParams(RequestParamsType.Path, ...args)} />
        </div>
      }
      <div>
        <h4 className="mb-2 text-sm">{lang.queryParamsTitle()}</h4>
        <Form.KeyValueEditor items={props.query} onChange={(...args) => changeRequestParams(RequestParamsType.Query, ...args)}  />
      </div>
    </div>
  );
};
