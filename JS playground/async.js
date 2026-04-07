console.log("step 1");
console.log("step 2");
console.log("step 3");
async function wait(params) {               // Runs in background
    const data = await "step 4";            // Example run cards in background
    console.log(data);                      // because if the function is not async then after api response the next line will excute so we give this async function to run in background and run the next line after fetch the async function
}
wait();
console.log("step 5");
