---
title: Variables y Constantes
description: Explicación básica de las variables y las constantes
layout: ../../../layouts/MainLayout.astro
---
### Variables 

Las variables son las estructuras que nos permiten guardar información en la memoria. 

* `Inmutables:` Su valor no puede cambiar durante el tiempo de de compilación.
*  Las variables se pueden hacer mutables haciendo uso de la palabra clave `mut`.
*  Rust tiene la capacidad de inferir el tipo de las variables. 
*  Notación: snake_case -> LowerCase.
* Se pueden declarar variables con el mismo nombre que las variables ya existentes. Tanto en el scope de las misma variable cómo en otro scope. 


```rust
INPUT:

fn main() {
    let x = 5; 
    let mut y = 5; 
    println!("The value of x is: {x}");
    println!("The value of y is (before): {y}");
    y = 10;
    println!("The value of y is (after): {y}");
}

OUTPUT:

Finished dev [unoptimized + debuginfo] target(s) in 0.00s
Running `target/debug/variables`

The value of x is: 5
The value of y is (before): 5
The value of y is (after): 10
```

```rust 

INPUT:

// Scope de una variable

fn main() {
    let x = 1;
    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    } 
    println!("The value of x is: : {x}");
}

OUTPUT:

Finished dev [unoptimized + debuginfo] target(s) in 0.10s
Running `target/debug/variables`

The value of x in the inner scope is: 2
The value of x is: 1

```
### Constantes

* `Inmutables:` Su valor no puede cambiar durante el tiempo de compilación.
* No se pueden hacer mutables.
* Es necesario agregar el tipo de la variable.
* Se pueden declarar en scope global para ser usadas en todas las partes de la aplicación.
* Notación snake_case -> Uppercase


```rust
INPUT:

fn main() {
    const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
    const X: i32 = 27;
    println!("Three hours in second: {}", THREE_HOURS_IN_SECONDS);
    println!("The value of x is: {X}");
}

OUTPUT:

Finished dev [unoptimized + debuginfo] target(s) in 0.13s
Running `target/debug/variables`

Three hours in second: 10800
The value of x is: 27
```

Rust permite nombrar variables con el nombre de variables ya existentes y que dichas variables puedan tener tipos diferentes al de las variables originales. Se denominada `shadowed`.

Las variables creadas de está forma van a ser inmutables y no se va a poder definir su mutabilidad.
Es decir, se modifica la variable cuando se realiza la transformación pero se no se puede volver a modificar.

```rust
INPUT:

fn main() { 
    let x = '5';
    print!("The value of x: char is {}", x);
    let x = 5;
    println!("The value of x: i32 is {}", x);
}

OUTPUT:

Finished dev [unoptimized + debuginfo] target(s) in 0.10s
Running `target/debug/variables`

The value of x: char is 5
The value of x: i32 is 5
```

