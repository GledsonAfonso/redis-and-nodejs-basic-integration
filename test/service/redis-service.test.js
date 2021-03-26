const { setKeyValue, getValue, getValueAsObject } = require('../../src/service/redis-service');

describe('object cases', () => {
  const testKey = 'test';
  const testObject = {
    a: 4,
    b: 'hi'
  };

  test('should be able to set a value', () => {
    expect(() => setKeyValue(testKey, testObject))
      .not
      .toThrow();
  });

  test('should be able to get a object value', async () => {
    const result = await getValueAsObject(testKey, true);
    expect(result).toEqual(testObject);
  });
});

describe('non-object values', () => {
  test('should be able to get a integer value', async () => {
    const key = 'integer_test';
    const value = 1;

    await setKeyValue(key, value);
    
    const result = await getValue(key, true); // for some reason, redis will always try to return a string, so we need to cast even numbers in this occasion
    expect(result).toBe(value);
  });
  
  test('should be able to get a string value', async () => {
    const key = 'string_test';
    const value = '2';

    await setKeyValue(key, value);
    
    const result = await getValue(key);
    expect(result).toBe(value);
  });
});