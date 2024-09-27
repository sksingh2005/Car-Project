const {  JWT_SECRET } = require("./config");
const jwt=require('jsonwebtoken')
 function authMiddleware(req,res,next){
    const tok=req.headers.authorization;
    if(!tok || !tok.startsWith('Bearer')){
        return res.status(403).json({});
    }
    const token=tok.split(' ')[1];
    try{
        const verification=jwt.verify(token,JWT_SECRET);

        req.userId=verification.userId;
        next();
    }
    catch(err){
        return res.status(403).json({});
    }
};

module.exports={
    authMiddleware
}