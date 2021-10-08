document.getElementById('button1').addEventListener('click', getText)

// getting local text file data
function getText(){
    fetch('test.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerHTML = data
    })
    .catch(error => {
        document.getElementById('output').innerHTML = error
    })
}

document.getElementById('button2').addEventListener('click', getJson)

// getting local json file data
function getJson(){
    fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        let output = ''
        data.forEach(post => {
            output += `<li>${post.title}</li>`
        })
        document.getElementById('output').innerHTML = output
    })
    .catch(error => {
        document.getElementById('output').innerHTML = error
    })
}

document.getElementById('button3').addEventListener('click', getExternal)

// getting external API data
function getExternal(){
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let output = ''
        data.forEach(user => {
            output += `<li>${user.login}</li>`
        })
        document.getElementById('output').innerHTML = output
    })
    .catch(error => {
        document.getElementById('output').innerHTML = error
    })
}

