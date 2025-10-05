const { lun, clearCardNumber } = require("../main/algoritmLuna");
const { cardNumber } = require("../main/checkCardNumber");
test('test algoritm Luna', () => {
    const check = lun('5062 8212 3456 7892');
    expect(check).toBe(true);
})

test('test function cardNumber mastercard', () => {
    const check = cardNumber('5062 8212 3456 7892')
    expect(check).toBe('mastercard');
})
test('test function cardNumber visa', () => {
    const check = cardNumber('4111111111111111')
    expect(check).toBe('visa');
})
test('test function cardNumber mir', () => {
    const check = cardNumber('2200770212727079')
    expect(check).toBe('mir');
})
test('test function cardNumber unionpay', () => {
    const check = cardNumber('6250941006528599')
    expect(check).toBe('unionpay');
})
test('test function cardNumber discover', () => {
    const check = cardNumber('6011111111111117')
    expect(check).toBe('discover');
})
test('test function cardNumber jcb', () => {
    const check = cardNumber('3530111333300000')
    expect(check).toBe('jcb');
})
test('test function cardNumber diners', () => {
    const check = cardNumber('3056930009020004')
    expect(check).toBe('diners');
})
test('test function cardNumber amex', () => {
    const check = cardNumber('378282246310005')
    expect(check).toBe('amex');
})