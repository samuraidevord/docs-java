---
title: Bloques de Código
description: "Descripción básica de los bloques de código"
layout: ../../layouts/MainLayout.astro
---

Un `bloque de código` es un grupo de dos o más instrucciones definidas entre llaves `{}`. Tras crear un bloque de código se convierte en una unidad lógica que se puede usar como su fuera una instrucción independiente.

Los bloques de códgi definen un `ámbito`. Las variables definidas en un ámbito o bloque de código nom son accesibles fuera de ese ámbito. Cada vez que se acceder a un bloque las varialbes contenidas en ese bloque se inicializan y cuando el bloque finaliza se destruyen. 
Una variable está disponible a partir de su definición. Por lo tanto, si se define una variable al final de un bloque no se podrá utilizar.

Los bloques se pueden anidar, de forma que un bloque de código es contenido por otro bloque de código. 
Desde el bloque interior se puede acceder a las variables definidas en el bloque exterior pero el exterior no puede acceder a las variables definidas en el bloque interior.
