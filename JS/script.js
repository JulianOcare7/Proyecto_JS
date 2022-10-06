//#region 
var nombre = "julian";
let apellido = 'ocare';
const pais = `Argentina`;
console.log(nombre,apellido,pais);
//#endregion

//#region 
var num1 = 4;
var num2 = 2;
//#endregion


//#region
function suma(num1, num2) {
    let s = num1 + num2;
    return s;
}
console.log(suma(num1, num2));
//#endregion

//#region
function resta(num1, num2) {
    let r = num1 - num2;
    return r;
}
console.log(resta(num1, num2));
//#endregion

//#region
function division(num1, num2) {
    let d = num1 / num2;
    return d;
}
console.log(division(num1, num2));
//#endregion

//#region
function multiplicacion(num1, num2) {
    let m = num1 * num2;
    return m;
}
console.log(multiplicacion(num1, num2));
//#endregion

const posts = [{
    id : 1, 
    title: 'Instagram',
} , {
    id: 2,
    title: 'Facebook',
} , {
    id: 3,
    title: 'Whatsapp'
}]

posts.find(post => post.title == 'Instagram');

