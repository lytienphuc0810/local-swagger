const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const axios = require('axios');

axios.get('http://localhost:8130/v2/api-docs').then(swaggerDocument => {
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument.data));
});

app.listen(3000)
