const bootstrab = (app,express)=>{
    app.use(express.json())
    app.use("*",(req,res,next)=>{
    return res.json({message:"invalid routing"})
    })
    }
    export default bootstrab