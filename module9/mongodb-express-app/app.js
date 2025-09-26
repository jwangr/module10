import express from 'express';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { connectMongoose } from './dbConnect.js';
import likeRoutes from './routes/likeRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();
const port = process.env.PORT || 8080;

async function startServer() {
    await connectMongoose();
}

// parses requests of content-type application/json
app.use(express.json())

app.get('/', express.static('public'))
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/likes', likeRoutes)
app.use('api/comments', commentRoutes)


app.listen(port, () => {
    console.log(`Example app listening at
http://localhost:${port}`)
})

startServer();