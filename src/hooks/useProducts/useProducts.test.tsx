import { renderHook } from 'tests';
import { ProductsContextController } from 'context/products/productsContextController/ProductsContextController';

import { useProducts } from './useProducts';

describe('useProducts', () => {
  test('throws error when context is unavailable', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});

    const renderFn = () => renderHook(() => useProducts());

    expect(renderFn).toThrow('ProductsContext must be within ProductsProvider');
  });

  test('returns state when context is available', () => {
    const { result } = renderHook(() => useProducts(), {
      wrapper: ({ children }) => (
        <ProductsContextController>
          <>{children}</>
        </ProductsContextController>
      ),
    });

    expect(result.current).toStrictEqual({});
  });
});
