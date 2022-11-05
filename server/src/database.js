const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const connectionURL = "mongodb://127.0.0.1:27017/Nutrina"
const bcrypt = require('bcryptjs')


let Schema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})

// find user
Schema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email: email})
    if(!user){
        throw new Error("Unable to find user")
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        throw new Error("Invalid email or password")
    }

    return user
}

// generate token
Schema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'shawty eat')

    await user.save()

    return token
}

let User = mongoose.model('User', Schema)

//connection to database
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = User