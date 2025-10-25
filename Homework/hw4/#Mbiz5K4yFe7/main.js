// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
function cylinderSquare(height, radius) {
    const result =2*Math.PI*radius*height;
    console.log(result);
    return result;
}
cylinderSquare(20,20);