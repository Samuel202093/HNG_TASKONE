const express = require("express");
const cors  = require("cors");
const port = process.env.PORT || 5000
const app = express();

app.use(express.json());

app.use(cors());

const userData = {
    email: 'johndoe@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Samuel202093/HNG_TASKONE.git"
}

app.get('/', (req, res)=>{
    res.status(200).json(userData)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});