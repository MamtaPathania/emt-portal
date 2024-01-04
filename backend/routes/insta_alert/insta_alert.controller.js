const { alertdetailsdata , datedetaildata, userlogindetails, userlogsdetails, infodetailsdata, monthdetailsdata } = require("./insta_alert.services")

const alertdetails=(req,res)=>{
   alertdetailsdata(req,(err,result)=>{
    if(err){
        console.log(err)
        res.status(400).json({error:err})
    }else{
        console.log(result);
        res.json({message:result});
    }
   })
}
const getdatedetails=(req,res)=>{
datedetaildata(req,(err,result)=>{
    if(err){
        console.log(err)
        res.status(400).json({error:err})
    }else{
        console.log(result);
        res.json({message:result})
    }
})
}
const getlogsdetails=(req,res)=>{

userlogsdetails(req, (err, result)=>{
    if(err){
        res.status(400).json(err)
        console.log("error",err)
    }else{
        console.log(result)
        res.json({message:result})
        
    }
})
}
const getinfodetails=(req,res)=>{
infodetailsdata(req,(err,result)=>{
    if(err){
        res.status(400).json(err)
        console.log("error",err)
    }else{
        res.json({message:result})
        console.log(result)
    }
})
}
const getmonthdetails=(req,res)=>{
monthdetailsdata(req,(err,result)=>{
    if(err){
        res.status(400).json(err)
        console.log("error",err)
    }else{
        console.log(result)

        res.json({message:result})
    }
})
}
const getlogindetails = (req, res) => {
    userlogindetails(req, (err, result) => {
        if(err){
            res.status(400).json(err)
            console.log(err)
        }else{
            res.json({message:result})
            console.log(result)
        }
    });
};

module.exports={alertdetails,getdatedetails,getlogindetails,getlogsdetails,getinfodetails,getmonthdetails}