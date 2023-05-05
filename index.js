const express=require('express');
const cors=require('cors');
const app =express();
const port=process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users=[
    {id:1, name: 'Sabana', email: 'Sabana@gmail.com'},
    {id:2, name: 'Shabnur', email: 'Shabnur@gmail.com'},
    {id:3, name: 'Mousumi', email: 'mousumi@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send('Users management server is running');
});

app.get('/users',(req,res)=>{
    res.send(users);
});

app.post('/users',(req,res)=>{
    // console.log('post method hitting');
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
