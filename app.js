document.getElementById('button1').addEventListener('click', getText)

function getText(){
    fetch('test.txt')
    .then(function(response){
        console.log(response)
    })
}