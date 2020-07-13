function bhaskara(a, b, c){
    let delta = (b ** 2) - (4 * a * c)
    let x1
    let x2
    if (delta < 0){
        return 'Delta é negativo!'
    }else {
        x1 =  ((-b) + Math.sqrt(delta)) / (2 * a)
        x2 = ((-b) - Math.sqrt(delta)/ (2 * a)) 
    }
    
    let res = [x1, x2]

    return res

}

console.log(bhaskara(1, -3, -10))
console.log(bhaskara(1, 2, 1))