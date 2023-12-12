const myObject = {
  myProperty: "Hello World!",
  myMethod: function () {
    console.log(this.myProperty);
  },
};
myObject.myMethod();

const myObject2 = {
  myProperty: "Hello World!",
  myMethod: () => {
    console.log(this.myProperty);
  },
};

myObject2.myMethod();

function someFunction(callback) {
  callback();
}

const myObject4 = {
  myProperty: "Hello Again!",
  myMethod: () => {
    console.log(this.myProperty);
  },
};

someFunction(myObject4.myMethod.bind(myObject4));
// This will correctly log "Hello Again!"
