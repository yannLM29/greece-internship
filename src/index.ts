import express from 'express';
import bodyParser from 'body-parser';
import { addNewMessage, getAllMessages } from './db_request';


const app = express()
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
  }));


app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    getAllMessages().then(res_db_messages => {
        res.render('index.ejs',{messages:res_db_messages});
    });
    
  
});

app.post('/',(req,res) => {
    let input = req.body
    addNewMessage(input.pseudo, input.gender, input.message);

    res.redirect('/');
})







// app.get('/test',)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})