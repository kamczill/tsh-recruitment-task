import { BrowserRouter as Router } from 'react-router-dom';

import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { ApiClientContextController } from '../context/apiClient/apiClientContextController/ApiClientContextController';
import { ProductsContextController } from 'context/products/productsContextController/ProductsContextController';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <LocaleContextController>
    <ApiClientContextController>
      <AuthContextController>
        <ProductsContextController>
          <Router>{children}</Router>
        </ProductsContextController>
      </AuthContextController>
    </ApiClientContextController>
  </LocaleContextController>
);
