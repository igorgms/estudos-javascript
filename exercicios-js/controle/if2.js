function teste1(num){
    if (num > 7)
        console.log(num)//é possivel realizar operação com o if sem colocar o bloco porém além do mesmo não ser uma boa prática, somente o primeiro elemento após ele irá ser detectado
        console.log('Final')
}

teste1(5)
teste1(8)


function teste2(num){
    if(num > 7){
        console.log(num)
    }
}

teste2(6)
teste2(8)