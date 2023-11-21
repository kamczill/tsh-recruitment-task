import { render, screen } from 'tests';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  test('renders', () => {
    render(<Pagination />);

    const element = screen.getByText('Pagination');

    expect(element).toBeInTheDocument();
  });
});
