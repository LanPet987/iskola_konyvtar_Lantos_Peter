const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'konyvtar'
});
app.get('/',(req,res)=>{
    res.send("fuss forest, fuss")
})

app.get('/konyvek', (req, res) => {
    const sql = 'SELECT * FROM konyv';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.post('beszur', (req, res) =>
{
    const { cim, szerzo_ID, tID }=req.body
    const sql = 'Insert into konyv (cim, szerzo_ID, tId) values (?, ?, ?)'
    db.query(sql, [cim, szerzo_ID, tID], (err, results) => {
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.json({message: 'könyv sikeresen hozzáadva'});

    });
});



app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});
