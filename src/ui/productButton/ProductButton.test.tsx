import { render, screen } from 'tests';

import { ProductButton } from './ProductButton';

describe('ProductButton', () => {
  test('renders', () => {
    render(<ProductButton active={true} />);

    const element = screen.getByText('ProductButton');

    expect(element).toBeInTheDocument();
  });
});
