const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    openapi: '현재 사용하고 있는',
    info: {
      title: "Express Service with Swagger",
      version: "1.0.0",
      description: "a RestAPI using swagger and express"
    },
    servers: [
      {
        url: "http://localhost:8000"
      }
    ]
  },
  apis: []
}

module.exports = options