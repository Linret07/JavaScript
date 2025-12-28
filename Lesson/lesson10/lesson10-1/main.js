let target = document.getElementById('target');
target.onclick = function (ev){
    console.log("clicked");
    console.log(ev);
};
target.onmouseover = function (ev){
    console.log(ev.clientX, ev.clientY);
    let r = ev.clientX;
    let g = ev.clientX;
    let b = ev.clientY;
    this.style.background =`rgb(${r},${g}, ${b})`;
};
