import express from 'express';
import { client } from '@repo/db/client';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hi There"
    })
})

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data: {
            username,
            password
        }
    })
    res.json({
        message: "Signup successful",
        id: user.id
    })

})

app.listen(4000, () => {
    console.log('listening on port 4000');
})