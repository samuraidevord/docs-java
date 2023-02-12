---
title: ¿Qué es Java?
description: "Lenguaje de programación Java"
layout: ../../layouts/MainLayout.astro
---
Java es un lenguaje de programamación orientado a objetos. 
Desde un punto de vista general, un programa se puede organizar de dos formas: sobre su código y sobre sus datos. 

En la programación estructurada se organiza sobre el código pero en la programación orientada a objetos el programa se estructura alrededor de los datos, definiendo estos datos y las rutinas que permiten actuar sobre los mismos. 

Para complementar los principios de la programación orientada a objetos, se aplican los conceptos de encapsulación, herencia y polimorfismo. 

- La `encapsulación` es un mecanismo que combina el código con los datos que manipula, al tiempo que los protege de interferencias externas. La unida básica de encapsulación es la `clase`. La clase define la forma de un objeto y especifica los datos y el código que actúa sobre ellos. 
Los objetos son las instancias de una clase. 
- El `polomorfismo` es la propiedad que permite a una interfaz acceder a una clase general de acciones. Este concepto suele expresarse como "un interfaz, múltiples métodos". El compilador en tiempo de ejecucción será el encargado de seleccionara el método correcto a invocar. 
- La `herencia` es el proceso mediante el cual un objeto puede adquirir las propiedades de otro. Gracias a la herencia un objeto solo tiene que definir los atributos que lo hacen único dentro de la clase y hereder los atributos generales. 


### Sintaxis básica 

* Compilador código Java: `$ javac filename.java`.
* Ejecutar código: `$java filename`.
* Start a graphical console to monitor and mange Java applications: `jconsole`.

```java
// Comentarios de una sóla línea

/*
Comentarios multilínea
*/

/**
* Comentarios JavaDoc lucen así. Suelen describir la clase o varios atributos de una clase.
*/

// Todos los programas importan automáticamente el paquete 'java.lang' que define la clase 'System'
// Importa la clase 'ArrayList' dentro del paquete 'java.util'
import java.util.ArrayList;
// Importa todas las clases dentro del paquete 'java.security'
import java.security.*;

// Para Java un archivo es una unidad de compilación. Pueden contener una o varias clases.
// Por convención, el nombre de la clase principal (declarada como public) debe coincidir con el nombre del archivo que contiene el programa.
public class Sample {

    // Un programa debe tener un método 'main' como punto de entrada
    public static void main (String[] args) {
        // Usa 'System.out.println' para imprimir líneas
        System.out.println("¡Hola mundo!");
        System.out.println(
            " Integer (int): " + 10 +
            " Double (double): " + 3.14 +
            " Boolean (boolean): " + true);

        // Para imprimir sin el salto de línea, usa 'System.out.print'
        System.out.print("Hola ");
        System.out.print("Mundo");
    }
}


```