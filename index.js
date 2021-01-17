
function sohoanhao(input) {
    let arr = []
    for(let i = 1; i < input; i++) {
        if(input % i == 0) {
            arr.push(i)
        }
    }
    return arr.reduce((a,b)=>a+b)
    
}
sohoanhao(28)
