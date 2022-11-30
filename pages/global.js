class FoodItem {
    constructor(name, price, calories, imagePath){
        this.name = name
        this.price = price
        this.calories = calories
        this.image = imagePath
    }
}

//Going to store all of the food objects in this list
let foods = []

//This is where all the food data will be pushed
foods.push(new FoodItem("Mozzarella Sticks", 6.00, 764, "assets/foods/mozz_sticks.jpeg")) 
foods.push(new FoodItem("Chicken Fingers", 7.50, 525, "assets/foods/chicken_fingers.jpeg"))
foods.push(new FoodItem("Grilled Cheese", 3.50, 650, "assets/foods/grilled_cheese.jpeg"))
foods.push(new FoodItem("Pizza Slice", 3.50, 310, "assets/foods/pizza.jpeg"))
foods.push(new FoodItem("Mac and Cheese", 5.25, 325, "assets/foods/mac_and_cheese.jpg"))
foods.push(new FoodItem("Fries", 3.00, 365, "assets/foods/fries.jpeg"))
foods.push(new FoodItem("Turkey Melt", 5.00, 410, "assets/foods/turkey_melt.jpeg"))
foods.push(new FoodItem("Chicken Soup", 6.50, 150, "assets/foods/chicken_soup.jpeg"))
foods.push(new FoodItem("Fish Fingers", 8.00, 425, "assets/foods/fish_fingers.jpeg"))
foods.push(new FoodItem("Sushi", 9.00, 410, "assets/foods/sushi.jpeg"))

class DiningLocation {
    constructor(name, location, image_path){ //Schedule will eventually be it's own object, but for the time being just gonna leave it as null
        this.name = name
        this.location = location
        this.image = image_path
        this.foodItems = foods //Every location is going to have the same selection of food because time is tight and SWEN 101 wants a good looking project not a working project which is silly but yeah
    }
}

//Going to store the locations out of my objects and load whenever this is loaded
let locations = []

//Locations Data, have to push like this because I was getting weird crashing issues when I assigned them within the list
locations.push(new DiningLocation("Ctrl Alt DELi", "Golisano Hall", "assets/locations/ctrlalt.jpg"))
locations.push(new DiningLocation("The Commons", "Briggs", "assets/locations/commons.jpeg"))
locations.push(new DiningLocation("Gracies", "Grace Watson Hall", "assets/locations/gracies.jpeg"))
locations.push(new DiningLocation("Crossroads", "Global Village", "assets/locations/crossroads.jpeg"))
locations.push(new DiningLocation("Brick City", "Student Alumni Union", "assets/locations/brick_city.jpeg"))
locations.push(new DiningLocation("Beanz", "Grace Watson Hall", "assets/locations/beanz.jpeg"))
locations.push(new DiningLocation("Sols Underground", "Tunnels", "assets/locations/sols.jpeg"))
locations.push(new DiningLocation("Artesanos", "Student Alumni Union", "assets/locations/artesanos.jpeg"))


localStorage.setItem("locationData", JSON.stringify(locations))

class PersistantData { //This object will be used to store all of our persistent data, this will be used on the location specific page
    selectedLocation = null
    selectedCategory = null
    locations = null
    save(){
        localStorage.setItem("storedData", JSON.stringify(this))
    }
    load(){
        let loadedObject = JSON.parse(localStorage.getItem("storedData"))
        this.locations = JSON.parse(localStorage.getItem("locationData"))
        if(loadedObject == null){
            this.save()
        }else{
            this.selectedLocation = loadedObject.selectedLocation
            this.selectedCategory = loadedObject.selectedCategory
        }    
    }
    clear(){
        this.selectedLocation = null
        this.selectedCategory = null
    }
    getLocation(){
        let foundLocation = null
        this.locations.forEach(location => {
            if(location.name == this.selectedLocation){
                foundLocation = location
                return
            }
        });

        if(foundLocation != null){
            return foundLocation
        }

        throw `Could not find location: ${this.selectedLocation}` 
    }
}

storedData = new PersistantData()
storedData.load()





    

