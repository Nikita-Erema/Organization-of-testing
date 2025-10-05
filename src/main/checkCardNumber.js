import { clearCardNumber } from "./algoritmLuna";
export function cardNumber(cardNumber) {
    let card = clearCardNumber(cardNumber)
    const firstTwo = card.slice(0, 2).join('')
    const firstFour = Number(card.slice(0, 4).join(''))
    const firstThree = Number(card.slice(0, 3).join(''));
    if (card[0] == '5') {
        console.log('mastercard')
        return 'mastercard'
    } else if (card[0] == '4') {
        console.log('visa')
        return 'visa'
    } else if (firstTwo == '62' || firstTwo == '81') {
        console.log('unionpay')
        return 'unionpay'
    } else if (firstTwo == '22') {
        console.log('mir')
        return 'mir'
    } else if (firstTwo == '37' || firstTwo == '34') {
        console.log('amex')
        return 'amex'
    } else if (['30', '36', '38', '39'].includes(firstTwo)) {
        console.log('diners')
        return 'diners'
    } else if (firstFour == 6011 || firstTwo == '65' || (firstFour <= 6229 && firstFour >= 6221 )|| (firstThree >= 644 && firstThree <= 649 )) {
        console.log('discover')
        return 'discover'
    } else if (firstFour >= 3528 && firstFour <= 3589) {
        console.log('jcb')
        return 'jcb'
    } else {
        console.error("Error not find this card");
    }
}