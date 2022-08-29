import { config } from "dotenv";

config();

export default {
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: "medi",
  password: "987654321",
  port: 3306,
  multipleStatements: true,
  typeCast: function (field, next) {
    if (field.type == "VAR_STRING") {
      return field.string();
    }
    return next();
  },
};
