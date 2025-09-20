import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import initModels from "../models/init-models.js";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const models = initModels(sequelize);

export { sequelize, models };
