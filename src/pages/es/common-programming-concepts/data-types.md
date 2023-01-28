---
title: Tipos de Datos
description: Descripción detallada de los Tipos de Datos en Rust
layout: ../../../layouts/MainLayout.astro
---

Los tipos de datos en Rust se dividen en dos grandes grupos: `escalares` y `compuestos`.
(Tener presente que Rust es un lenguaje de tipo estático).

### Escalares 

Representan un úncico valor. En este tipo se encuentran: Enteros, flotantes, booleanos y caracteres.

#### Enteros 

* 8 bits -> i8 (signo) -> u8
* 16 bits -> i16 (signo) -> u16
* 32 bits -> i32 (signo) -> u32
* 64 bits -> i64 (signo) -> u64
* 128bits -> i128 (signo) -> u128
* arco -> isize (signo) -> usize
* Los tipos isize y usize dependen de la arquitectura de la computadora en la que se ejecute el progamar.
* El tipo entero predeterminado en Rust es i32.

```rust

INPUT:

fn main() {
    let x: i32 = 20;
    let y: i32 = 2;
    println!("The value of x is {}", x);
    println!("The value of y is {}", y);

    let sum = x + y;
    let difference = y - x;
    let product = x * y;
    let quotint = y / x;
    let remainder = 20 % 2;

    println!("* Suma: {sum}"); 
    println!("* Resta: {difference}");
    println!("* Producto: {product}");  
    println!("* División: {quotint}");
    println!("* Resto: {remainder}");
}

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 0.12s
Running `target/debug/tipos-de-datos`

The value of x is 20
The value of y is 2

* Suma: 22
* Resta: -18
* Producto: 40
* División: 0
* Resto: 0

```

#### Flotantes 

Son números con coma flotante.

* Los tipos flotantes en Rust son f32 y f64.
* El tipo predeterminado es f64 debido a las arquitecturas modernas de CPU.

```rust

INPUT:

fn main() {
    let x = 2.0;
    let y: f32 = 3.0;
    println!("* Número x: {x}");
    println!("* Número y: {y}");

    let sum = 5 + 10;
    let difference = 95.5 - 4.3;
    let product = 4 * 30;
    let quotint = 56.7 / 32.2;
    let truncated = -5 / 3;
    let remainder = 43 % 5;
    println!("* Suma: {sum}"); 
    println!("* Resta: {difference}");
    println!("* Producto: {product}");  
    println!("* División: {quotint}");
    println!("* División truncada: {truncated}");
    println!("* Resto: {remainder}");
}

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 0.13s
Running `target/debug/tipos-de-datos`

* Número x: 2
* Número y: 3
* Suma: 15
* Resta: 91.2
* Producto: 120
* División: 1.7608695652173911
* División truncada: -1
* Resto: 3

```


#### Booleanos

* Cómo en todos los lenguajes de programación tienen dos valores: `true` o `false`. 
* Son tipos de datos que presentan un tamaño de un byte.
* Se especfican con el tipo: `bool`
* Se usan para controlar condiciones, bucles, etc.

```rust

INPUT:

fn main() {
   let t = true;
    let f:bool = false;
    println!("T: {t} F: {f}");
    if t {
        println!("The value is {}", t);
    } else {
        println!("The value is {}", f);
    }
}

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 0.10s
Running `target/debug/tipos-de-datos`

T: true F: false
The value is true

```

#### Char 

El tipo de Rust es tipo alfabético más primitivo del lenguaje.

```rust

INPUT:

fn main() {
    let c = 'z';
    let z: char = 'Z';
    let heart_eyed_cat = '😻';
    println!("{}", c);
    println!("{}", z);
    println!("{}", heart_eyed_cat);
}

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 0.12s
Running `target/debug/tipos-de-datos`

z
Z
😻

```

### Compuestos

Agrupan varios valores de un solo tipo. Ruste presentan esencialmente dos tipos de compuestos: `tuplas` y `arrays/matrices`.

#### Tuplas 

* Es una forma general de agrupar valores.
* Longitud fija. No se pueden modficar.
* Cad tupla tiene un tipo, y los tipos de los diferentes valores en la tupla no tienen que ser iguales.
* Para obtener los valores de una tupla podemos hacer uso de la destructuración.
* Podemos acceder directamente a un elmento concreto de un tupla haciendo usop del (.) seguido del índice del valor que queremos acceder. 
* Las tupla sin valor tiene un nombre especial: `unidad`. Este valor y su tipo correspondiente se escriben () y representa un valor vacío o un tipo de retorno vacío.


```rust 

INPUT:

fn main() {
    let tup: (i32,f64,u8) = (500,6.4,1);
    let (x,y,z) = tup;

    println!("The value of x is: {x}");
    println!("The value of y is: {y}");
    println!("The value of z is: {z}");

    let five_humdred = tup.0;
    let six_point_four = tup.1;
    let one = tup.2;

    println!("The value of x is: {five_hundred}");
    println!("The value of y is: {six_point_four}");
    println!("The value of z is: {one}");
}

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 0.15s
Running `target/debug/tipos-de-datos`

The value of x is: 500
The value of y is: 6.4
The value of z is: 1
The value of x is: 500
The value of y is: 6.4
The value of z is: 1
```
#### Matrices/Listas/Arrays

* Es una forma de agrupar una cantidad de valores que tienen que tener el mismo tipo.
* Las matrices son útiles cuando desea que sus datos se asignen en la pilea en lugar del montón o cuando quiere asegurarse de tener un canitdad fija de elementos.
* El tipo de una matriza se escribe usando corchetes con el tipo de cada elmento, un punto y coma y luego la cantidad de elementos en la matriz. [T:n] -> tipo y no:número.
* Se puede acceder a los elementoas de una matriz mediante indexación.

```rust 

INPUT: 

fn main() {
    let a: [i32; 5] = [1, 2, 3, 4, 5];          
    let _months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"]; // _a: El "_" indica que la variable no se va a usar.
    let _a = [3;5]; // 3,3,3,3,3 -> 3 El valor a repetir y 5 el tamaño del array

    let primero = a[0];
    let second = a[1];
    println!("First value: {primero}");
    println!("Second value: {second}");    
}

OUTPUT:

Finished dev [unoptimized + debuginfo] target(s) in 0.26s
Running `target/debug/tipos-de-datos`

First value: 1
Second value: 2

```
