export function lun(number) {
    if (!number) return false;
    const array = clearCardNumber(number);
    let sum = 0;
    let shouldDouble = false;
    for (let i = array.length - 1; i >= 0; i--) {
        let digit = parseInt(array[i]);
        
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        
        sum += digit;
        shouldDouble = !shouldDouble; 
    }
    
    return sum % 10 === 0;
}
console.log(lun('371449635398431'))
export function clearCardNumber(number) {
    let array = number.split('');
    array = array.filter((element) => element !== ' ' )
    return array
}
