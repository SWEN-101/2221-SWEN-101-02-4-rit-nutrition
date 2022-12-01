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
    constructor(name, location, image_path, description){ //Schedule will eventually be it's own object, but for the time being just gonna leave it as null
        this.name = name
        this.location = location
        this.image = image_path
        this.foodItems = foods //Every location is going to have the same selection of food because time is tight and SWEN 101 wants a good looking project not a working project which is silly but yeah
        this.description = description
    }
}

//Going to store the locations out of my objects and load whenever this is loaded
let locations = []

//Locations Data, have to push like this because I was getting weird crashing issues when I assigned them within the list
locations.push(new DiningLocation("Ctrl Alt DELi", "Golisano Hall", "assets/locations/ctrlalt.jpg", "Take control and design your sandwich, pizza, panini, or wrap. Ctrl Alt Deli offers a variety of signature breakfast and lunch sandwiches, pizzas, paninis, and wraps. They also offer several grab-and-go options such as bagels, baked goods, pastries, fresh fruit, and salad."))
locations.push(new DiningLocation("The Commons", "Briggs", "assets/locations/commons.jpeg", "The Commons offers a wide menu selection with one of the best views on campus. Features include lunch and dinner entrées, the Shumway sub and salad station, Hettie’s Grill, stone oven pizza, pasta cucina, soups, and made-to-order salads."))
locations.push(new DiningLocation("Gracies", "Grace Watson Hall", "assets/locations/gracies.jpeg", "Gracie’s is our largest dining facility and is newly renovated with a greater variety of food options, including build-your-own meals at every station. The facility is peanut and tree nut free, except coconut. Find the largest selection of plant-based options, brick oven pizza, daily specials, BBQ, all-you-care-to-eat breakfast bar, a pita sandwich, and grab-and-go. Gracie’s serves gluten free and vegan foods everyday within the Grain Bowl station. This station eliminates eight allergens – crustacean shellfish, eggs, fish, milk, peanuts, sesame seeds, tree nuts, and wheat."))
locations.push(new DiningLocation("Crossroads", "Global Village", "assets/locations/crossroads.jpeg", "The Café and Market at Crossroads features a market-style food court serving Asian cuisine, daily chef specials, grill, pizza, paninis, subs, salads, and hand-made sushi."))
locations.push(new DiningLocation("Brick City", "Student Alumni Union", "assets/locations/brick_city.jpeg", "Brick City Café features a wide variety of breakfast, and lunch entrées with daily specials. They offer breakfast sandwiches, a breakfast grill, build your own salad station, daily entree specials, and daily vegetarian entree specials. Grab-and-go salads, fruit cups, and yogurts, bottled beverages and coffee from Finger Lakes Coffee Roasters® is available."))
locations.push(new DiningLocation("Beanz", "Grace Watson Hall", "assets/locations/beanz.jpeg", "Beanz serves Finger Lakes Coffee Roasters® espresso drinks, milkshakes, and seasonal specialty drinks. It also offers a wide selection of freshly baked goods, desserts, salads, sandwiches, and Ultimate Smoothis Blendz (USB) smoothies blended with real fruits, vegetables, and cold-pressed juices from a local orchard, Red Jacket Orchards."))
locations.push(new DiningLocation("Sols Underground", "Tunnels", "assets/locations/sols.jpeg", "Stop in for a scoop of RIT specialty made Tiger Stripes ice cream from Perry's® Ice Cream or choose from over 20 other flavors. Open later than other dining locations, Sol's Underground is the best stop to satisfy those late night cravingswith quesadillas, paninis, wraps, or pizza. "))
locations.push(new DiningLocation("Artesanos", "Student Alumni Union", "assets/locations/artesanos.jpeg", "A patisserie offering a wide selection of upscale delicacies, including specialty-created treats, breakfast pastries, sandwiches, cookies, tarts, and gluten-free and vegan options. Artesano Bakery & Café serves blended frozen drinks, espressos, lattes, and cappuccinos from Peet's Coffee®."))


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





    

