let goals = []
globalId = 0

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
        let {goal, description, date} = req.body

        let newGoal = {
            id: globalId,
            goal,
            description,
            date
        }
        goals.push(newGoal)
        res.status(200).send(goals)
        globalId++
    }

}