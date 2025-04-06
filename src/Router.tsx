import { MainLayout } from "./views/layouts/MainLayout/MainLayout";
import { DemoPage, RequestsPage } from './pages';

interface AppRouterProps {}

export const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <MainLayout>
      <RequestsPage />
    </MainLayout>
  );
};
