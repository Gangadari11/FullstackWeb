import app  from "./server.js";
import mongodb from "mongodb"
import ReviewsDAD from "./dao/ReviewsDAD.js"
import { Client } from "undici-types";

const MongoClient = mongodb.MongoClient
const mongo_username = process.env["MONGO_USERNAME"]
const mongo_password = process.env["MONGO_PASSWORD"]
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.ra5lj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)

.catch(err => {
    console.error(err.stack)
    process.exit(1)

})
.then(async client => {
    app.listen(port, () => {
        console.log('listening on port ${port}')
    })
})