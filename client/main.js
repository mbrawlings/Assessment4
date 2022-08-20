const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const formSubmit = document.getElementById("form")
const deleteSubmit = document.getElementById("deleteForm")
const superpowerBtn = document.getElementById("superpowerButton")
const giftBtn = document.getElementById("giftButton")

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
    document.getElementById('goal-section').innerHTML = ''
    let goalObj = {
        goalNumber: document.getElementById("goalNumber").value,
        goal: document.getElementById("goal").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value
    }
    console.log(goalObj)
    axios.post("http://localhost:4000/api/createGoal/", goalObj)
    .then(response => {
        let data = response.data
        printToBrowser(data)
    }) 
    document.getElementById("goalNumber").value = ''
    document.getElementById("goal").value = ''
    document.getElementById("description").value = ''
    document.getElementById("date").value = ''
}

const getSuperpower = () => {
    axios.get("http://localhost:4000/api/superpower/")
    .then(response => {
        let data = response.data
        alert(data)
    })
}

const getGift = () => {
    axios.get("http://localhost:4000/api/gift/")
    .then(response => {
        let data = response.data
        alert(data)
    })
}

//  couldn't get this to work properly... :(
function deleteGoal(event) {
    event.preventDefault()
    let deleteThisGoal = document.getElementById('deleteGoal').value
    document.getElementById('goal-section').innerHTML = ''

    axios.delete(`http://localhost:4000/api/deleteGoal/${deleteThisGoal}`)
    .then(response => {
        let data = response.data
        printToBrowser(data)
    })
    document.getElementById('deleteGoal').value = ''
}

function printToBrowser(data) {
    for (let i = 0; i < data.length; i++) {
        let loggedGoal = document.createElement('p')
        loggedGoal.innerHTML = `
        <p>
        <span>#: ${data[i].goalNumber}</span><br>
        <span>Goal: ${data[i].goal}</span><br>
        <span>How: ${data[i].description}</span><br>
        <span>Achieve by: ${data[i].date}</span>
        </p>
        `
        document.getElementById('goal-section').appendChild(loggedGoal)
    }
}
// couldn't get this to work properly... :( 

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
formSubmit.addEventListener('submit', createGoal)
superpowerBtn.addEventListener('click', getSuperpower)
giftBtn.addEventListener('click', getGift)
deleteSubmit.addEventListener('submit', deleteGoal)