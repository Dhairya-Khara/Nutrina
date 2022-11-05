const express = require('express')
const cors = require('cors')

const app = express()
app.use(express())

app.get('/', (req, res)=>{
    res.send('yolo')
})

app.listen(8080, ()=>{
    console.log('server started on port 8080')
})