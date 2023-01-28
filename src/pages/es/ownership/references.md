---
title: Referencias y préstamos
description: Descripción del concepto referencia en Rust.
layout: ../../../layouts/MainLayout.astro 
---
Una referencia es como un puntero en el sentido de que es una dirección que podemos seguir para acceder a los datos almacenados en esa dirección; esos datos si propiedad de alguna variable. 
A diferencia de un puntero, se gerantiza que una referencia apunte a un valor válido de un tipo particular durante la vida de esa referencia.

```rust 

INPUT: 

fn calculate_length(&s: String) -> usize{
    s.len()
}
fn main(){
    let s1: String = String::from('hello')
    let len: usize = calculate_length(&s1);

    println!("The lengtth of {s1}");
    println!("The length of '{}' is {}.", s1, len);
}

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 2.59s
Running `target/debug/propiedad`

The lengtth of hello
The length of 'hello' is 5.

```
En el ejemplo anterior podemos observar que la variable `s` sigue siendo válida en todo ese scope aunque se la hallamos pasado cómoaargumento a la función `calculate_length`, esto se debe a qué le hemos pasado la variable por referencia.

### Referencias mutables 

Si tiene una referencia mutable a un valor, no puede tener otras referencias a ese valor. 
Si se intenta crear dos referencias multables fallarás. 

Com siempre, podemos usar corchete para crear un nuevo alcance, lo que permite múltiples referencia mutables, pero no simúltaneas: 

```rust

let mut s = String::from("hello");
{
   let r1 = &mut s; 
}
let r2 = &mut s;

```

```rust

INPUT: 

let mut s = String::from("hello");
// Se puede observar que a la variable r1 se le está pasando por refencia la variable s, por tanto, al ser 
// una referncia mutable no puede crearse otra referencia a esa varaible s.
let r1 = &mut s;
let r2 = &mut s;

println!("{}, {}", r1, r2);
let mut s = String::from("hello");

OUTPUT: 

Compiling propiedad v0.1.0 (/Users/samurai280/Documents/Proyectos/rust/propiedad)

error[E0499]: cannot borrow `s` as mutable more than once at a time
  --> src/main.rs:33:14
   |
32 |     let r1 = &mut s;
   |              ------ first mutable borrow occurs here
33 |     let r2 = &mut s;
   |              ^^^^^^ second mutable borrow occurs here
34 |
35 |     println!("{}, {}", r1, r2);
   |                        -- first borrow later used here

For more information about this error, try `rustc --explain E0499`.
error: could not compile `propiedad` due to previous error

```
### Referencias Colgantes 

Rust garantiza que nunca tendremos referencias `colgantes:` si tiene una referencia algún dato, el compilador se asegurará de que los datos no se queden fuera del alcance antes de que lo haga la referencia de los datos. 

## The Slyce Type (Segmentos de cuerdas)

* Un segemento de cadean es una referencia a una parte determianda de un String. 
* value_initial...value_end
* Si se quiere empezar desde cero: ..value_end
* Si se quiere empezar desde el final: value_initial..

* Literales de cadena como segmentos de cueras. 
    * Los literales de cadeana se almacenan dentro del binario. Son inmutables y sus referencias deben ser inmutables. 
* Segmentos de cadena como parámetros. 
    * Se puede tomar porcioanes de literales. 
    * Los segmentos de cadenas se pueden pasar directamente. Si tenemos un String, podemos pasar un segmento del String o una refencia al String.

```rust 

INPUT: 

let s: String = String::from("hello world");
let hello: &str = &s[0..5]; // Tomamos la longitud de elementos que va desde 0 a 5.
let world: &str = &[6..11]; // Tomamos la longitud de elemento que va desde 6 a 11 -> Segmento que contiene una puntero al byte en el índice 6 con un valor de longitud de 5.

OUTPUT: 

Compiling propiedad v0.1.0 (/Users/samurai280/Documents/Proyectos/rust/propiedad)
Finished dev [unoptimized + debuginfo] target(s) in 0.13s

Running `target/debug/propiedad`
Hello: hello - World: world
```
