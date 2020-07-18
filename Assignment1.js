/* 
For loop
*/

for (let i = 1; i <= 100; i++) 
{
	let a  = i % 3  === 0;
	let b = i % 5 === 0;
	console.log(`${a} ? (${b} ? 'FizzBuzz' : 'Fizz') : ${b} : 'Buzz' : ''`)
}

