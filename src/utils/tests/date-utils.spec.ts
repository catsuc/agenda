import { vi } from 'vitest';

import { getDateFormatted, getStartTimeFormatted, getTimeDurationFormatted } from '../date-utils';

const ONE_MINUTE = 1000 * 60;
const ONE_HOUR = ONE_MINUTE * 60;

describe('date-utils', () => {
  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(new Date(2022, 0, 15, 12));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  describe('getDateFormatted', () => {
    it("should return a formatted date string like 'dd de MM de yyyy' when short is undefined", () => {
      {
        const output = getDateFormatted(new Date());

        expect(output).toBe('15 de janeiro de 2022');
      }
      {
        const output = getDateFormatted(new Date(2020, 5, 1, 12));

        expect(output).toBe('1 de junho de 2020');
      }
    });

    it("should return a formatted date string like 'dd/mm/yyyy' when short is true", () => {
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
    it("should return a formatted time string like 'hh:mm'", () => {
      {
        const output = getStartTimeFormatted(new Date());

        expect(output).toBe('12:00');
      }
      {
        const output = getStartTimeFormatted(new Date(2020, 5, 1, 17, 15));

        expect(output).toBe('17:15');
      }
    });
  });

  describe('getTimeDurationFormatted', () => {
    it('should return duration time in hours', () => {
      {
        const output = getTimeDurationFormatted(new Date(), new Date(Date.now() + ONE_HOUR));

        expect(output).toBe('1 hora');
      }
      {
        const output = getTimeDurationFormatted(new Date(), new Date(Date.now() + ONE_HOUR * 2));

        expect(output).toBe('2 horas');
      }
    });

    it('should return duration time in minutes', () => {
      {
        const output = getTimeDurationFormatted(new Date(), new Date(Date.now() + ONE_MINUTE));

        expect(output).toBe('1 minuto');
      }
      {
        const output = getTimeDurationFormatted(new Date(), new Date(Date.now() + ONE_MINUTE * 15));

        expect(output).toBe('15 minutos');
      }
    });

    it('should return duration time in hours and minutes', () => {
      {
        const output = getTimeDurationFormatted(
          new Date(),
          new Date(Date.now() + ONE_HOUR + ONE_MINUTE)
        );

        expect(output).toBe('1 hora e 1 minuto');
      }
      {
        const output = getTimeDurationFormatted(
          new Date(),
          new Date(Date.now() + ONE_HOUR + ONE_MINUTE * 54)
        );

        expect(output).toBe('1 hora e 54 minutos');
      }
      {
        const output = getTimeDurationFormatted(
          new Date(),
          new Date(Date.now() + ONE_HOUR * 4 + ONE_MINUTE)
        );

        expect(output).toBe('4 horas e 1 minuto');
      }
      {
        const output = getTimeDurationFormatted(
          new Date(),
          new Date(Date.now() + ONE_HOUR * 2 + ONE_MINUTE * 13)
        );

        expect(output).toBe('2 horas e 13 minutos');
      }
    });
  });
});
