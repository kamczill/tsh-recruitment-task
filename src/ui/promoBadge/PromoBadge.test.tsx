import { render, screen } from 'tests';

import { PromoBadge } from './PromoBadge';

describe('PromoBadge', () => {
  test('renders', () => {
    render(<PromoBadge />);

    const element = screen.getByText('PromoBadge');

    expect(element).toBeInTheDocument();
  });
});
