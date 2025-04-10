import { Tabs } from '../../components/Tabs/Tabs';
import { RequestMain } from '../../components/RequestMain/RequestMain';
import { RequestSettings } from '../../components/RequestSettings/RequestSettings';
import { Response } from '../../components/Response/Response';

import { RequestLayout } from '../RequestLayout/RequestLayout';

export const TabsLayout: React.FC = () => {
  const breadcrumb = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
  ];

  const req = {
    method: 'get',
    url: 'https://applications.lightstage.btbisrael.co.il/ops/bank/transactions?status=COMPLIANCE&offset=0&limit=100',
    headers: [],
    params: {
      path: [],
      query: [],
    },
  };

  return (
    <div className="flex flex-col items-stretch h-full">
      <Tabs />
      <RequestLayout
        requestMain={<RequestMain breadcrumb={breadcrumb} {...req} />}
        requestSettings={<RequestSettings {...req} />}
        response={<Response />}
      />
    </div>
  );
};
