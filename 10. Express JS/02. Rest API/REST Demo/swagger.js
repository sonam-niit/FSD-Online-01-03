import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student Management API",
      version: "1.0.0",
      description: "Student REST API Documentation"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "development server"
      }
    ]
  },
  apis: ["./server.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;