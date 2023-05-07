const COC_API_TOKEN='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRkNDg5Y2Y3LThiZDktNDk2MS1iZGU5LWI5ODEzYjYwZTkzZSIsImlhdCI6MTY4MzQ3MDgwMSwic3ViIjoiZGV2ZWxvcGVyLzZhZDJkOTI0LTZkNzYtMDkxMC1jYjdhLThjMzg3ZWZhMWM5ZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1Ny40MS4xOTkuOTgiXSwidHlwZSI6ImNsaWVudCJ9XX0.NbAAxytNh77e62CMvjSZetzHxtK4dMakz3Da_VDE4X8q8Y2z3Q1827_PMGJkMcZKWeyqwXKMQmMUhfB4LOyiXw' 
const clashApi = require('clash-of-clans-api')

let client = clashApi({
  token: COC_API_TOKEN // Optional, can also use COC_API_TOKEN env variable
});

async function showPlayerInfo(tag) {
  try {
    const playerInfo = await client.playerByTag(tag)
    console.log("this is the player info:", playerInfo)
    document.getElementById('main').innerHTML = playerInfo

  } catch (error) {
    console.error(error)
  }
}

showPlayerInfo('#GQJC0UCG')