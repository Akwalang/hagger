import { Form, KeyValueItem } from '@/views/components';

import { useWorkspaceStore } from '@/global/stores/workspace';
import { useLang } from '@/global/hooks/useLang';

interface ParamsProp {
  path: KeyValueItem[];
  query: KeyValueItem[];
}

export const Params: React.FC<ParamsProp> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs.params);

  const changeRequestPathParams = useWorkspaceStore((state) => state.changeRequestPathParams);
  const changeRequestQueryParams = useWorkspaceStore((state) => state.changeRequestQueryParams);

  return (
    <div className="flex flex-col px-[15px] pb-[15px] gap-[8px]">
      { !!props.path.length &&
        <div>
          <h4 className="mb-2 text-sm select-none">{lang.pathVariablesTitle()}</h4>
          <Form.KeyValueEditor items={props.path} onChange={changeRequestPathParams} />
        </div>
      }
      <div>
        <h4 className="mb-2 text-sm select-none">{lang.queryParamsTitle()}</h4>
        <Form.KeyValueEditor items={props.query} onChange={changeRequestQueryParams}  />
      </div>
    </div>
  );
};
