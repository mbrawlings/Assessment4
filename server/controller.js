let goals = []

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
        let {deleteThisGoal} = req.params
        for (let i = 0; i < goals.length; i++) {
            if (+deleteThisGoal === +goals[i].goalNumber) {
                goals.splice(i,1)
            }
        }
        res.status(200).send(goals)
    },
    backEndCross: (req, res) => {
        let {crossThisGoal} = req.params
        for (let i = 0; i < goals.length; i++) {
            if (+crossThisGoal === +goals[i].goalNumber) {
                goals[i].goalNumber = goals[i].goalNumber.split('').map(char => char + '\u0336').join('')
                goals[i].goal = goals[i].goal.split('').map(char => char + '\u0336').join('')
                goals[i].description = goals[i].description.split('').map(char => char + '\u0336').join('')
                goals[i].date = goals[i].date.split('').map(char => char + '\u0336').join('')
            }
        }
        res.send(goals)
    }

}