console.log("file connected successfully");

function makePink()
{
    document.body.style.backgroundColor = 'pink';
}

function makeGreen ()
{
    document.body.style.backgroundColor = 'Green';
}

// option 3

const makePurple = document.getElementById('btn-make-purple');
// console.log(makePurple);
makePurple.onclick = makeBgPurple;
function makeBgPurple()
{
    document.body.style.backgroundColor = 'purple'
}

document.getElementById('btn-make-yellow')
    .addEventListener('click',function(){
        document.body.style.backgroundColor = 'yellow'
    })