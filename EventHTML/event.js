window.onload = init
function init() {
    var image = document.getElementsByTagName('img')
    for (i=0; i<image.length; i++) {
        image[i].onclick = showAnswer
    }
}
function showAnswer (eventObj) {
    var image = eventObj.target
    var name = image.id
    name = 'images/'+name + '.jpg'
    image.src = name
}