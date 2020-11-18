document.addEventListener("DOMContentLoaded", Loaded);
function generateCard(num) {
    const container = document.querySelector('#container')
    let number = 500/num+'px'
    container.innerHTML += '<div width='+number+' height='+number+' class="box">Box</div>'
}
function Loaded() {
    generateCard(10)
}