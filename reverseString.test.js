import reverseString from "./reverseString";

test('The reverse of "hello" is "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});