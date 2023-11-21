import { render, screen } from 'tests';

import { Modal } from './Modal';

describe('Modal', () => {
  test('renders', () => {
    render(<Modal />);

    const element = screen.getByText('Modal');

    expect(element).toBeInTheDocument();
  });
});
