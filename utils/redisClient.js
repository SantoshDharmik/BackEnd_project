import {createClient} from "redis"
import dotenv from "dotenv"

dotenv.config({path: "./config.env"})

const redisClient =  createClient ({
    url:process.env.REDIS_URL
})

redisClient.on("error", (err) => {
    console.log("redis error : ", err)
})

try {
    await redisClient.connect();
    console.log("successfully conected to redis client !")
} catch(err){
     console.log("unable to connect with redis client : ", err)
}
export {redisClient}