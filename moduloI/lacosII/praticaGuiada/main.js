const bimestreI = [10, 3.5, 8, 7.9];
const bimestreII = [9.2, 5.8, 7, 9];
const bimestreIII = [4, 7, 3, 2];
const bimestreIV = [10, 9, 3, 6];

const yearResults = [bimestreI, bimestreII, bimestreIII, bimestreIV];



// for(let i = 0; i < yearResults.length; i++) {
//     let sum = 0;
//     // console.log(yearResults[i]);
//     for(let m =  0; m < yearResults[i].length; m++) {
//         // console.log(yearResults[i][m]);
//         sum += yearResults[i][m];
//     }
//     console.log(`A soma das notas do bimestre ${i+1} é ${sum}| A média do bimestre ${i+1} é ${sum/yearResults[i].length}`);
// }

for(let i in yearResults) {
    const bimonthlyValue = +i +1;
    let sum = 0;
    for(let grades of yearResults[i]) {
        sum += grades
    }
    console.log(`A soma das notas do bimestre ${bimonthlyValue} é ${sum} | A media do bimestre ${i+1} é ${sum/bimonthlyValue}`);
}