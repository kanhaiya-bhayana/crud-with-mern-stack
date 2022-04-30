const express = require("express");
const app = express();
const crudObj = require("./model/crudCollec.model");
const port = 3001 || process.env.PORT;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.post("/insert", (req, res) => {
  const name = req.body.name;
  const dept = req.body.dept;
  const salary = req.body.salary;
  let myRecord = new crudObj({ name: name, dept: dept, salary: salary });

  try {
    myRecord.save();
    // console.log("Inserted");
    res.json(myRecord);
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", (req, res) => {
  crudObj.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.get("/editemp/:id",(req, res)=>{
  const id = req.params.id;
  // console.log(req.body);
  crudObj.findById(id, (err,doc)=>{
    if(err){
      res.send(err);
    }
    else{
      res.send(doc);
    }
    // console.log(doc);
  })
})

app.post("/:id",(req, res)=>{
  const id = req.params.id;
  // console.log(req.body);
  crudObj.findOneAndUpdate({_id:id},req.body, {new:true}, (err,doc) =>{
    if(err){
      res.send(err);
    }
    else{
      res.send(doc);
    }
  })
})

app.delete("/delete/:id",(req,res) =>{
  const id = req.params.id;
  // console.log(id);
  crudObj.findByIdAndRemove(id,(err,doc) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send("deleted");
    }
  })
  
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
