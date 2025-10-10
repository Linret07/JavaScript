let color=prompt('enter color')
let isRoadClear=confirm("is road clear");
if(color==='green'&&isRoadClear){
    console.log("go");
}else if (color==='yellow'){
    console.log("wait");
}else  if (color==='red'){
    console.log("stop");
}else {
    console.log("?????");
}
