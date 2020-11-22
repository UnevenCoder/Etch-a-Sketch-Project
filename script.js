document.addEventListener("DOMContentLoaded", Loaded);
function generateCard() {
    const container = document.querySelector('#container')
    for(let i = 0 ; i< 36 ; i++ )
    {
        container.innerHTML += '<div id='+i+'  onmouseover="changeColor(this)" style=\'width:100px;height:100px\' class="box"></div>'   
    }
}

function GreyScale(x){
    let id = x.id
    if(document.getElementById(id).style.backgroundColor!= ''){
                if(document.getElementById(id).style.backgroundColor.split(',')[3]){
        let a = document.getElementById(id).style.backgroundColor.split(',')[3]
        let str=''
        for(let i = 0 ; i < a.length-1 ;i++){
    str+=a[i] 
        }
    let alpha = parseFloat(str)<0.98?parseFloat(str)+0.04:parseFloat(str)>=0.08?0.2:0.2
    document.getElementById(id).style.backgroundColor=`rgba(0,0,0,${alpha})`
      
                }
                else{
    document.getElementById(id).style.backgroundColor=`rgba(0,0,0,0.2)`
                }

}
else{
    document.getElementById(id).style.backgroundColor=`rgba(0,0,0,0.2)`
      
}
}
function Eraser(x){
    id=x.id
    document.getElementById(id).style.backgroundColor='white';
}
function Black(x){
    id=x.id
    document.getElementById(id).style.backgroundColor='black';
}
function RainBow(x){
    let id = x.id,color=1
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    if(document.getElementById(id).style.backgroundColor!= ''){
if(document.getElementById(id).style.backgroundColor.split(',')[3]){
    let a = document.getElementById(id).style.backgroundColor.split(',')[3]
    let str=''
    for(let i = 0 ; i < a.length-1 ;i++){
str+=a[i] 
    }
let alpha = parseFloat(str)<0.8?parseFloat(str)+0.2:parseFloat(str)>=0.08?0.2:0.2
document.getElementById(id).style.backgroundColor=`rgba(${r},${g},${b},${alpha})`
}
else{
    document.getElementById(id).style.backgroundColor=`rgba(`+r+`,`+g+`,`+b+`,0.2)`
}
}else{
    document.getElementById(id).style.backgroundColor=`rgba(${r},${g},${b},0.2)`
}
}

function Color(x) {
    let id = x.id;
    let color = document.getElementById('cp').value
    document.getElementById(id).style.backgroundColor = color;
}

function Loaded() {
    localStorage.setItem('state', 'Black');
    generateCard()
}
function changeColor(x){
    let state = localStorage.getItem('state')
    if (state == 'GreyScale') {
        GreyScale(x)
    }
    else if (state == 'Rainbow') {
        RainBow(x)
    }
    else if (state == 'Eraser') {
        Eraser(x)
    }
    else if (state == 'Black') {
        Black(x)
    }
    else if (state == 'Color') {
        Color(x)
    }
}

function changeState(state){
    localStorage.setItem('state', state);
}