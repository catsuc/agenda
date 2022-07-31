import { vi } from 'vitest';
import { render } from '@testing-library/react';

import { Modal } from '../modal';

describe('<Modal />', () => {
  it('should not appear on screen when rendered', () => {
    const handleClose = vi.fn();

    const { getByText } = render(
      <Modal isOpen={false} onClose={handleClose}>
        <div>Hello World</div>
      </Modal>
    );

    expect(() => getByText(/hello world/i)).toThrow(/Unable to find an element/);
    expect(handleClose).not.toBeCalled();
  });

  it.todo('should render children when open');

  it.todo('should render with title');

  it.todo('should render with description');

  it.todo('should open when isOpen prop is true');

  it.todo('should close when isOpen prop is false');

  it.todo('should close when overlay is clicked');
});
