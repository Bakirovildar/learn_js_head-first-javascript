window.onload = init
function init() {
    var image = document.getElementById('zero')
    image.onclick = activeImage
}
function activeImage() {
    var image = document.getElementById('zero')
    image.src = 'images/two.jpg'
}
