document.getElementById('button1').addEventListener('click', getText)

function getText(){
    fetch('test.txt')
    .then(function(response){
        return response.text()
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('output').innerHTML = data
    })
    .catch(function(error){
        console.log(error)
        document.getElementById('output').innerHTML = error
    })
}