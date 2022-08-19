let goals = []
// globalId = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        let fortuneArr = ["In this world of contradiction, It’s better to be merry than wise.", "Meditation with an old enemy is advised.", "People find it difficult to resist your persuasive manner.", "The night life is for you.", "Tonight you will be blinded by passion."]

        let randomIndex1 = Math.floor(Math.random() * fortuneArr.length)
        let randomFortune = fortuneArr[randomIndex1]

        res.status(200).send(randomFortune)
    },
    createGoal: (req, res) => {
        let {goal, description, date, goalNumber} = req.body

        let newGoal = {
            goal,
            description,
            date,
            goalNumber
        }
        goals.push(newGoal)
        res.status(200).send(goals)
        // globalId++
        console.log(goals)
    },
    getSuperpower: (req, res) => {
        let powerArr = ["Superspeed", "Flying", "Time travel", "Teleportation", "Telepathy"]

        let randomIndex1 = Math.floor(Math.random() * powerArr.length)
        let randomPower = powerArr[randomIndex1]

        res.status(200).send(randomPower)
    },
    getGift: (req, res) => {
        let giftArr = ["A chicken", "$25 gift card", "A new car", "A handful of raspberries", "2 chickens"]

        let randomIndex1 = Math.floor(Math.random() * giftArr.length)
        let randomGift = giftArr[randomIndex1]

        res.status(200).send(randomGift)
    },
    deleteGoal: (req, res) => {
        // let index = goals.findIndex((goal) => {
        //     return goal.id === +req.params
        // })
        for (let i = 0; i < goals.length; i++) {
            console.log(goals[i].goalNumber)
            console.log(`req.param ${+req.params}`)
            if (+req.params === +goals[i].goalNumber) {
                goals.splice(goals[i],1)
            }
        }
        // goals.splice(index,1)
        res.status(200).send(goals)
    }

}