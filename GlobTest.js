function foo(arrays) {
    if (arrays.length <= 1)  return arrays;
    
    arrays.sort((x, y) => x[0] - y[0]);

    var fusedArrays = [];
    var element = arrays[0];
  
    for (let i = 1; i < arrays.length; i++) {    
      if (arrays[i][0] <= element[1]) { 
        if (element[1] < arrays[i][1]) element[1] = arrays[i][1];
      }
      else {
        fusedArrays.push(element);
        element = arrays[i];
      }
    }     

    fusedArrays.push(element);
    return fusedArrays;
}
    
// Test de la fonction
const intervals = [[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]];

// Q3: combien de temps vous avez implémenté cette fonction 
console.time("Le temps pour implementer la function foo");
const Fusedinterval = foo(intervals);
console.timeEnd("Le temps pour implementer la function foo"); // ≈ 0.2ms

// Affichage
console.log(Fusedinterval); // [[1, 10], [15, 20]]