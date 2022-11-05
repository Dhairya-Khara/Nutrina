const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const bodyParser = require('body-parser')

const User = require('./database')


// create application/json parser
const jsonParser = bodyParser.json()

const app = express()
app.use(cors())

// create a user
app.post('/createUser', jsonParser, async (req, res) => {
    const email = req.body.email
    const password = await bcrypt.hash(req.body.password, 8)
    console.log(email)
    const user = new User({ email, password })

    await user.save()
    res.send(user)
})

// log the user in
app.post('/loginUser', jsonParser, async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ token })
    }
    catch (e) {
        res.status(403).send()
    }
})

app.listen(8080, () => {
    console.log('server started on port 8080')
})