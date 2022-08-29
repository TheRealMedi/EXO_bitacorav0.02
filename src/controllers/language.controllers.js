import { getConnection } from "./../database/database"

const getLanguages = async (req, res) => {
  const connection = await getConnection();
  const [rows] = await connection.query(
    "SELECT id, name, edad, email FROM user"
  );
  console.log([rows]);
  res.json([rows]);
};

export const methods = {
  getLanguages,
};
