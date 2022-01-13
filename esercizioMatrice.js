const matrice = new Array(10).fill(0).map(item =>(new Array(10).fill(0)))
for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice.length; j++) {
        if (i==j){
            matrice[i][j]=i
        }
    }
  }
console.log(matrice)