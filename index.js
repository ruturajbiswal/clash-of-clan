
const clashApi = require('clash-of-clans-api')
COC_API_TOKEN=""
let client = clashApi({
  token: COC_API_TOKEN // Optional, can also use COC_API_TOKEN env variable
});

async function showPlayerInfo(tag) {
  try {
    const playerInfo = await client.playerByTag(tag)
    console.log("this is the player info:", playerInfo)

  } catch (error) {
    console.error(error)
  }
}

showPlayerInfo('#GQJC0UCG')