const express= require ('express')
const app= express()
app.use(express.json())

let array = []
app.post('/send',(req,res)=>{


array.push(req.body.data)

console.log(array);


})

app.get("/dash", (req,res)=>{
    res.json({
        data:array,
        success:true
    })
})

app.listen(4000,()=>{

    console.log('server is running');

})