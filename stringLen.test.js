import stringLength from "./stringLen";

test('should check the length of "hello" and return 5', () => {
    expect(stringLength('hello world')).toBe(11);
  });
test('Should throw an error when we check "helloworld"', () => {
    expect(() => stringLength('helloworld')).toThrow();
  });