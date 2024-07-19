function getstarted(){
    window.location = 'getstarted.html'
}
function calc(){
    var month1 = document.getElementById('input1').value;
    var month2 = document.getElementById('input2').value; 
    let month1p = parseInt(month1);
    let month2p = parseFloat(month2);
    let multiply1 = month1p * month2p;
    let text = document.getElementById('pain');
    let btnn = document.getElementById('outsidebtn');
    text.innerHTML = 'Your proposed investment budget is ' + '<br>' + month1 + '$<br>' + 'your interest is ' + multiply1 + '$ <br/> &checkmark;'
    text.style.height = '40vh'
    btnn.style.height = '70vh'
    if ( multiply1 < 1 ){
        text.innerHTML = 'Your earnings dont appear because theres no deposit'
    }
    else if ( month1 == '' ){
        text.innerHTML = 'Your earnings dont appear because theres no deposit'
        text.style.fontStyle = 'italic'
    }
}
function closee(){
    let text = document.getElementById('pain');
    let btnn = document.getElementById('outsidebtn');
    var month1 = document.getElementById('input1');

    text.style.height = '0px'
    btnn.style.height ='0px'
    text.innerHTML = ''
    month1.value = ''
}
function side(){
    let sideb = document.querySelector('.straightnav');
    let btn = document.querySelector('.btnremove');
    sideb.style.display = 'flex'
    btn.style.width = 'calc(100% - 230px)'
}
function remove(){
    let sideb = document.querySelector('.straightnav');
    let btn = document.querySelector('.btnremove');
    sideb.style.display = 'none'
    btn.style.width = '0px'
}