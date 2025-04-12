import { AppRouter } from '@/views/application/Router/Router';
import { Theme } from '@/views/application/Theme/Theme';

import './App.css';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <>
      <Theme />
      <AppRouter />
    </>
  );
};
