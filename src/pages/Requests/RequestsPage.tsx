import { MainLayout } from './layouts/MainLayout/MainLayout';
import { RequestLayout } from './layouts/RequestLayout/RequestLayout';

import { RequestMain } from './components/RequestMain/RequestMain';
import { RequestSettings } from './components/RequestSettings/RequestSettings';
import { Response } from './components/Response/Response';

interface RequestsPageProps {}

export const RequestsPage: React.FC<RequestsPageProps> = () => {
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

  const requestLayout = (
    <RequestLayout
      requestMain={<RequestMain breadcrumb={breadcrumb} {...req} />}
      requestSettings={<RequestSettings {...req} />}
      response={<Response />}
    />
  );

  return <MainLayout requestLayout={requestLayout} />;
};
