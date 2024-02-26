const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');
const {Pool} = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'usercredential',
  password: 'Banvi@123',
  port: 5432,
});

pool.connect((err, client, done)=>{
    if(err){
        console.log('Unable to connect to the database:', err);
    }else{
        console.log('Connected to the database');
        done();
    }
})

app.all('register', async(req, res)=>{
    const {Id, Firstname, Lastname, Email, Mobile, Password} = req.body;

    const hashedPassword = await bcrypt.hash(Password, 10);

    try{
        const result = await pool.query(
            'INSERT INTO registration (id,firstname, lastname, email, mobile, password) VALUES($1, $2, $3, $4, $5,$6) RETURNING id',[Id,Firstname,Lastname, Email, Mobile, hashedPassword]
        );
        const userId = result.rows[0].id;
        const token = jwt.sign({ userId }, 'your_secret_key', { expiresIn: '1h' });
        res.json({token});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})