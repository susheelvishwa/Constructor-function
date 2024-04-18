// **Using factory functions :**

// **Factory Function:**

//     A factory function is a function that returns an object when called.It is a way to create and initialize objects by encapsulating the object creation process within a function. Factory functions are useful when you want to create multiple instances of objects with similar properties or when you want to abstract the object creation process.


    // write a factory function iPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in ASIN, color, display, camera
// the object it creates has the following
// properties: ASIN, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {}

  obj.ASIN = ASIN
  obj.color = color
  obj.display = display
  obj.camera = camera

  obj.dial = function () {
    console.log("tring.. tring...")
  }

  obj.sendMessage = function () {
    console.log("Sending message...")
  }

  obj.cameraClick = function () {
    console.log("Camera clicked")
  }

  return obj
}

let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
iphone1.dial() // "tring.. tring..."
iphone1.sendMessage() // "Sending message..."
iphone1.cameraClick() // "Camera clicked"