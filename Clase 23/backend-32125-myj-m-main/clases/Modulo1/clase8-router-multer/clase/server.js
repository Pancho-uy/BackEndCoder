const express = require('express')
const multer = require('multer')
const { json, urlencoded } = require('express')

const app = express()

app.use(urlencoded({ extended: true }))

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        // console.log(file)
        cb(null, file.originalname + '-' + Date.now())    
    }
})

let upload = multer({ storage: storage })

app.post('/uploadfile', upload.single('myfile'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

app.post('/uploadmultiple', upload.array('myfiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// listen port 4000
app.listen(4000, () => {
    console.log('Server is running on port 4000')
}) 


