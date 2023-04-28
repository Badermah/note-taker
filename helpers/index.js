const fs = require("fs")

async function getDBNotes(){
    const dbNotes = await fs.readFileSync("./db/db.json", "utf-8")
    return JSON.parse(dbNotes)
}

module.exports = getDBNotes