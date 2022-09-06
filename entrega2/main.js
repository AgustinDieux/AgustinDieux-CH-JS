const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

let respuesta, num1, num2, operacion

function mostrarValores (operacion, num1, num2){
    switch (operacion){
        case "+":
             console.log("La suma es: " + sumar(num1, num2))
        break;
        case "-":
            console.log ("La resta es: " + restar(num1, num2))
        break;
        case "":
            console.log ("La mutiplicacion es: " + multiplicar(num1, num2))
        break;
        case "/":
            console.log ("La division es: " + dividir(num1,num2))
        break;
        default: 
        console.log ("operacion no valida")
    }
}

do{
    num1 = parseFloat(prompt("ingrese numero"))
    num2 = parseFloat(prompt("ingrese numero"))
    operacion = prompt("ingrese operacion(+,-,,/)")

    mostrarValores(operacion, num1, num2)

}while (respuesta !="no")

