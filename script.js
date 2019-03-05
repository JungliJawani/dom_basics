let inpN = document.getElementById('num')
let btnPrint = document.getElementById('print')
let ulFizzBuzz = document.getElementById('fizzbuzzlist')

btnPrint.onclick = function()
{
    let start = new Date().getTime()
    let N = inpN.value
    for(let i=1; i<=N; i++)
    {
        // let html = ''   comes with the most optimized way
        let print = ''
        if( i % 3 == 0) print += 'fizz'
        if( i % 5 == 0) print += 'buzz'
        if( print.length == 0) print = i
        //html +=  `<li>${print}</li>`   most optimized but not working why?
        console.log(print)             // it is also optimized 
        ulFizzBuzz.innerHTML +=  `<li>${print}</li>`  //"<li>" + i +"</li>" // it is least optimized
    }
    //ulFizzBuzz.innerHTML = html   comes with the most optimized way
    console.log(new Date().getTime() - start)
}