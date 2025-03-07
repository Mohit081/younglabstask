const express = require('express')
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
    cors()
  );

app.get('/api/greet',(req,res)=>{
    console.log(res.query)
    const name = req.query.name;
    if(!name){
        return res.status(400).json({
            error:"name is required"
        })
    }

    res.json({
        message:`Hello,${name}! Welcome to younglabs.`
    })
});

app.listen(PORT,() => {
    console.log(`server is running at on http://localhost:${PORT}`)
})