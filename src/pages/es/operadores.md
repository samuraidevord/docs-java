---
title: Operadores en Java
description: "Descripción básica de los operadores en Java"
layout: ../../layouts/MainLayout.astro
---
En programación un operador representan un símbolo que permite realizar operaciones aritméticas, relacionar elementos o hacer preguntas donde se involucra más de una condición.

**Nota:** `System.out.println():` Pinta una variable en la consola.
### Operadores Aritméticos 
```java

INPUT: 

System.out.println("1 + 2 = " + (1 + 2)); 
System.out.println("2 - 1 = " + (2 - 1)); 
System.out.println("2 * 1 = " + (2 * 1)); 
System.out.println("1 / 2 = " + (1 / 2)); 
System.out.println("11%3 = " + (11 % 3)); // => 2
OUTPUT: 

3 
1
2
0 (0.5 truncado)
2

```
### Operadores de comparación

```java 

INPUT:

System.out.println("3 == 2 " + (3 == 2)); 
System.out.println("3 != 2 " + (3 != 2)); 
System.out.println("3 > 2 " + (3 > 2));
System.out.println("3 < 2 " + (3 < 2)); 
System.out.println("2 <= 2 " + (2 <= 2));
System.out.println("2 >= 2 " + (2 >= 2));

OUTPUT:

false 
true 
true 
false 
true 
true
```

### Asginación abreviadas 

```java 

// Asiganacione abreviadas

int x += 10; // x = x + 10;
int x -= 10; // x = x - 10;
int x *= 10; // x = x * 10;
int x /= 10; // x = x / 10;
int x %= 10; // x = x % 10;
boolean bool &= true; // bool = bool & true;
boolean bool |= true; // bool = bool | true;
boolean bool ^= true; // bool = bool ^ true;

// Incremnetos y decrementos

int y, x = 10;
y = x++; // y = 10. Primero se asigna el valor y luego se aumenta
y = ++x; // y = 11. Primero se aumenta y luego se asigna
y = x--; // y = 10. Primero se asigna el valor y luego se resta
y = --x; // y = 9. Primero se resta y luego se asigna
```

### Operadores lógicos

| Operador | Descripción | 
| -- | -- |
| == | Es igual |
| != |Es distitno | 
|<,<=, >, >= | Menor, menor o igual, mayor, mayor o igual|
| && | Operador and (y) |
||| | Operador or (o) |
|! | Operador not (no)|

### Cadenas 

```java 
String fooString = "!Mi String está aqui!";
String barString = "¿Imprimiendo en una nueva linea?\n¡Ningun problema!";
String bazString = "¿Quieres añadir un 'tab'?\t¡Ningun problema!";

Integer.parseInt("123"); // Retorna una versión entera de "123"
String.valueOf(123); // Retorna una versión string de 123
```

