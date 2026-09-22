const express = require("express");

const app = express();
const PORT = 3000;

const encoded = "ZXNwZXJvIHF1ZQ==";
const decoded = Buffer.from(encoded, "base64").toString();


app.get("/", (req, res) => {
  const token = req.query.token;

  console.log(token)

  if (token !== "ctf") {
    return res.status(403).json({ error: "Acesso negado" });
  }

  res.json({ flag_part: decoded });
});

app.get("/debug", (req, res) => {
  res.json({ hint: "Use ?token=ctf na rota /flag" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});