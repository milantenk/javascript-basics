/* Creating a promise */
const successPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("PromiseDone"), 1000);
});

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("PromiseReject"), 4000);
});

const randomPromise = new Promise((resolve, reject) => {
    const x = Math.floor((Math.random() * 10) + 1);
    setTimeout(() => x > 5 ? resolve("RandomSuccess") : reject("RandomReject"), 500);
});

/* Consuming a promise */
successPromise
    .then(fulfillResult => console.log(fulfillResult))
    .catch(errorResult => console.error(errorResult))
    .finally(() => console.info('finally in success'));
rejectedPromise
    .then(fulfillResult => console.log(fulfillResult))
    .catch(errorResult => console.error(errorResult))
    .finally(() => console.info('finally in error'));
randomPromise.then(
    fulfillResult => console.log(fulfillResult),
    errorResult => console.error(errorResult));

async function AsyncAwaitDemo() {
    const sucessResult = await successPromise;
    console.log(sucessResult);

    try {
        const promiseResult = await rejectedPromise;
        console.log(promiseResult);
    } catch(errorResult) {
        console.error(errorResult);
    } finally {
        console.log('async-await finally')
    }
}
AsyncAwaitDemo();

// microtask queue vs macrotask queue (!)