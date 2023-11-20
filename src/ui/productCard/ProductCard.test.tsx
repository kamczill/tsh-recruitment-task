import { render, screen } from 'tests';

import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  test('renders', () => {
    render(
      <ProductCard
        active={true}
        description="description"
        id="23141"
        image="https://img"
        name="name"
        promo={true}
        rating={4}
      />,
    );

    const element = screen.getByText('ProductCard');

    expect(element).toBeInTheDocument();
  });
});
