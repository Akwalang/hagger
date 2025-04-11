import { Breadcrumb, Form } from '@/views/components';

import { useLang, useInput } from '@/global/hooks';
import { HttpMethod } from '@/global/enums/http-method.enum';

import { type RequestPage } from '../../stores/page/types';
import { usePageStore } from '../../stores/page';

interface RequestMainProps {
  page: RequestPage;
}

const methods = Object.values(HttpMethod).map((value) => (
  { name: value.toUpperCase(), value }
));

export const RequestMain: React.FC<RequestMainProps> = (props) => {
  const { request } = props.page.data;

  const lang = useLang((store) => store.pages.requests.requestMain);

  const changeRequestMethod = usePageStore((state) => state.changeRequestMethod);
  const changeRequestUrl = usePageStore((state) => state.changeRequestUrl);

  const onInputChange = useInput(changeRequestUrl);

  const breadcrumb = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
  ];

  return (
    <div className="px-[15px]">
      <div className="flex flex-col py-[10px]">
        <Breadcrumb items={breadcrumb} />
      </div>

      <div className="flex gap-2">
        <Form.Select className="min-w-[110px] max-w-[110px] text-center" value={request.method} items={methods} onChange={changeRequestMethod}  />
        <Form.Input className="grow" value={request.url} onChange={onInputChange} placeholder={lang.urlPlaceholder()} />
        <Form.Button type="submit">{lang.sendButton()}</Form.Button>
      </div>
    </div>
  );
};
