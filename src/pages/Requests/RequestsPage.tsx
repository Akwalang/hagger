import { MainLayout } from './layouts/MainLayout/MainLayout';
import { TabsLayout } from './layouts/TabsLayout/TabsLayout';

import { Collection } from './components/Collection/Collection';

interface RequestsPageProps {}

export const RequestsPage: React.FC<RequestsPageProps> = () => {
  const collection = <Collection />;
  const tabsLayout = <TabsLayout />;

  return <MainLayout collection={collection} workingArea={tabsLayout} />;
};
