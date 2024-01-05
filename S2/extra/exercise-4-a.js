function findArrayIndex(find,text) {
    for (let i = 0; i < find.length; i++) {
        if(find[i]===text) {
            console.log(i);
            return i
        }
        
    }
}

// ejemplos
const array1=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const array2=['pepe', 'pepito', 'pepa', 'pepu'];
const text1 = 'Ajalote';
const text2 = 'pepe';

findArrayIndex(array1,text1);
findArrayIndex(array1,text2);
findArrayIndex(array2,text2);