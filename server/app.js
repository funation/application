const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!t1621711',
    database: 'funation'
})

connection.connect();

app.listen(3000, ()=>{
    console.log("back server is on!!!")
})
app.get('/example', (req,res)=>{
    connection.query('SELECT nick FROM users WHERE snsId ="1573751384"', (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json({
                "result":rows
            })
        }
    })
})