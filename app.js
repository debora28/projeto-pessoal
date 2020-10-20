var app = require('./config/server');

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Servidor na porta ${port}`))
