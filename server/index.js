const express = require('express');
const app = express();

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const port = 3000;

const { google } = require('googleapis');
const sheets = google.sheets('v4');

app.use('/test', upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'resume-blank', maxCount: 1 }
]));
app.use(express.static('./client/dist'));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/test', (req, res) => {
  console.log(req.body);
  console.log(req.files);



  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Bruin Consulting Website listening at http://localhost:${port}`)
});