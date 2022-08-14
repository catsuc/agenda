import { vi } from 'vitest';

import {
  getDateFormatted,
  getStartTimeFormatted,
  getTimeDurationFormatted,
} from '../date-utils';

describe('date-utils', () => {
  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(new Date(2022, 0, 15, 12));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  describe('getDateFormatted', () => {
    it("should return an formatted date string like 'dd de MM de yyyy' when short is undefined", () => {
      {
        const output = getDateFormatted(new Date());

        expect(output).toBe('15 de janeiro de 2022');
      }
      {
        const output = getDateFormatted(new Date(2020, 5, 1, 12));

        expect(output).toBe('1 de junho de 2020');
      }
    });

    it("should return an formatted date string like 'dd/mm/yyyy' when short is true", () => {
      {
        const output = getDateFormatted(new Date(), true);

        expect(output).toBe('15/01/2022');
      }
      {
        const output = getDateFormatted(new Date(2020, 5, 1, 12), true);

        expect(output).toBe('01/06/2020');
      }
    });
  });

  describe('getStartTimeFormatted', () => {
    /** @todo create test cases */
  });

  describe('getTimeDurationFormatted', () => {
    /** @todo create test cases */
  });
});
