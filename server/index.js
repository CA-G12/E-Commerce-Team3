/* eslint-disable no-console */
const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`server running in port http://localhost:${port}/`);
});
