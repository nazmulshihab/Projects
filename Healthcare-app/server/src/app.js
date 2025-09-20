import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patientRoutes.js";
import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/api/patients",patientRoutes);

app.use("/",(req,res)=>{
  res.send("Congrats!! Server is running on...");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 3000}`)
);

export default app;
