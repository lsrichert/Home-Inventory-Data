// Defining Data Items
// Each item that you want to store in your home inventory database will be defined as a standard object. First, I'm going to define two data items. One will be stored in the crafts tables in my database, and the other will be stored in the furniture table.

// // The ink well is a craft data item
// const vintageInkwell = {
//   name: "Vintage Ink Well",
//   location: "Writing desk",
//   description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
// }

// // The writing desk is a furniture data item
// const writingDesk = {
//   name: "Shaker Writing Desk",
//   location: "Bedroom",
//   description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
// }
// Your task is to define at least 10 data items to represent things that you have in your home.



const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish festival."
}

const woodenBench = {
    name: "Long Wooden Bench",
    location: "Deck",
    description: "This bench has been re-purposed as a planter for our deck."
}

const diningTable = {
    name: "Midcentury Style Dining Table",
    location: "Dining Area",
    description: "This is the first real dining table with matching chairs I've ever had."
}

const tv = {
    name: "Big Screen TV",
    location: "Living Room",
    description: "This tv has lasted longer than I thought it would."
}

const cameras = {
    name: "Vintage Cameras",
    location: "Living Room",
    description: "These are two vintage SLR cameras from 1950 and 1970."
}

const artwork = {
    name: "Original Student Artwork",
    location: "Dining Area",
    description: "Student artwork from O'More College is displayed on our dining room wall."
}

const computer = {
    name: "MacBook Pro",
    location: "Mobile",
    description: "This is my MacBook Pro labtop computer."
}

const wineRack = {
    name: "Wooden Wine Rack",
    location: "Kitchen",
    description: "This wine rack was a wedding gift."
}

const sofa = {
    name: "Green Sofa",
    location: "Living Room",
    description: "Our cats have really torn up this sofa."
}

// // Adding Data Items to the Database
// Next, place each object that you have defined into the appropriate database table. I'm going to add the two items I created above into the appropriate tables. Remember, I'm using the term table because we're building a database, but the collections are actually arrays, so I can use the push() method.


HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)
HomeInventoryDatabase.furniture.push(sofa)
HomeInventoryDatabase.crafts.push(wineRack)
HomeInventoryDatabase.electronics.push(computer)
HomeInventoryDatabase.crafts.push(artwork)
HomeInventoryDatabase.electronics.push(cameras)
HomeInventoryDatabase.electronics.push(tv)
HomeInventoryDatabase.crafts.push(woodenBench)
HomeInventoryDatabase.furniture.push(diningTable)

console.log(HomeInventoryDatabase.crafts);
console.log(HomeInventoryDatabase.furniture);
console.log(HomeInventoryDatabase.electronics);

// Time to write a function.

// const saveDatabase = function (databaseObject) {

// }
// This is not the final version of the function. Keep reading to see how you will be augmenting this function to perform the steps necessary to save the database to local storage.

// The first step, is to refactor the function to receive an argument specifying the label for our database to be used in localStorage.

// In the code below, you will see how to use the JSON.stringify method which allows you to take an in-memory object, and convert it to a string representation of the object that can be saved in local storage. This is important, because only strings can be saved in local storage.

// const saveDatabase = function (databaseObject, localStorageKey) {
//     /*
//         Convert the Object into a string.
//     */
//     const stringifiedDatabase = JSON.stringify(databaseObject)

//     /*
//         Create a key in local storage, and store the string
//         version of your inventory database as the value
//     */
//     localStorage.setItem(localStorageKey, stringifiedDatabase)
// }

// JSON.stringify to Store the Data (below)

const saveDatabase = function (databaseObject, localStorageKey){

    const stringifiedDatabase = JSON.stringify(databaseObject)

    localStorage.setItem(localStorageKey, stringifiedDatabase)

 
}

saveDatabase(HomeInventoryDatabase, "Home Inventory")




