import { vi } from 'vitest';
import { render } from '@testing-library/react';

import * as dateUtils from '../../utils/date-utils';
import { MainHeader } from '../main-header';

describe('<MainHeader />', () => {
  beforeAll(() => {
    const intersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    }));

    window.IntersectionObserver = intersectionObserver;
  });

  beforeEach(() => {
    vi.spyOn(dateUtils, 'getDateFormatted');
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should called "getDateFormatted" two times when renders', () => {
    render(<MainHeader />);

    expect(dateUtils.getDateFormatted).toBeCalledTimes(2);
  });

  it('should have three buttons', () => {
    const { getAllByRole } = render(<MainHeader />);

    expect(getAllByRole('button').length).toBe(3);
  });

  it('should have a button with text "Adicionar Evento"', () => {
    const { getByTestId } = render(<MainHeader />);

    const element = getByTestId('add-event-button');

    expect(element).toBeInTheDocument();
    expect(element.tagName).toMatch(/button/i);
  });

  it('should have previous and next date button', () => {
    const { getByTestId } = render(<MainHeader />);

    expect(getByTestId('previous-date-button')).toBeInTheDocument();
    expect(getByTestId('next-date-button')).toBeInTheDocument();
  });

  it.todo('should open a modal when "add-event-button" is clicked');
});
