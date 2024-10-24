import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Productos',
                description: 'Operaciones relacionadas con los productos.'
            },

            // si en caso tuvieramos ruta de usuarios
            //{
                //name: 'users',
                //description: 'Operaciones relacionadas con los usuarios.'
            //},
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'Esta API permite gestionar productos, incluyendo crear, leer, actualizar y eliminar productos.',
        },
        components: {
            schemas: {
                Producto: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'ID único del producto',
                        },
                        name: {
                            type: 'string',
                            description: 'Nombre del producto',
                            example: 'Portatil',
                        },
                        price: {
                            type: 'number',
                            description: 'Precio del producto',
                            example: 29.99,
                        },
                        availability: {
                            type: 'boolean',
                            description: 'Disponibilidad del producto',
                            example: true,
                        },
                    },
                    required: ['name', 'price'],
                },
            },
        },
        paths: {
            '/api/v1/products': {
                get: {
                    summary: 'Obtiene todos los productos',
                    tags: ['Productos'],
                    description: 'Retorna toda la lista de los productos de la base de datos.',
                    responses: {
                        200: {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/Producto',
                                        },
                                    },
                                },
                            },
                        },
                        500: {
                            description: 'Error interno del servidor',
                        },
                    },
                },
            },
            '/api/v1/products/{id}': {
                get: {
                    summary: 'Obtiene un producto por ID',
                    tags: ['Productos'],
                    description: 'Retorna un solo producto por su id',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            description: 'ID único del producto',
                            required: true,
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Producto',
                                    },
                                },
                            },
                        },
                        400: {
                            description: 'ID no válido',
                        },
                        404: {
                            description: 'Producto no encontrado',
                        },
                        500: {
                            description: 'Error interno del servidor',
                        },
                    },
                },
            },
            '/api/v1/products/create': {
                post:{
                    summary: 'Crear un nuevo producto',
                    tags: ['Productos'],
                    description: 'Retorna el producto creado.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                            example: 'Portatil',
                                        },
                                        price: {
                                            type: 'number',
                                            example: 29.99,
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        201: {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Producto',
                                    },
                                },
                            },
                        },
                        400: {
                            description: 'Errores de validación',
                        },
                        500: {
                            description: 'Error interno del servidor',
                        },
                    },
                }
            },
            '/api/v1/products/update/{id}': {
                put: {
                    summary: 'Actualizar un producto',
                    tags: ['Productos'],
                    description: 'Retorna la actualizacion de todo el producto.',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            description: 'ID único del producto a actualizar',
                            required: true,
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                            example: 'Portatil',
                                        },
                                        price: {
                                            type: 'number',
                                            example: 29.99,
                                        },
                                        availability: {
                                            type: 'boolean',
                                            description: 'Disponibilidad del producto',
                                            example: true,
                                        },
                                    }
                                }
                            }
                        },
                    },
                    responses: {
                        200: {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Producto',
                                    },
                                },
                            },
                        },
                        400: {
                            description: 'Errores de validación',
                        },
                        404: {
                            description: 'Producto no encontrado',
                        },
                        500: {
                            description: 'Error interno del servidor',
                        },
                    },
                },
            },
            '/api/v1/products/update-property/{id}': {
                patch: {
                    summary: 'Actualiza solo la disponibilidad de un producto',
                    tags: ['Productos'],
                    description: 'Retorna la actualizacion solamente de la disponibilidad de un producto',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            description: 'ID único del producto',
                            required: true,
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Success',
                        },
                        400: {
                            description: 'Errores de validación',
                        },
                        404: {
                            description: 'Producto no encontrado',
                        },
                        500: {
                            description: 'Error interno del servidor',
                        },
                    },
                },
            },
            '/api/v1/products/delete/{id}': {
                delete: {
                    summary: 'Elimina un producto por ID',
                    tags: ['Productos'],
                    description: 'Elimina un producto completamente de la base de datos.',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            required: true,
                            description: 'ID único del producto a eliminar',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'string',
                                        value: 'Producto eliminado'
                                    },
                                },
                            },
                        },
                        400: {
                            description: 'ID no válido',
                        },
                        404: {
                            description: 'Producto no encontrado',
                        },
                        500: {
                            description: 'Error interno del servidor',
                        },
                    },
                },
            }
        }
    },
    apis: ['./src/router/product.route.ts']
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions: SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url('https://francisco-soto-flores.web.app/assets/image-logo-DT0r1Bm1.png');
            
        }
    `,
    customfavIcon: 'https://francisco-soto-flores.web.app/assets/image-logo-DT0r1Bm1.png',  // Ruta del favicon
    customSiteTitle: 'API Producto',  // Título personalizado para la pestaña
}

export { swaggerSpec, swaggerUiOptions };
