// crate a constructor function

function productdata(title, priority, complete, massageAlert) {
    this.title = title
    this.priority = priority
    this.complete = complete
    this.massageAlert = massageAlert
}

let productdata1 = new productdata("hp", "always top", true,)
console.log(productdata1);