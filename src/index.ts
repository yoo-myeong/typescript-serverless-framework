import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json('good')
})

app.listen(1234)