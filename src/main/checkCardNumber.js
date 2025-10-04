import { clearCardNumber } from "./algoritmLuna";
export function cardNumber(cardNumber) {
    let card = clearCardNumber(cardNumber)
    if (card[0] == '5') {
        console.log('mastercard')
        return 'mastercard'
    } else if (card == '4') {
        console.log('visa')
        return 'visa'
    } else if (card == '6') {
        console.log('unionpay')
        return 'unionpay'
    } else if (card[0] + card[1] == '22') {
        console.log('mir')
        return 'mir'
    } else {
        console.error("Error not find this card");
    }
}