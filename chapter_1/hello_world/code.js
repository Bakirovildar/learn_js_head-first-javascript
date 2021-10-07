var randomLoc = Math.floor(Math.random() * 5)
var location1 = randomLoc
var location2 = location1 + 1
var location3 = location2 + 1
var isHit1 = false
var isHit2 = false
var isHit3 = false
var guess
var guesses = 0
var hits = 0
var isSunk = false
while (isSunk === false) {
    guess = prompt('Напишите от 0 до 6')
    if (guess < 0 || guess > 6) {
        alert('Некорректные данные')
    } else {
        guesses = guesses + 1
        if (guess === location1 && !isHit1
            || guess === location2 && !isHit2
            || guess === location3 && !isHit3) {
            alert('Попал в цель')
            isHit1 = guess === location1
            isHit2 = guess === location2
            isHit3 = guess === location3
            hits = hits + 1
        } else {
            alert('Не попал')
        }
        if (hits === 3) {
            isSunk = true
            alert('Вы выиграли')
        }
    }

}