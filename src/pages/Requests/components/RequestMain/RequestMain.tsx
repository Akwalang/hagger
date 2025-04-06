import { Breadcrumb, Form } from '@/views/components';

import { type KeyValueItem } from '@/views/components/Form/Form';

interface RequestMainProps {
  breadcrumb: { name: string }[];
  method: string;
  url: string;
  headers: KeyValueItem[];
  params: {
    path: KeyValueItem[];
    query: KeyValueItem[];
  };
}

export const RequestMain: React.FC<RequestMainProps> = (props) => {
  const items = [
    { name: 'GET', value: 'get' },
    { name: 'POST', value: 'post' },
    { name: 'PATCH', value: 'patch' },
    { name: 'PUT', value: 'put' },
    { name: 'DELETE', value: 'delete' },
    { name: 'HEAD', value: 'head' },
    { name: 'OPTIONS', value: 'options' },
  ];

  return (
    <div className="px-[15px]">
      <div className="flex flex-col py-[10px]">
        <Breadcrumb items={props.breadcrumb} />
      </div>

      <div className="flex gap-2">
        <Form.Select className="w-[120px] text-center" value={items[0].value} items={items} />
        <Form.Input className="grow" value={props.url} />
        <Form.Button type="submit">Send</Form.Button>
      </div>
    </div>
  );
};
