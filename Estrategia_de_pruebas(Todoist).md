# Estrategia de pruebas (Todoist)

## 1. Tiempo y presupuesto

Se cuenta con un tiempo total de 10 horas para el diseño de la suite de pruebas y su implementación. De este modo se busca realizar pruebas exploratorias sobre la aplicación para despues establecer las pruebas de tipo end to end que permitan realizar regresiones.

En cuanto a infraestructura se cuenta con una máquina local con sistema operativo Linux. Esta máquina tiene 16GB de RAM y 12 núcleos.

## 2. Enfoque

Se busca enfocar las pruebas en las funcionalidades principales de la aplicación de forma tal que se logre tener una regresión en el momento de lanzar un nuevo release de la aplicación, garantizando por lo menos una cobertura del 5% de la aplicación.

## 3. Objetivos

* Realizar pruebas exploratorias que permitan tener un entendimiento general de la aplicación
* Identificar las principales funcionalidades
* Diseñar las pruebas
* Desarrollar e implementar las pruebas

## 4. Funcionalidades a probar

1. Proceso de login/registro
2. CRUD sobre las tareas
3. Completar una tarea
4. CRUD de proyectos
5. Agregar un filtro
6. Aplicar un filtro
7. Agregar, leer y eliminar un comentario

## 5. Niveles

La suite de pruebas esta compuesta por pruebas end to end que permitan validar flujos completas sobre la aplicación. Estas pruebas se ejecutan sobre la UI de la aplicación.

## 6. Técnicas

​	Las pruebas de flujo completo end to end serán desarrolladas en JavaScript usando la herramienta Cypress.

