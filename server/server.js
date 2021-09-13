require ('dotenv').config();
const express = require ('express');
const app = express();
const cors = require ('cors');
const port = process.env.PORT || 5000;

const pengajuanRoute = require('./routes/pengajuanRoute')
const agunanRoute = require('./routes/pengajuanRoute')


app.use (cors());
app.use (express.json());
app.use (express.urlencoded({extended:true}));

app.use('/', pengajuanRoute);
app.use('/', agunanRoute);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});