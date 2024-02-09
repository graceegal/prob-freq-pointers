describe("isSubsequence", function () {
  it("should return true if first string is a substring of second", function () {
    expect(isSubsequence("hello", "hello world")).toBe(true);
    expect(isSubsequence("sing", "sting")).toBe(true);
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  it("should return false if first string is not a substring of second", function () {
    expect(isSubsequence("abc", "acb")).toBe(false);
    expect(isSubsequence("notasubstring", "banana")).toBe(false);
    expect(isSubsequence("almost", "almossssss")).toBe(false);
  });
});
