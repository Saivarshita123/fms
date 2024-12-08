import express from 'express';
import bodyParser from 'body-parser';
import DBConnector from './connections.js';
import loanRequest from './model/loan_request.js';
import Profile from "./model/profile.js";
import cors from "cors";


const url = 'mongodb://127.0.0.1:27017/loan';
DBConnector(url);
const app =express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
   res.send('hello there');
});


app.get('/home',(req,res)=>{
    res.send('hello home');
 });

app.post('/loanform',async (req,res)=>{
     const body=req.body;
     console.log(body);
     const newRequest=new loanRequest(req.body);
     await newRequest.save();
     res.send('ok');
});
app.post("/update-profile", async (req, res) => {
    try {
      const profileData = req.body;
      const newProfile = new Profile(profileData);
      await newProfile.save();
      res.status(201).send({ message: "Profile created successfully" });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });
  

app.listen(4000,()=>{
    console.log('server is started');
});