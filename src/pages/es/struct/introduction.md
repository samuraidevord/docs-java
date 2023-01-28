---
title: Estrcutura
description: Descripción detallada del tipo de dato Estructura.  
layout: ../../../layouts/MainLayout.astro 
---

Una `estructura`es un tipo de dato personalziado que le permite empaqueter y nombrar varios valores relacionados que forman un grupo significativo. 

### Declaración 

* Para declarar/definir una estrucutura ingresamos la palabra `struct` y nombramos la estructura completa. 
* El nombre de una estructura debe describir la importancia de los datos que se agrupan. 
* Luego, dentro de corchetes, definimos los nobmres y los tipos de los datos a los que llamamos campos.

```rust 
struct  User {
    active: bool,
    username: String, 
    email: String, 
    sign_in_count: u64
}
```

### Instanciamiento 

- Creamos una instancia de esa estructura especificando valores concretos para cada uno de los campos. 
- Cada uno de estos campos presentan la siguiente estrucutra: `key:value`
- Obtenemos un valor concreto: object.name_campo
- Si hacemos mutable la instancia podemos modificar el valor de los campos.

```rust 

INPUT 1: 

let mut user1: = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
}
println!("Email: {}", user1.active);
println!("UserName: {}", user1.email);
println!("Active: {}", user1.username);


INPUT 2: 

fn build_user(email: String, username: String) -> User {
    User {
        email,
        username,
        active: true,
        sign_in_count: 1,
    }
}

let email = String::from("vmordiales@gmail.com");
    let mutusername = String::from("Víctor Manuel Ordiales García");
    let user2 = build_user(email, username);

```

### Creación de instancias a partir de otras instancias con sintaxis de actualización de estructura.
* Suele ser útil crear una instancia de un estructura que incluya la mayoría de los valores de otra instancia, pero cambie algunos. Puede hacer esto usando la sintaxis de actualización de estructura. 
* Este símbolo ".." se puede hacer el efecto del caso anterior 

```rust 
INPUT: 

let mut user1: = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
}

user1.email = String::from("anothereamil@example.com");
```

### Estructuras de tuplas sin campos con nombre para crear diferentes tipos

* Las estrucuturas de tuplas no tienen nombres asociados a sus campos; más bien, solo tienen los tipos de los campos.
* Son útiles cuando desean dar un nombre a toda la tupla y hacer que la tupla sea de un tipo diferente a otras tuplas.
* También puede definir estructuras que no tienen ningún campo. Se denominan estructuras similares a unidades porque se comporta de manera similar al ya mencionada.


```rust 

INPUT: 

struct  Color(i32,i32,i32);
struct Point(i32,i32,i32);

let black = Color(0, 0, 0);
let origin = Point(0, 0, 0);
println!("Color: {}", black.0);
println!("Color: {}", origin.0);

```
