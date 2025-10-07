import { lun} from "./algoritmLuna"
import { cardNumber } from "./checkCardNumber"
let inputCard = document.getElementById('user-card')
let form = document.forms[0]
let p = document.createElement('p')
document.body.append(p)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (document.querySelector('.card_active')) {
        document.querySelector('.card_active').classList.remove('card_active')
    }
    if (lun(inputCard.value)) {
        let bank = cardNumber(inputCard.value)
        document.querySelector(`#${bank}`).classList.add('card_active')
        p.textContent = bank
        console.log('Validate')
    } else {
        p.textContent = 'Не валидное значение'
        console.error("ERROR");
    }
})