const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();


const app = express();
const PORT=3001;

app.use(cors());
app.use(bodyParser.json());

router.post('/get-msg', (req,res) => {
	const changedMessage='Server Says: '+req.body.message;
	console.log(changedMessage);
	res.json({message: changedMessage});
});

app.use('/', router);

app.listen(PORT, () => {
    console.log('Server is running');
});