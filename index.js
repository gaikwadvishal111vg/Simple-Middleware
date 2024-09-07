import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan(':method :method :url :status :res[content-length] - :response-time ms'));
app.get('/', (req , res) => {
    console.log("Vishal");
    res.status(200);
    
})
app.post('/log', (req, res) => {
    res.sendStatus(404);

})
app.listen(3000, () =>{
    console.log("serever connected");
    
});