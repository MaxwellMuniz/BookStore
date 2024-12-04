// src/server.ts
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/auth", authRoutes); // Prefixo para as rotas de autenticação
app.use("/", bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:4200", "http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}),
);