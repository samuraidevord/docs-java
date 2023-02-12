---
title: Fjujo de Control
description: "Descripción básica del flujo de control en Java"
layout: ../../layouts/MainLayout.astro
---
La capacidad de ejecutar algún código dependiendo de si se cumple una condición `true` y ejecutar algún código 
repetidamente mientras se cumpla esa condición.

### If Expresiones

* `if/else:` Permite ramificar su código dependiendo de las condiciones.

```java 

int number = 3;

if (number < 5) {
     System.out.println("La condición es verdadera");
} else {
     System.out.println("La condición no es verdadera");
}

if (number != 0) {
     System.out.println("Number was there");
}
if (number % 4 == 0) {
    System.out.println("number is divisible by 4");
} else if number % 3 == 0 {
    System.out.println("number is divisible by 3");
} else if number % 2 == 0 {
    System.out.println("number is divisible by 2");
} else {
    System.out.println("number is not divisible by 4, 3, or 2");
}


```

### While 

* `while:` Permite repetir un determinado código un número determinado de veces atendiendo a una condición.

```java 
int number = 0;
while (number <= 10) {
    System.out.println("Iteración número:" + number);
    number++;
}

```
## do While 
* `do while:` La única diferencia con el anteriore es que siempre se ejecuta el código una vez aunque la condición no sea la correcta.

```java 
int number = 0;
do {
    System.out.println("Iteración número:" + number);
    number++;
} while (number <= 10);
```
## for

* `for`: Es un bucle que nos permite ejecutar un bloque de código un número de veces definido antes de que el bucle se ejecuta.
Sirve para recorrer listas.

```java 
int suma = 0;
for (int i = 1; i <= 5: i++){
    suma += i;
}
```
Una forma más simplificado de estos bucles `for` son los bulces `for-each`.
```java 
int Numbers[] ={1,2,3,4};
for(int number: Numbers) {
     System.out.println("Número = " + number );
}
```

## Switch

* `switch:` Funciona con tipos numéricos simples como byte, short, char e int. También funciona con tipos enumerados, la clase String y unas pocas especiales que envuelven tipos primitivos: Character.

```java 
int mes = 3;
switch (mes){
    case 1:
        System.out.println("Enero");
        break;
    case 2:
        System.out.println("Febrero");
        break;
    case 3:
        System.out.println("Marzo");
        break;
    default:
        break;
}
```