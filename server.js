import express from 'express';
import sum from "./sum.js";
const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on port man ${port}`);
});
app.get("/homem",async (req, res) => { 
    res.json({
        msg: "Hello World"
    });
})
app.get("/getSum/:a/:b",async (req, res) =>{
    const {a,b} = req.params;
    res.json({
        ans: sum(parseInt(a),parseInt(b))
    });

});