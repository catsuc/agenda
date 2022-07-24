import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import { Home } from './pages/home';
import { setupStore } from './store';

export const App: React.FC = () => {
  return (
    <Provider store={setupStore()}>
      <Toaster />
      <Home />
    </Provider>
  );
};
