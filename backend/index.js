const express = require('express')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))


const ProjectID = "64a21e64-c130-4fa3-80cc-115426fd64a4"
const PrivateKey = "5e1419d0-8b85-4883-954f-a743b2855234"


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": PrivateKey } }
        )
        return res.status(r.status).json(r.data)
    } catch (error) {
        return res.status(e.response.status).json(e.response.data)
    }
})




app.listen(3001, () => {
    console.log('Running...');

})

app.get('/', (req, res) => {
    res.send('Heloo...')
})
