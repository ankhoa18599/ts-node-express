import app from "./app";
import config from "./config/config";

const port = config.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
