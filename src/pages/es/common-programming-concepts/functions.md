---
title: Funciones
description: Explicación de básica de las funciones.
layout: ../../../layouts/MainLayout.astro
---

* Las funcines de declaaran haciendo uso de la palabara clave `fn`seguido de un nombre de función y un conjunto de paréntesis. 
* Los corchetes le dicen al compilador dónde comienza y termina el cuerpo de la función. 
* Llamamos a la función ingresando su nombre seguido de un conjunto de paréntesis.

### Parámetros 

* Son varaibles especiales que forman aprte de la firma de una función.
* Cuando tiene parámetros, puede proporcionar valores concretos para los mismos.
* Los valores que añaden se denominan argumentos y debe declararse el tipo de cada parámetro.

### Funciones con valores de retorno
* Las funciones puden devolver valores al código que las llama.
* Nombramos los valores devueltos, pero debemos declarar su tipo después una flecha. 
* El valor de retorno es el valor final en el bloque del cuerpo de una función. 
* Puedes usar `return` para devolver algo concreto dentro de una función, por defecto todas las funciones retornan su última expresión.

```rust 

INPUT: 

ther_function(){
    println!("Another function");
}
fn another_function_params(x: i32) {
    println!("The value of x is: {x}");
}
fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}");
}
fn five() -> i32 {
    5
}
fn plus_one(x:i32) -> i32 {
    x + 1 
}
fn main() {
    another_function();
    another_function_params(5);
    print_labeled_measurement(5, 'h');
    let y = {
        let x = 3;
        x + 1
    };
    println!("The value of y is: {y}");
    let x = five();
    println!("{}", x);
    let x = plus_one(5);
    println!("{}", x);
} 

OUTPUT:

Finished dev [unoptimized + debuginfo] target(s) in 0.12s
Running `target/debug/funciones`

Another function
The value of x is: 5
The measurement is: 5h
The value of y is: 4
5
6

```