import { Tabs } from '../../components/Tabs/Tabs';
import { RequestMain } from '../../components/RequestMain/RequestMain';
import { RequestSettings } from '../../components/RequestSettings/RequestSettings';
import { Response } from '../../components/Response/Response';

import { RequestLayout } from '../RequestLayout/RequestLayout';

export const TabsLayout: React.FC = () => {

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
        requestSettings={<RequestSettings {...req} />}
        response={<Response />}
      />
    </div>
  );
};
