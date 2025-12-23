const registration = (cb) => {
  setTimeout(() => {
    console.log("Registration successfully");
    cb();
  }, 2000);
};

const emailSend = (cb) => {
  setTimeout(() => {
    console.log("Email Send Successfully");
    cb();
  }, 1000);
};

const login = (cb) => {
  setTimeout(() => {
    console.log("Login Successfully");
    cb();
  }, 2000);
};


registration(() => {
  emailSend(() => {
    login(() => {
      console.log("All done");
    });
  });
});
