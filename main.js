// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a 
// greeting message after a 2-second delay using setTimeout.
// import chalk from "chalk";
// async function fetchGreeting() {
//     await setTimeout(() => {
//         let  greeting =   " Hello Eid Mubarak! "
//     console.log(greeting)
//     return greeting
//     }, 2000)
// } ;
// fetchGreeting()
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
// function simulateTask(){
//     console.log(chalk.yellow("Task started..."))
//      setTimeout(() => {
//         console.log(chalk.green("Task Completed!"))
//      }, 1000);
// }
// simulateTask()
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
// let myPromise = new Promise((resolve, reject) => {
// setTimeout(() => {
//         console.log(chalk.yellow("promise pending..."))
//         console.log(chalk.green("promise resolved !"))
//         resolve("Data fetched successfully !")
//     }, 1000);
// })
// async function fetchData1() {
//     await  myPromise.then((response) => {
//         console.log(response)
//     })
// }
// fetchData1()
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
async function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Data Fetched Successfully!");
            }
            else {
                reject("Data fetch failed");
            }
        }, 1000);
    });
}
fetchWithError().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
export {};
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are CANCELLED.
// let fetchData=()=>{
//       return new Promise((resolve,reject)=>{
//         resolve(chalk.green("Data fetched successfully!"))
//     })
// }
// let processData=()=>{
//     return new Promise((resolve,reject)=>{
//         reject(chalk.red("Data processing failed..."))          
//     })
// }
// function executeSequentially(){
//     fetchData().then((response)=>{
//          console.log(response);processData().catch((err)=>{
//             console.log(err)
//     })
//     })
// }
// executeSequentially()
