import { MainLayout } from './layouts/MainLayout/MainLayout';
import { TabsLayout } from './layouts/TabsLayout/TabsLayout';

import { Groups } from './components/Groups/Groups';
import { Collection } from './components/Collection/Collection';

interface RequestsPageProps {}

export const RequestsPage: React.FC<RequestsPageProps> = () => {
  const groups = <Groups />;
  const collection = <Collection />;
  const tabsLayout = <TabsLayout />;

  return <MainLayout groups={groups} collection={collection} workingArea={tabsLayout} />;
};
