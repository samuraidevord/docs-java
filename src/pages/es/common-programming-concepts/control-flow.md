---
title: Flujos de Control
description: Descripción detallada de los Flujos de Control
layout: ../../../layouts/MainLayout.astro
---

La capacidad de ejecutar algún código dependiendo de si se cumple una condición `true` y ejecutar algún código repetidamente mientras se cumple esa condición.

### if Expresiones 

* `if/else:` Permite ramificar su código dependiendo de las condiciones.
* `if en let declaración:` Podemos usar una condicional para asignar el resultado a una variable.


```rust

INPUT:

fn main() {
    let number = 3;
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was there");
    }

    if number != 0 {
        println!("Number was there");
    }

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    let number = if number > 6 {6} else {5};
    println!("The value of number is: {number}");
}

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 0.14s
Running `target/debug/fujo-de-control`

condition was true
Number was there
number is divisible by 3
The value of number is: 5
```

### Repeticiones de Bucles 

* Rust proporciona varios bucles, que se ejecutarán a través del código dentro del cuerpo del bucle hasta el final y luego comenzarán inmediatamente desde el principio.
* Presenta tres tipos de bucles: `loop`, `while` y `for`.

### loop 
* Ejecuta un bloque de código una y otra vez para siempre o hasta que digas que se detenga. 

```rust

INPUT: 

let mut counter = 0;

let result = loop {
    counter+ = 1;
    if counter = 10 {
        break counter * 2;
    }
}
println!("The result is {result}");

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 0.13s
Running `target/debug/fujo-de-control`

The result is 20

```
### While 

Son bucles que se usan contralando una condición. Es decir, si se cumple la condición se ejecuta el código dentro del bucle.

```rust 

INPUT: 

fn main() {
    let mut number = 3;
    while number != 0 {
        println!("{number}");
        number -= 1;
    }
    let a = [10,20,30,40,50];
    let mut index = 0;
    while  index < a.len() {
        println!("the value is: {}", a[index]);
        index += 1; 
    }
}

OUTPUT: 

Finished dev [unoptimized + debuginfo] target(s) in 0.13s
Running `target/debug/fujo-de-control`

3!
2!
1!

the value is: 10
the value is: 20
the value is: 30
the value is: 40
the value is: 50

```

### For 

Es una forma concisa de recordar un array.

```rust 

INPUT: 

fn main() {
    let a = [10,20,30,40,50];

    for element in a {
        println!("the value is: {element}");
    }
    for number in (1..4)  {
        println!("{number}!");
    }
    for number in (1..4).rev()  {
        println!("{number}!");
    }
}

OUTPUT:

Finished dev [unoptimized + debuginfo] target(s) in 0.13s
Running `target/debug/fujo-de-control`

the value is: 10
the value is: 20
the value is: 30
the value is: 40
the value is: 50
1!
2!
3!
3!
2!
1!

```
