//dados da aplicação
const express = require('express')
const server = express()

const {pageLanding,
    pageStudy,
    pageGiveClasses, saveClasses} = require('./pages')


//config nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})



//config arquivos estaticos(css,scripts,images)

server
.use(express.urlencoded({ extended: true})) //receber os dados do req.body
.use(express.static("public"))

//rotas da aplicação
.get("/",pageLanding)    
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)

.listen(5500)