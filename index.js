const express = require('express')
const mysql = require('mysql');

//Create express
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Shop_assign',
    port: '8889'
})

connection.connect((err)=>{
    if(err){
        console.log('Error Connecting : ', err)
        return;
    }
    console.log('database connect successful!');
});

//CREATE Product
app.post('/api/product', async (req, res) =>{
    const {gender, style, size, price, id} = req.body;
    
    try{
        connection.query(
            "INSERT INTO productTable(Gender, Style, Size, Price, id) VALUES(?,?,?,?,?)",
            [gender, style, size, price,id],
            (err, results, fields) =>{
                if (err){
                    console.log("ERROR please try again!!");
                    return res.status(400).send();
                }
                return res.status(201).json({ message : "ADD product success"});
            }
            
        )
    }catch(err){
        console.log(err);
        return res.status(500).send();
    }

})

//GET PRODUCT
app.get("/api/find", async(req, res)=>{
    try{
        connection.query("SELECT * FROM productTable", (err, results, fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })

    }catch(err){
        console.log(err);
        return res.status(500).send();

    }

})

//Filter BY SPEC PRODUCT
//By Gender
app.get("/api/find/spec/gender/:Gender", async(req, res)=>{
    const gen = req.params.Gender
    try{
        connection.query("SELECT * FROM productTable WHERE Gender = ?",[gen], (err, results, fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })

    }catch(err){
        console.log(err);
        return res.status(500).send();

    }

})

//By style
app.get("/api/find/spec/style/:Style", async(req, res)=>{
    const st = req.params.Style
    try{
        connection.query("SELECT *  FROM productTable WHERE Style = ?",[st], (err, results, fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })

    }catch(err){
        console.log(err);
        return res.status(500).send();

    }

})

//By size
app.get("/api/find/spec/Size/:Size", async(req, res)=>{
    const si = req.params.Size
    try{
        connection.query("SELECT * FROM productTable WHERE Size = ?",[si],(err, results, fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })

    }catch(err){
        console.log(err);
        return res.status(500).send();

    }

})
// END Filter

//CREATE Order

app.listen(3000, () => console.log('Server running!!'));