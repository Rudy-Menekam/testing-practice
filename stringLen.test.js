import stringLength from "./stringLen";

test('should check the length of "hello" and return 5', () => {
    expect(stringLength('hello')).toBe(5);
  });
test('Should throw an error when we check "helloworld"', () => {
    expect(() => stringLength('hello/world')).toThrow();
  });