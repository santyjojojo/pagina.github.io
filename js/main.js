function suma()
{
    var A = 0;
    var B = 0;
    var suma = 0;

    A =parseInt(prompt("Ingrese el primer valor"));
    B =parseInt(prompt("Ingrese el segundo valor"));

    suma = A + B
    
    alert("El resultado de la suma es " + suma);

}

function opBasicas()
{
    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var mult = 0;
    var div = 0;

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));

    suma = A + B;
    resta = A - B;
    mult = A * B;
    div = A / B;

    alert("El resultado de la suma es " + suma);
    alert("El resultado de la resta es " + resta);
    alert("El resultado de la multiplicacion es " + mult);
    alert("El resultado de la division es " + div);
}

function comparacion1()
{
    var A = 0;
    var B = 0;

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Introduzca el segundo valor"));

    if(A == B)
    {
        alert ("Los numeros ingresados son iguales");
    }
    else if(A < B)
    {
        alert (B + " es mayor que " + A);
    }
    else
    {
        alert (A + " es mayor que " + B);
    }
}

function comparacion2()
{
    var A = 0;
    var B = 0;
    var C = 0;

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));
    C = parseInt(prompt("Ingrese el tercer valor"));

    if((A == B) && (B == C))
    {
        alert("Los numeros ingresados son iguales");
    }
    else if((A < B) && (B < C))
    {
        alert("El numero menor es: " + A);
    }
    else if((B < A) && (B < C))
    {
        alert("El numero menor es: " + B);
    }
    else if((C < A) && (C < B))
    {
        alert("El numero menor es: " + C);
    }
    else{
        alert("No se pudo establecer el numero menor");
    }
}

function par() 
{
    var A = 0;

    A = parseInt(prompt("Ingrese un valor:"));

    if(A % 2 === 0) 
    {
        alert("El número ingresado es par");

    } 
    else 
    {
        alert("El número es impar");
    }
    
}

function cuadrado()
{
    var numero;
    var cuadrado;

    numero = parseInt(prompt("Ingrese un número para calcular su cuadrado:"));

    cuadrado = numero * numero;
    
    alert("El cuadrado del número es: " + cuadrado);
}
 
function triangulo()
{
    var base;
    var altura;
    var area;

    base = parseInt(prompt("Ingrese la base del triangulo:"));
    altura = parseInt(prompt("Ingrese la altura del triangulo:"));

    area = (base * altura) / 2;

    alert("El area del triangulo es: " + area + " cm2");    
}

function conversion()
{
    var centimetros;
    var operacion;

    centimetros = prompt("Introduce un valor en centímetros:");
    
    metros = centimetros / 100;

    alert("El resultado de la conversion es = " + operacion);
}

function nacer()
{
    var a;
    var actual;
    var resu;
  
    actual = parseInt(prompt("Ingrese el año actual ="));
    a = parseInt(prompt("Ingrese su edad ="));

    resu = actual - a;

    alert ("El año de su nacimiento es " + resu);
}

function invertir()
{
    var capital;
    var operacion;
    var total;
    var años;

    capital = parseInt(prompt("Ingrese el capital que desea invertir = "));
    años = parseInt(prompt("Ingrese los años invertidos ="));

    operacion = ((capital * 0.017) * 12) * años;
    total = capital + operacion;

    alert("usted invirtio = " + capital);

    if(años == 1)
    {
        alert("El pago que le hace el banco alrededor de " + años + " año, le hace el pago de " + operacion);
        alert("El total de su inversion es de " + total);
    }
    else
    {
        alert("El pago que le hace el banco de " + años + " años, le hace el pago de " + operacion);
        alert("El total de su inversion es de " + total);
    }
}

function colegio()
{
    var cal1;
    var cal2;
    var cal3;
    var cal4;
    var cal5;
    var cal6;
    var cal7;
    var mat;
    var nombre;
    var prom;
    var estado;

    nombre = prompt("Ingrese el nombre completo del estudiante =");
    mat = prompt ("Ingrese el nombre de la materia =");
    alert ("Ingrese las calificaciones (1-10) =");
    cal1 = parseFloat(prompt ());
    cal2 = parseFloat(prompt ());
    cal3 = parseFloat(prompt ());
    cal4 = parseFloat(prompt ());
    cal5 = parseFloat(prompt ());
    cal6 = parseFloat(prompt ());
    cal7 = parseFloat(prompt ());

    prom = (cal1 + cal2 + cal3 + cal4 + cal5 + cal6 + cal7) / 7;

    if(prom > 6)
    {
        estado = "aprobado";
    }
    else
    {
        estado = "desaprobado";
    }
    
    alert ("El estudiante " + nombre + " ha " + estado + " la materia " + mat + " con un promedio de " + prom)
}

function mercado ()
{
    var kg;
    var precio;
    var producto;
    var descuento;
    var operacion;

    producto = prompt("Ingrese el nombre del producto =");
    precio = parseInt(prompt("Ingrese el precio del producto por kilogramo ="));
    kg = parseFloat(prompt("Ingrese cuanto pesa el producto (Kg) ="));

    if (kg <= 2)
    {
        descuento = 0;
    }
    else if ((kg >2) && (kg <=5 ))
    {
        descuento = 10;
    }
    else if ((kg > 5)&&(kg <= 10))
    {
        descuento = 15;
    }
    else if (kg >10)
    {
        descuento = 20;
    }

    operacion = (precio - ((precio * descuento) / 100)) * kg;

    alert ("El descuento del producto es de " + descuento);
    alert ("El total es de = " + operacion);
}

function salario()
{
    var nombre;
    var horas;
    var extras;
    var operacion;

    nombre = prompt("Ingrese su nombre completo =");
    horas = parseFloat(prompt("Ingrese las horas trabajadas ="));

    if (horas <= 40)
    {
        extras = 0;
        operacion = (horas * 10000) + extras;
    }
    else 
    {
        extras = horas - 40;
        operacion = 400000 + (extras * 20000)
    }

    alert ("Señor/a " + nombre + " su salario semanal es de " + operacion + ", con " + extras + " horas extras")
}
