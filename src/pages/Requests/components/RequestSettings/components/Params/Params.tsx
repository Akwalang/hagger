import { Form, KeyValueItem } from '@/views/components';

import { useWorkspaceStore } from '@/global/stores/workspace';
import { useLang } from '@/global/hooks/useLang';
import { curry } from '@/utils/functions';
import { RequestParamsType } from '@/global/stores/workspace/slices/page-request/enums';

interface ParamsProp {
  path: KeyValueItem[];
  query: KeyValueItem[];
}

export const Params: React.FC<ParamsProp> = (props) => {
  const lang = useLang((store) => store.pages.requests.requestSettings.tabs.params);
  const changeRequestParams = useWorkspaceStore((state) => state.changeRequestParams);

  return (
    <div className="px-[15px] pb-[15px]">
      { !!props.path.length &&
        <div className="mb-2">
          <h4 className="mb-2 text-sm">{lang.pathVariablesTitle()}</h4>
          <Form.KeyValueEditor items={props.path} onChange={curry(changeRequestParams)(RequestParamsType.Path)} />
        </div>
      }
      <div>
        <h4 className="mb-2 text-sm">{lang.queryParamsTitle()}</h4>
        <Form.KeyValueEditor items={props.query} onChange={curry(changeRequestParams)(RequestParamsType.Query)}  />
      </div>
    </div>
  );
};
