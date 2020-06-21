const express=require('express')
const app=express()
const multer=require('multer')


const storage = multer.diskStorage({
    destination:function(req, file , cb){
        cb(null , './uploads/')
    }, 
    filename:function(req, file , cb){
        cb(null ,  Date.now().toString()+file.originalname  )
    }
})

const upload =multer({storage:storage})


app.post('/upload' ,upload.single('file'), (req, res)=>{
    console.log(req.file)
    res.json({"file":req.file})
})






app.listen(5000, (req, res)=>{
    console.log('listening')
})