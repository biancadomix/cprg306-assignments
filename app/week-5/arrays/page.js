
export default function Page(){

    let emptyArray = [];
    let numbers = [5,3,9,1,4];
    //numbers.push(12);
    //numbers.pop();
    //numbers.splice(1,3);

    let doubled = numbers.map( (num) => num * 2 ); //this is all array
    let lessThanFive = numbers.filter( (num) => num < 5 );
    let moreNumbers = [6,7,8];
    let allNumbers= numbers.concat(moreNumbers);
    let numbersToBeSorted = [...allNumbers]; //called defensive copy it prevents the code to be mutated and retains the code
    //let sortedNumbers = allNumbers.toSorted(); //this line is still new that visual studio wont recognize
    // sort is a mutator this although it will adapt it eventually but it will mutate the previous and advanced code so be careful to copy and paste, make sure to use it in the test or have another copy of the code
    let sortedNumbers = allNumbers.sort ( (a,b) => a- b );
    let sum = allNumbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
        );
        //the result will be 43
        //if you put 7 on it instead of 0 it will become 50


        //let newNumbers = [numbers [0], numbers [1]]; //looks silly there must be an alternative
        let newNumbers = [...numbers , 12, 23, 34, ... moreNumbers]; //looks better and much more simpler

            let orginalStudent = {
                name: 'domix',
                age: 19,
                email: 'domix@sait.ca',

            }
            let newStudent = {
                ... originalStudent,
                phone: '1234556'
            }

            let studentCopy = {...originalStudent}; //this does not copy but it references the original student //the curly brackets will make  this an object makes copy super easy

            studentCopy.name = 'viclei'; //again defensive copy, it will retain the original code but add the other new info

    return(
        <main>
            <p>{numbers.join ( ' | ')}</p>
            <p>{doubled.map(  (num) => `$(num),`)}</p>
            <p>{lessThanFive.join (' , ') }</p>
            <p>{allNumbers.join (' , ') }</p>
            <p>{sortedNumbers.join (' , ') }</p>
            <p>{sum} </p>
            <p>{newNumbers.join (' , ') }</p>
            <p>{JSON.stringify (originalStudent) }</p>
            <p>{JSON.stringify (newStudent) }</p>
        </main>
    )
}``