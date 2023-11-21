import { render, screen } from 'tests';

import { NoSearchResults } from './NoSearchResults';

describe('NoSearchResults', () => {
  test('renders', () => {
    render(<NoSearchResults />);

    const element = screen.getByText('NoSearchResults');

    expect(element).toBeInTheDocument();
  });
});
