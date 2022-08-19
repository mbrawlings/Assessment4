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
    document.getElementById('goal-container').innerHTML = ''
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
        let str = JSON.stringify(data)
        const p = document.createElement('p')
        p.textContent = str
        document.getElementById('goal-container').appendChild(p)
        console.log(str)
    }) 
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

/* couldn't get this to work properly... :(
function deleteGoal(id) {
    // event.preventDefault()
    let deleteThisGoal = document.getElementById('deleteGoal').value
    document.getElementById('goal-container').innerHTML = ''
    axios.delete(`http://localhost:4000/api/deleteGoal/${deleteThisGoal}`)
    .then(response => {
        let data = response.data
        console.log('delete')
        let str = JSON.stringify(data)
        const p = document.createElement('p')
        p.textContent = str
        document.getElementById('goal-container').appendChild(p)
        console.log(str)
        console.log('end')
    })
}
couldn't get this to work properly... :( */

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
formSubmit.addEventListener('submit', createGoal)
superpowerBtn.addEventListener('click', getSuperpower)
giftBtn.addEventListener('click', getGift)
deleteSubmit.addEventListener('submit', deleteGoal)