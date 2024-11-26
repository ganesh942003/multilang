const express=require('express')
const app=express()
const cors=require('cors')
const {I18n}=require('i18n')
const path=require('path')

const i18n =new I18n({
    locales:['en','fr'],
    directory:path.join(__dirname,'message'),
    defaultLocale:'en'
})
app.use(cors())
app.use(i18n.init)

app.get('/',(req,res)=>{
    console.log("api calling")
    res.send({message:res.__('Message'),home:res.__('home')})
    
})

app.listen(3001,()=>{
    console.log("server is running in port 3001")
})