var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk==false) {
    guess=prompt('Готовься,целься, стреляй  (выберите цифру от 0 до 6):');
    if (guess<0 || guess>6) {
        alert('Вы ввели некорректные данные');
    }
    else {
        guesses = guesses+1;
        if (guess == location1 || guess==location2 || guess==location3) {
            hits = hits + 1;
            if (hits==3) {
                isSunk=true;
                alert('Корабль уничтожен');
            }
        }
    }
}
var stats='Вы сделали' + guesses + 'ходов, чтобы потопить корабль. Что означает Ваша точность стрельбы была'+(3/guesses);
alert(stats);


