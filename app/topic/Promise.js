// Promise explanation
const fetchData = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data fetched SuccessFully");
  } else {
    reject("Something went wrong");
  }
});

fetchData
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Is Promise synchronous or asynchronous?
// Answer:
// “Creating a Promise is synchronous, but the execution of .then() and .catch() is asynchronous and goes to the microtask queue.

// now write this with async/await
const fetchDataa = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data fetch successfully");
  } else {
    reject("Something went wrong");
  }
});
const getData = async () => {
  try {
    const res = await fetchDataa;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getData();

// Why prefer async/await over .then()?
// Answer:
// “Async/await improves readability, makes error handling easier with try/catch, and avoids Promise chaining.”

// Promise Chaining
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register end");
      resolve();
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email end");
      resolve();
    }, 5000);
  });
}

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login end");
      resolve();
    }, 1000);
  });
}

// Promise chaining
register()
  .then(() => sendEmail())
  .then(() => login())
  .then(() => {
    console.log("All steps completed");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// output:
// Register end
// Email end
// Login end
// All steps completed

//using async/await
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register end");
      resolve();
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email end");
      resolve();
    }, 5000);
  });
}

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login end");
      resolve();
    }, 1000);
  });
}

async function runApp() {
  try {
    await register();
    await sendEmail();
    await login();
    console.log("All steps completed");
  } catch (err) {
    console.log("Error:", err);
  }
}

runApp();

// output:
// Register end
// Email end
// Login end
// All steps completed

// example of promise with Array of Objects
const users = [
  { id: 1, name: "Hemant", role: "admin", active: true },
  { id: 2, name: "Rahul", role: "user", active: false },
  { id: 3, name: "Amit", role: "user", active: true },
];

const getActiveUsers = new Promise((resolve, reject) => {
  if (users.length > 0) {
    resolve(users);
  } else {
    reject("No users found");
  }
});

getActiveUsers
  .then((data) => {
    // filter active users
    return data.filter((user) => user.active);
  })
  .then((activeUsers) => {
    // map only required fields
    return activeUsers.map((user) => ({
      id: user.id,
      name: user.name,
    }));
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// output:
// [ { id: 1, name: 'Hemant' }, { id: 3, name: 'Amit' } ]


