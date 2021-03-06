import Cartodb from '../src/index.js';

describe('1+1', () => {
  let sum = 1+1;

  it('should be 2', () => {
    expect(2).toBe(2);
  });
});

describe('Cartodb module should load', () => {
  it('Shoukd have a type', () => {
    expect(Cartodb.__type__).toBe('cartodb');
  })
});

describe('Es2sql module should load', () => {
  it('Translate function should be a funciton', () => {
    expect(typeof Cartodb.Es2sql.translate).toBe('function'); // it's a function
  })
});

describe('Make URL', () => {
  it('Should make the right url', () => {
    let config = {
      user: 'starsinmypockets',
      table: 'public.congressional_districts'
    };
    const url = Cartodb._getUrl(config);
    expect(typeof url).toBe('string');
    expect(url).toBe('https://starsinmypockets.cartodb.com/api/v2/sql?q=');
  })
});

describe('Make query', () => {
  it('Shoud return a query string from obj', () => {
    let queryObj = {
      table: 'public.congressional_districts',
      size: 100,
      start: 3
    }
    let queryString = Cartodb.Es2sql.translate(queryObj);
    expect(typeof queryString).toBe('string');
  });
});

describe('Should fetch data', () => {
  let result;
  const config = {
    user: 'starsinmypockets',
    table: 'public.congressional_districts_2015'
  }

  beforeEach(done => {
    Cartodb.fetch(config)
      .then(data => {
        result = data;
        done();
      });
  });

  it('Should return valid data', () => {
    expect(typeof result).toBe('object');
  });
});
