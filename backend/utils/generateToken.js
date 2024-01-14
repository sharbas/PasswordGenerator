import jwt from 'jsonwebtoken'
let key='abc123'
const generateToken=(res,userId)=>{
    const token=jwt.sign({userId},key,{
     expiresIn:'30d',

    })
    console.log(generateToken,'generrrr');
    res.cookie('jwt',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV !=='development',//Use secure cookies in production
        sameSite:'strict', //Prevent CSRF attacks
        maxAge:30*24*60*1000, //30days
    })
    return token
}

export default generateToken