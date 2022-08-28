import { vi } from 'vitest';
import { render } from '@testing-library/react';

import { AsideEmptyState } from '../aside-empty-state';

describe('<AsideEmptyState />', () => {
  beforeAll(() => {
    const intersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    }));

    window.IntersectionObserver = intersectionObserver;
  });

  beforeEach(() => {
    vi.mock('../../assets/choose.svg', () => {
      return {
        default: 'choose image source',
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should have a <img /> with the correct source', () => {
    const { getByRole } = render(<AsideEmptyState />);

    expect(getByRole('img')).toHaveAttribute('src', 'choose image source');
  });

  it('should have a <h3 /> with the correct text', () => {
    const { getByRole } = render(<AsideEmptyState />);

    expect(
      getByRole('heading', { level: 3, name: /nenhum evento selecionado/i })
    ).toBeInTheDocument();
  });

  it('should have a <p /> with the correct text', () => {
    const { getByText } = render(<AsideEmptyState />);

    expect(
      getByText(/selecione algum evento para ficar por dentro dos detalhes./i)
    ).toBeInTheDocument();
  });
});
