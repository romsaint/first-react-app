require('dotenv').config()
const express = require('express')
const bcrypt = require('bcryptjs')
const path = require('path')
const compression = require('compression')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const Users = require('./schemas/userSchema')
const Posts = require('./schemas/postsSchema')

const {verifyToken} = require('./utils/verifyToken')


async function connectMongo(){
    await mongoose.connect('mongodb://localhost:27017/mern')
}
connectMongo()


const app = express()


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173' // Разрешаем запросы с этого домена
}));
app.use(compression())
app.use(express.urlencoded({extended: true}))



app.get('/is-auth', verifyToken, async (req, res) => {
    if(req.user){
        const user = await Users.findOne({username: req.user}, {username: 1})

        if(user){
            return res.json({ok: true, user})
        }
        return res.json({ok: false})
    }
})


app.post('/login-api', async (req, res) => {
    const {name, password} = req.body


    if(name && password){
        const isUserExists = await Users.findOne({username: name})

        if(isUserExists){
            return res.json({message: 'User already exists', ok: false})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const createdUser = await Users.create({
            username: name,
            password: hashedPassword
        })

        const token = await jwt.sign({name}, process.env.SECRET_JWT)
        
        res.json({ok: true, token, createdUser: {username: createdUser.username, _id: createdUser._id}})
    }else{
        res.json({ok: false, message: 'Provide the data'})
    }
})

app.post('/create-post-api', async (req, res) => {
    const {title, additionalInfo} = req.body

   try{
        if(!title || !additionalInfo){
            return res.json({ok: false, message: 'Provide the data'})
        }

        const createdPost = await Posts.create({
            title,
            additionalInfo
        })
 
        return res.json({ok: true, message: "Post was created.", createdPost})
   }catch(e){
    console.log(e)
    return res.json({ok: false})
   }
})

app.listen(5000)