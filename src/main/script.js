import { lun, clearCardNumber } from "./algoritmLuna"
import { cardNumber } from "./checkCardNumber"
let inputCard = document.getElementById('user-card')
let form = document.forms[0]
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (document.querySelector('.card_active')) {
        document.querySelector('.card_active').classList.remove('card_active')
    }
    if (lun(inputCard.value)) {
        let bank = cardNumber(inputCard.value)
        document.querySelector(`#${bank}`).classList.add('card_active')
        console.log('Validate')
    } else {
        console.error("ERROR");
    }
})