import Cartodb from '../src/index.js';

describe('1+1', () => {
  let sum = 1+1;

  it('should be 2', () => {
    expect(2).toBe(2);
  });
});

describe('Cartodb module should load', () => {
  it('Shoukd have a typer', () => {
    expect(Cartodb.__type__).toBe('cartodb');
  })
});
