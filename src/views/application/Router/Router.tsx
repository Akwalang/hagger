import { DemoPage, RequestsPage } from '@/pages';

import { MainLayout } from "@/views/layouts/MainLayout/MainLayout";

interface AppRouterProps {}

export const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <MainLayout>
      <RequestsPage />
    </MainLayout>
  );
};
