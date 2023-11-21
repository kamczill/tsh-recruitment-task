import { renderHook } from '@testing-library/react';

import { useProduct } from './useProduct';

describe('useProduct', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useProduct());

    expect(result.current).toBe('1');
  });
});
