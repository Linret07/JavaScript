// function writer(productTitle, price, description) {
//     document.write(`
// <div>
// <h2>${productTitle} ${price}</h2>
// <p>${description}</p>
// </div>
// `);
// }
// writer(`milk`, 32, 'some milk');

function printer(array){
    for(const item of array){
        console.log(item);
    }
}
printer([
    {name:"JavaScript", type:"javascript"},
    {name:"CSS", type:"css"},
    {name:"React", type:"react"},
    {name:"Node", type:"node"},
    {name:"ReactDOM", type:"react-dom"},
    {name:"Redux", type:"redux"},
    {name:"ReduxDOM", type:"reduxDOM"},
]);