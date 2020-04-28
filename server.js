
const app = require("./src/app")
const config = require("./src/config/load-parameters");

app.listen(config.port); 

console.log(`Listening on port ${config.port}`);