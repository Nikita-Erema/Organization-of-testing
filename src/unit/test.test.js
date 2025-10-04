const { lun, clearCardNumber } = require("../main/algoritmLuna");
const { cardNumber } = require("../main/checkCardNumber");
test('test algoritm Luna', () => {
    const check = lun('5062 8212 3456 7892');
    expect(check).toBe(true);
})

test('test function cardNumber', () => {
    const check = cardNumber('5062 8212 3456 7892')
    expect(check).toBe('mastercard');
})