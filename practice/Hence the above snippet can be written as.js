var person = {
  name: "John",
  readName: function () {
    console.log(this.name);
  },
};

person.readName();
