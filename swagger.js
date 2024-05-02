import swaggerjsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API E-commerce docs",
      version: "0.1",
      description: "Simple document api for e-commerce",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },
  apis: ["./routes/swagger.yaml"],
};

export const swaggerSpec = swaggerjsdoc(options);
