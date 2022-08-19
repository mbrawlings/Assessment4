const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const formSubmit = document.getElementById("form")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(response => {
        let data = response.data
        alert(data)
    })
}

function createGoal(event) {
    event.preventDefault()
    // console.log('hey')
    let goalObj = {
        id: 0,
        goal: document.getElementById("goal").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value
    }
    console.log(goalObj)
    axios.post("http://localhost:4000/api/createGoal/", goalObj)
    .then(response => {
        let data = response.data
        console.log(data)
    }) 
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
formSubmit.addEventListener('submit', createGoal)