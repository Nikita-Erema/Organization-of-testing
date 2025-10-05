export function lun(number) {
    if (number) {
        let multiplication = [];
        let elseArray = [];
        let array = clearCardNumber(number)
        for(let i = array.length;i <= 0;i--) {
            if (i % 2 == 0) {
                multiplication.push(array[i])
            } else {
                elseArray.push(array[i])
            }
        }
        multiplication = multiplication.map((element) => Number(element) * 2);  
        multiplication = multiplication.map((element) => element > 9 ? element - 9 : element)
        let sum = multiplication.reduce((acc, element) => acc + element, 0) + elseArray.reduce((acc, element) => acc + Number(element), 0);
        if (sum % 10 == 0) {
            return true
        } else {
            return false
        }
    }
}
console.log(lun('371449635398431'))
export function clearCardNumber(number) {
    let array = number.split('');
    array = array.filter((element) => element !== ' ' )
    return array
}
