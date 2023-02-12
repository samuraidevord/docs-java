---
title: Primitivos
description: "Descripción básica de los primtivos en Java"
layout: ../../../layouts/MainLayout.astro
---

### Byte 
Entero complemento a dos con signo de 8-bit (-128 <= byte <= 127)
```java
byte fooByte = 100;
```
### Short 
Entero complemento a dos con signo de 16-bit (-32768 <= short <= 32767)
```java
short fooShort = 10000;
```
### Integer 
Entero complemento a dos con signo de 32-bit (-2147483648 <= int <= 2147483647)
```java
int fooInt = 1;
```
### Long
Entero complemento a dos con signo de 64-bit (-9,223,372,036,854,775,808 <= long <= 9,223,372,036,854,775,807)
```java
long fooLong = 100000L;
```
`L` es usado para denotar que el valor de esta variable es del tipo Long; cualquier cosa sin ella es tratada por defecto cómo un tipo integer.
### Float 
Número de coma flotante IEEE 754 de precisión simple de 32-bit
```java
floata fooFloat = 234.5f;
```
`f` es usado para denotar el valor de esta variable es del tipo float; de otra manera es tratado como un double. 
### Double 
Número de coma flotante IEEE 754 de precisión doble de 64-bit
double fooDouble = 123.4;
### Boolean
true o false
```java
boolean fooBoolean = true;
boolean barBoolean = false;
```
### Char
Un simple carácter unicode de 16-bit.
Como char es un tipo sin signo de 16 bits, se pueden realizar operaciones aritméticas. Las constantes de carácter se incluyen entre comillas simples.
```java
char fooChar = 'A';
fooChar++; // now fooChar == 'B'
```
En Java, un literal es un valor fijo repsentado en formato legible para los humanos. Por ejemplo, el número 100 es un literal. 
Los lterales también suelen denominarse constantes. De forma predeterminada, los literales enteros son de tipo `int` y los literales de coma flotante son de tipo `double`. Los literales de carácter se incluyen entre comillas simples. Java también admite literales de cadena. Una cadena es un conjunto de caracteres entre comillas dobles.

```java 

int a = 100;
long b = 100L;
double c = 100.5;
float d = 100.5f;
String str = "Literal de cadena";
int hexadecimal = 0xFF; // Formato hexadecimal que corresponde a 225 en decimal
int octal = 011; // Formato Octal que corresponde a 9 en decimal.
```
Secuencias de escape de caracateres:

- `\` - Comilla simple
- `\"`- Comilla dobel
- `\\`- Barar invertida
- `\r`- Retorno de carro 
- `\n`- Nueva línea
- `\f`- Salto de formulario 
- `\t`- Tabulación horizonatal 
- `\b`- Retroceso
- `\ddd`- Constante octal
- `\uxxx`- Constante hexadecimal

Se usa la palabra clabe `final` para hacer inmutable las variables. Por convención el nombre de la variable se declara en myúsculas:
```java
final int HORAS_QUE_TRABAJO_POR_SEMANA = 80;
```
Notación abreviada para declarar (e inicializar) múltiples variables:
```java 
int x,y,z;
int i1 = 1, i2 = 2;
int a = b = c = 100;
```
Los nombres de variables pueden empezar por cualquier `letra, guión bajo o $`. 
El siguiente carácter puede ser cualquier `letra, dígito, guión bajo o $`. 

Por lo tanto, no puede empezar con un dígito ni emplear palabras calves de Java. 

