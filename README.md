# Node.JS app (Fastify) auto documented by Swagger

## Objective
- The objective of this project is not to create a new API. I was testing some project structures to validate the input and output values from the controller. I applied knowledge from all the API projects I have worked on and merged only the best practices that I consider essential for any API project. This includes: route documentation, input and output value validation, tests (coming soon), directory structure, some SOLID principles, and Design Patterns.

## Project Structure
- [**src**](https://github.com/pedroaurelli/fastify-swager/tree/main/src)
  - [**controllers**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/controllers)
  - [**lib**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib)
    - [definitions](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib/definitions)
    - [schemas](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib/schemas)
    - [types](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib/types)
    - [utils](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib/utils)
  - [**services**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/services)

| **Folder** | **Description** |
|-------|---------|
| [**src**](https://github.com/pedroaurelli/fastify-swager/tree/main/src)                            | Root folder of the project's source code.                                                       |
| [**controllers**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/controllers)        | Contains controllers responsible for handling route requests and responses.                     |
| [**lib**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib)                        | Folder with libraries and auxiliary resources for the project.                                  |
| [**definitions**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib/definitions)            | Define endpoint schema.                                                  |
| [**schemas**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib/schemas)            | Defines validation and data structure schemas.                                                  |
| [**types**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib/types)                | Contains type and interface definitions for the project.                                        |
| [**utils**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/lib/utils)                | Includes utility functions and helpers to support core functionalities.                         |
| [**services**](https://github.com/pedroaurelli/fastify-swager/tree/main/src/services)              | Implements business logic.              |

## Scripts
| **Script** | **Description**                                         |
|------------|---------------------------------------------------------|
| `dev`      | Runs the server in development mode|
| `build` | Build app to production |

## Packages
| **Dependency**         | **Description**                                      |
|-------------------------|------------------------------------------------------|
| `typescript`           | Typed JavaScript language.                           |
| `tsx`                  | TypeScript runtime with ES module support.           |
| `fastify`              | Fast web framework for Node.js.                      |
| `@fastify/swagger`     | Swagger/OpenAPI plugin for Fastify.                  |
| `zod`                  | Schema validation library for TypeScript.            |

## Swagger
- Swagger UI available in `/docs` route
