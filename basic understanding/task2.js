// crate a constructor function

function productdata(title, priority, complete, massageAlert) {
    this.title = title
    this.priority = priority
    this.complete = complete
    this.massageAlert = function () {
        console.log(`Hii this is ${this.title}`);
    }
}

let productdata1 = new productdata("hp", "always top", true, )
console.log(productdata1.massageAlert());