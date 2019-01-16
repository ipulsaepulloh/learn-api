const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

let footballPlayers = {
    next_id: 12,
    data: [
        {
            id: 1,
            name: "Courtois",
            position: "Goalkeeper"
        },
        {
            id: 2,
            name: "Sergio Ramos",
            position: "Centre Back"
        }, 
        {
            id: 3,
            name: "Varane",
            position: "Centre back"
        },
        {
            id: 4,
            name: "Marcelo",
            position: "Left Back"
        },
        {
            id: 5,
            name: "Carvajal",
            position: "Right Back"
        },
        {
            id: 6,
            name: "Luka Modric",
            position: "Centre Midfielder"
        },
        {
            id: 7,
            name: "Toni Kross",
            position: "Centre Midfielder"
        },
        {
            id: 8,
            name: "Marco Assensio",
            position: "Wing Left"
        },
        {
            id: 9,
            name: "Isco",
            position: "Wing Right"
        },
        {
            id: 10,
            name: "Garent Bale",
            position: "Second Striker"
        },
        {
            id: 11,
            name: "Karim Benzema",
            position: "Centre Forward"
        }
    ]
}

//Get all data of footballplayers

app.get("/footballPlayers", (req, res) => {
    res.send({
        count: footballPlayers.data.length,
        data: footballPlayers.data
    })
})

//Search players by name

app.get("/footballPlayers/search", (req, res) => {
    const queryName = req.query.name.toLowerCase()

    const foundPlayers = footballPlayers.data.find(players => {
        return players.name.toLowerCase().includes(queryName)
    })

    res.send({
        query: req.query,
        data: foundPlayers
    })
})

//Get players by Id

app.get("/footballPlayers/:id", (req, res) => {
    const hero = footballPlayers.data.find(players => {
        return players.id === Number(req.params.id)
    })

    res.send({
        data: players
    })
})

//Save new players

app.post("/footballPlayers", (req, res) => {
    const newPlayers = {
        id: footballPlayers.next_id,
        name: req.body.name,
        position: req.body.position
    }

    const newFootballPlayers = {
        next_id: footballPlayers.next_id + 1,
        data: footballPlayers.data.concat(newPlayers)
    }

    footballPlayers = newFootballPlayers

    res.send({
        newdata: newPlayers,
        data: footballPlayers
    })
})

//delete players by id

app.delete("/footballPlayers/:id", (req, res) => {
    const deletePlayers = footballPlayers.data.filter(
        item => item.id !== Number(req.params.id)
    )

    footballPlayers.data = deletePlayers

    res.send({
        data: footballPlayers.data
    })
})

app.listen(port, () => console.log("4000"))