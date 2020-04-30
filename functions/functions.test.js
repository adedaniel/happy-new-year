const functions = require("./functions")

test('should 2 + 2 give 4, ', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('should 2 + 2 NOT give 5, ', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})
test('should be null, ', () => {
    expect(functions.isNull()).toBeNull();
})
test('should be falsy, ', () => {
    expect(functions.checkValue(undefined)).not.toBeNull();
})
