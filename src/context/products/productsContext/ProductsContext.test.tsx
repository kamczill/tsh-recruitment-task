import { render, screen } from 'tests';

import { ProductsContext } from './ProductsContext';

describe('ProductsContext', () => {
  test('is undefined by default', () => {
    render(
      <ProductsContext.Consumer>{(context) => <div title="CONTEXT">{typeof context}</div>}</ProductsContext.Consumer>,
      { wrapper: ({ children }) => <>{children}</> },
    );

    expect(screen.getByTitle(/CONTEXT/)).toHaveTextContent('undefined');
  });
});
