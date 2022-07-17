import { Toaster } from 'react-hot-toast';

import { Home } from './pages/home';

export const App: React.FC = () => {
  return (
    <>
      <Toaster />
      <Home />
    </>
  );
};
