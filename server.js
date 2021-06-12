const express = require('express')
const app = exports.module = express()
const bodyParser = require("body-parser");
const QRCode = require('qrcode')

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

// {
//   name:"Employee Name",
//   age:27,
//   department:"Police",
//   id:"aisuoiqu3234738jdhf100223"
// }

let data;

app.post('/generate', (req, res, next) => {
  data = req.body.data
  // console.log(data)
  
  if (data) {
    // let strData = JSON.stringify(data)
    // console.log('str',strData)

    QRCode.toDataURL(data, function (err, url) {
      if(err) return err
      // console.log(url)
      res.render('index', { url: url })
    }) 
  }
})

app.get('/', (req, res, next) => {
  res.render('index', { url: null })
})

app.listen(3031)
console.log('listening on 3031')