const express = require('express')
const app = express()
const clashApi = require('clash-of-clans-api')
const COC="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjcxY2U3NTc5LTQzYjAtNDkzNy04YmI2LTk0NTdmZDM4NTgzMCIsImlhdCI6MTY4MzQ0Njg2OSwic3ViIjoiZGV2ZWxvcGVyLzZhZDJkOTI0LTZkNzYtMDkxMC1jYjdhLThjMzg3ZWZhMWM5ZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjMuMjM4LjExMi4zNyIsIjMuMjI0LjEyLjEwMCIsIjU0LjE2NC4zOS4xODQiLCIzNC4yMjUuMjExLjYzIiwiNDQuMjA1LjgyLjE4MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.4SUbNlqVmwcp6pZtDdIN2gfB00Jgson-I8I2wHjJHESOezbL-Y6pwA5HPYdGGNDIaQQAHqWAQ3VINq2wZ-Gceg"

let client = clashApi({
  token: COC // Optional, can also use COC_API_TOKEN env variable
});

async function showPlayerInfo(tag) {
  try {
    const playerInfo = await client.playerByTag(tag)
    // console.log("this is the player info:", playerInfo)
    app.get('/',(req,res)=>{
  res.send(playerInfo)
})

  } catch (error) {
    console.error(error)
  }
}

showPlayerInfo('#9cq8r2j89')
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.json)





app.listen(process.env.PORT||3000,()=>console.log(" SERVER ON "+ process.env.PORT))