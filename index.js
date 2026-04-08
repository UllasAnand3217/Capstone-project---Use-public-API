import express from "express";
import axios from "axios";

const app=express();
const port=3000;
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
   res.render("index.ejs", { content: "API Response." });
});

app.get("/spells", async(req, res)=>{
    try{
        const response= await axios.get("https://hp-api.onrender.com/api/spells");
        res.render("index.ejs", { output: JSON.stringify(response.data, null, 2)});
    } catch (error){
        res.send("Error fetching data")
    }
    }
);

app.get("/characters", async(req, res)=>{
    try{
        const response= await axios.get("https://hp-api.onrender.com/api/characters");
        res.render("index.ejs", { output: JSON.stringify(response.data, null, 2)});
    } catch (error){
        res.send("Error fetching data")
    }
    }
);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

//