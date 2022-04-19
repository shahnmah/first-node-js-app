const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hello Node')
});
const users = [
    {id:1, name: 'Ronaldo', email: 'ronaldo@acb.con', phone: '12457547'},
    {id:2, name: 'Messi ', email: 'messi@acb.con', phone: '12457544'},
    {id:3, name: 'Kaka', email: 'kaka@acb.con', phone: '124541547'},
    {id:4, name: 'Marcelo', email: 'marcelo@acb.con', phone: '452457547'},
    {id:5, name: 'Javi', email: 'javi.con', phone: '124574547'},
    {id:6, name: 'Ozil', email: 'ozil@acb.con', phone: '125857547'},
    {id:7, name: 'Casias', email: 'casias@acb.con', phone: '125857511'},
]
app.get('/users', (req, res) =>{
    if(req.query.name){
       const search = req.query.name.toLowerCase();
       const match = users.filter(user => user.name.toLowerCase().includes(search))
       res.send(match)
    }
    else{
        res.send(users)
    }
})
app.get('/users/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id) 
    res.send(user)
})
app.post('/users', (req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.get('/fruits', (req, res)=>{
    res.send(['mango', 'banana', 'orange'])
})
app.listen(port, ()=>{
    console.log('get from port', port)
});