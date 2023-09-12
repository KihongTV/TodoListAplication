import  express, { json }  from "express"
import  mysql  from "mysql"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
const port = 8800

app.use(json())
app.use(cors())
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reactappback'
})
connection.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('connected To Database')
})
app.get('/todo', (req, res) => 
{
connection.query("SELECT * FROM todo",(err,result,field)=>{
    if (err) throw err
    res.send(result);
})
})

app.post('/todo', (req, res) => {
    const { text } = req.body;
    
  
    const sql = "INSERT INTO todo (text) VALUES (?)";
    const values = [text];
  
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error(error);
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
      
    });
    
  });
  app.delete('/todo/:id', (req, res) => {
    
    const  id  = req.params.id;
    
    
    const sql = 'DELETE FROM todo WHERE id=(?)';
    const values = id;
  
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error(error);
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
    });
  });
  app.put('/todo/:id', (req, res) => {
    const { text } = req.body;
    const id=req.params.id
    
  
    const sql = "UPDATE todo SET text=?  WHERE id=?";
    const values = [text];
  
    connection.query(sql,[...values,id], (error, results, fields) => {
      if (error) {
        console.error(error);
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
    });
  });  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))