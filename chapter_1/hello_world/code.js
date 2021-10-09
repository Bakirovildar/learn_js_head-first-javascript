function generate() {
    var slova1 = ['Привет','Здравствуйте', 'Добрый день']
    var slova2 = ['Как дела?','Как поживаете?', 'Как оно?']
    var slova3 = ['Меня зовут Димон','Меня зовут Костян', 'Меня зовут Гена']

    var gener1 = Math.floor(Math.random()* slova1.length)
    var gener2 = Math.floor(Math.random()* slova2.length)
    var gener3 = Math.floor(Math.random()* slova3.length)
    alert(slova1[gener1]+' '+slova2[gener2]+ ' '+slova3[gener3])
}
generate()