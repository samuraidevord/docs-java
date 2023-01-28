---
title: La propiedad
description: Descripción de la característica principal del Rust | La Propiedad 
layout: ../../../layouts/MainLayout.astro 
---

La propiedad es la cartacterística más singular de Rust y tiene profundas implicaciones para el resto del lenguaje. 

Permite a Rust garantizar la seguridad de la memoria sin necesidad de un recolector de basura, siendo muy importante entender cómo funciona la propiedad. 

En esta sección, vamos a hablar sobre la propiedad, así como varias funciones relacionadas: préstamo, segmentos y cómo Rust distribuye los datos de memoria.

### ¿ Qué es la propiedad ?

La `propiedad` es un conjunto de reglas que rigen cómo un programa Rust administra la memoria. 

`La memoria se administra a través de un conjunto de reglas (propiedad) que verifica el compilador.
Si se viola alguna de las reglas, el programa no compilará. Ninguna de las funciones pertenecientes a la propiedad realentiza el programa durante su ejecucción.`



### The Stack and the Heap (Pila y montículo)

Tanto la pila como el montículo son partes de la memoria desponible para que su código las use en tiempo de ejecucción, pero están estructuradas de deiferentes maneras.

#### The Stack (Pila)

Una pila es una lista ordenada de datos que permite almacenar y recuperar datos.

* Para el manejo de los datos cuenta con dos operaciones básicas: apilar (push), que coloca un objeto en la pila, y su operación inversa, retirar (o desapilar, pop), que retira el último elemento apilado. 

* La adicción de datos se denomina `insercción` en la pila, y la eliminación de datos se denomina `extracción`de la pila. 

* Todos los datos almacenados en la pila deben tener un tamaño fijo conocido.
<br>  
<br>  

![Stack](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pila.svg/1920px-Pila.svg.png)

#### Montículo (Heap)

Un montículo es una estructura de datos de tipo árbol con información perteneciente a un conjuntro ordenado. 

* Menos organizado que la pila 
* Al colocar los datos se solicita una cierta cantidad de espacio. El asignadro encuentra un lugar vacío en el montículo que es lo suficientemente grande, lo marca como si estuviera en uso y devuelve un puntero , qué es la dirección de esa ubicación.
* El proceso anterior se denomina asginación en el montón y, a veces, se abrevia simplemente comoa asignación. 
* Debido a que los punteros presentan un tamaño fijo conocio se pueden almacenar en la pila.

Empujar a la pila es más rápida que asginar en el montículo, debido a que nunca tiene que buscar un lugar para alamcenar los nuevos datos; es ubicación siempre está en la parte superior de la pila. 

Comparativamente, la asignación de espacio en el montículo requiere más trabajo, al asignar un nuevo dato es necesario encontrar un espacio los sufientemente grande para contener los datos y luego realizar prepararse para la próxima asignación.

Acceder a los datos en el montículo debido a que tiene que seguir un puntero para llegar allí. Los procesadore acutales son más rápidos si saltan menos en memoria. 

Cuando su código llama a una función, los valores pasados a la función (incluidos, potencialmente, los punteros a los datos en el montón) y las variables locales de la función se colocan en la pila. 
Cuando la función termina, esos valores se sacan de la pila.

Hacer un seguimiento de qué partes del código usan qué datos en el montón, minimizar la cantidad de datos duplicados en el montón y limpiar los datos no utilizados en el montón para que no se quede sin espacio son problemas que aborda la propiedad. Una vez que comprenda la propiedad, no necesitará pensar en la pila y el montón con mucha frecuencia, pero saber que el propósito principal de la propiedad es administrar los datos del montón puede ayudar a explicar por qué funciona de la manera que lo hace.

### Reglas de la Propiedad 

* Cada valor en Rust tiene un `propietario`
* Solo puede existir un propietario a la vez. 
* Cuando el propietario queda fuera del alcance, el valor se elimina. 

#### Alcance de las variables 

Se denomina alcance al rango dentro de un programa para el cuál un elemento es válido.

```rust 
let s = "hello";
```

La variable `s` se refiere a un literal de cadena, donde el valor de la cadena está codificando el texto de nuestro programa. La variable es válida desde el punto en que se declara hasta el final del ámbito actual.

```rust 
# s no es válido aqui, no se está declarada.
{
    let s = "hello"; # Se es válidad, se encuentra declarada
}
# Salimos de scope y la variable s deja de ser válida
```

En otras palabras, hay dos puntos importantes en el tiempo aquí: 

* Cuando s entre en el alcance, es válido. 
* Sigue siendo válido hasta que sale el alcance. 

#### String Type 

Los literales de caden son inmutables y en algunos momentos no vamos a conocer los valores de esas cadenas.

Para solucionar esto, Rust tiene un segundo tipo cadena, `String`. Este tipo administra los datos asginados en el montículo y, cómo tal, puede almacenar una cantidad de texto que desconocemos en el momento de compilación. Este tipo cadena es mutable.

```rust

let s = String::from("Hello");

let mut s = String::from("Helo");
s.push_str(", wordl");

println!("{}", s);

```

Entonces, ¿cuál es la diferencia aquí? ¿Por qué los String pueden mutar pero los literales no? La diferencia está en cómo estos dos tipos tratan con la memoria.

#### Memoria y Asignación

En el caso de un literal de cadena, concocemos el contenido en el momento de la compilación, por lo que el texto se codifica directamente en el ejecutable final. Está es la principal razón por la que los literales de cadena son rápidos y eficientes.
Pero esta propiedades solo provienen de la inmutabilida del literal de cadena.

Desafortunamente, no podemos poner una gota de memoria en el binario para cada fragmente de texto cuyo tamaño se desconoce en el momento de compilación y cuyp tamaño puede cambiar mientras se ejecuta el programa.

Con el `String Type`, podemos admitir un fragmento de texto mutable y en crecimiento, necesitamos asignar un cantidad de memoria en el montículo, desconocido en el momento de compilación, para almacenar esa información.

Eso significa: 

* La memoria debe solicitarse al asignador de memoria en tiempo de ejecucción.
* Necesitamos una forma de devolver esta memoria al asignador cuando hayamos terminado con nuestro String.

Esa primer aparte la hacemos nostros: cuando llamamos `String::from`, su implementación solicita la memoria que necesita. Esto es bastante universal en los lengaujes de programación.

Para la segunda parte Rust toma un enfoque diferente al resto de lenguajges de programación (ni recolector de basura ni hacer la indentificación de forma manual). `Rust devuelve la memoria de forma automática una vez que la variable que la posse queda fuera del alcance`. 

```rust 
{
    let s = String::from("hello"); 
    // s es válida dentro de este alcance

} 
// Estamos fuera del scope sieno s no válida
```
Hya un punto natural en el que podemos devolver la memoria que `String` necesitó al asignador, esto es cuando la variable `s` queda fuera del alcance. Cuando una variable queda fuera del alcance, Rust llama a una función especial para nosotros. Esta función se llama `drop`, y es donde el autor de `String` puede poner el código para devolver la memoria. Rust llama de forma automática en el corchete de cierre.

Este patrón tiene un profundo impacto en la forma que se escribe el código de Rust. Puede parecer simple en el momento, pero el comportamiendo del código puede ser inesperado en situaciones más complicadas cuando queremos que múltiples variables usen los datos que hemos asignado en el montón. Veremos alguna de esas situaciones ahora.

##### Move `!Importante!`
Rust se encarga de invalidar la variable original si se guarda en una segunda variable. 
De está forma Rust evita que exista una doble liberación de memoria, debido a qué estamos pasando  el puntero, la longitud y la capacidad de la variable 1 a las 2 (en la pila), eliminado o invalidando la variable 1.

##### Clone `!Importante`

Si queremos realizar un copia profunda  se hace uso del método clone. No solo copiamos los datos de la pila sino que también copiamos los datos del montículo.

##### Copiar `!Importante`

También hay que decir que datos que solamente se copian en la pila, saltándose todo lo que hemos hablado
con anterioridad. Es decir, en este caso, no hay diferencia entre la copia profunda y la superficial. Para hacer está copia hacemos uso del método `copy`.
