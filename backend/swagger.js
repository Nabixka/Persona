const swaggerJsdocs = require("swagger-jsdoc")

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Documentation API",
            version: "1.0.0",
            description: "Dokumentasi API Persona",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Server Local",
            },
        ],
    },
    apis: ["./routers/*.js"],
}

const swaggerSpec = swaggerJsdocs(options)

module.exports = swaggerSpec