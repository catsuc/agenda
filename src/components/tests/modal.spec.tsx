import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { render } from '@testing-library/react';

import { Modal } from '../modal';

describe('<Modal />', () => {
  beforeAll(() => {
    const intersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    }));

    window.IntersectionObserver = intersectionObserver;
  });

  it('should not appear on screen when rendered', () => {
    const handleClose = vi.fn();

    const { getByText } = render(
      <Modal isOpen={false} onClose={handleClose}>
        <div>Hello World</div>
        <input type="text" />
      </Modal>
    );

    expect(() => getByText(/hello world/i)).toThrow(/Unable to find an element/);
    expect(handleClose).not.toBeCalled();
  });

  it('should render children when open', () => {
    const handleClose = vi.fn();

    const { getByText } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Hello World</div>
        <input type="text" />
      </Modal>
    );

    expect(getByText(/hello world/i)).toBeInTheDocument();
    expect(handleClose).not.toBeCalled();
  });

  it('should render with title', () => {
    const handleClose = vi.fn();

    const { getByText } = render(
      <Modal isOpen={true} onClose={handleClose} title="Hello Test">
        <div>Hello World</div>
        <input type="text" />
      </Modal>
    );

    expect(getByText(/hello test/i)).toBeInTheDocument();
    expect(handleClose).not.toBeCalled();
  });

  it('should render with description', () => {
    const handleClose = vi.fn();

    const { getByText } = render(
      <Modal isOpen={true} onClose={handleClose} description="Hello Description">
        <div>Hello World</div>
        <input type="text" />
      </Modal>
    );

    expect(getByText(/hello description/i)).toBeInTheDocument();
    expect(handleClose).not.toBeCalled();
  });

  it('should close when overlay is clicked', async () => {
    const handleClose = vi.fn();

    const { getByText, getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Hello World</div>
        <input type="text" />
      </Modal>
    );

    expect(getByText(/hello world/i)).toBeInTheDocument();
    expect(getByTestId('modal-overlay')).toBeInTheDocument();
    expect(handleClose).not.toBeCalled();

    await userEvent.click(getByTestId('modal-overlay'));

    expect(getByText(/hello world/i)).toBeInTheDocument();
    expect(getByTestId('modal-overlay')).toBeInTheDocument();
    expect(handleClose).toBeCalledTimes(1);
  });
});
