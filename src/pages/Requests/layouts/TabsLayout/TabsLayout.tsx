import { Separator } from '@/views/ui/separator';

import { Tabs } from '../../components/Tabs/Tabs';
import { RequestMain } from '../../components/RequestMain/RequestMain';
import { RequestSettings } from '../../components/RequestSettings/RequestSettings';
import { Response } from '../../components/Response/Response';

import { RequestLayout } from '../RequestLayout/RequestLayout';

export const TabsLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-stretch h-full">
      <Tabs />
      <Separator className="my-0" />
      <RequestLayout
        response={<Response />}
      />
    </div>
  );
};
