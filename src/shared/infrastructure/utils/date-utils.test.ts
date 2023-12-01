import { describe, it, expect } from 'vitest';
import { relativeDate } from './date-utils';

describe('date-utils', () => {
  it('should return the correct relative test', () => {
    expect(relativeDate(new Date())).toBeTypeOf('string');
  });
});
