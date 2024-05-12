import express from "express";
import { Request, Response } from "express";
import userRoutes from "./router/userRoutes";

const app = express();
const port = 3000;

app.use(express.json());

// Rutas de usuario definidas aquí
app.use("/api/usuarios", userRoutes);

app.listen(port, () => {
  console.log(`El servidor se está ejecutando desde el puerto: ${port}`);
});
