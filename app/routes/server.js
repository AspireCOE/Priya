const express = require('express');
const bodyParser = require('body-parser');

const axios=require('axios');
const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/submit', (req, res) => {
    const { username, password, mobile, email } = req.body;
    const userdata = {
        username,
        password,
        mobile,
        email
    };

    axios.post("http://localhost:3000/users", userdata)
        .then(response => {
            console.log("User data saved successfully");
            res.send("User data saved successfully");
        })
        .catch(error => {
            console.error("Error saving user data:", error.message);
            res.status(500).send("Error saving user data");
        });
});

app.get('/getuser', (req, res) => {
    axios.get("http://localhost:3000/users")
        .then(dbresponse => {
            res.json(dbresponse.data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error fetching user data");
        });
});

app.post("/changePassword",(req,res)=>{

    const{id,pass}=req.body;
    const password={
        pass
    };
     
    console.log(password);
    
    axios.patch(`http://localhost:3000/users/${id}`,password)
    .then(dbresponse=>{
        res.send("password updated")
    })
    .catch(err=>{
        console.log(err)
 
    });
})
    



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


