class DiningLocation {
    constructor(name, location, image_path){ //Schedule will eventually be it's own object, but for the time being just gonna leave it as null
        this.name = name
        this.location = location
        this.image = image_path
    }
}

//Going to store the locations out of my objects and load whenever this is loaded
locations = []

//Locations Data
locations.push(new DiningLocation("Ctrl Alt DELi", "Golisano Hall", "assets/locations/ctrlalt.jpg"))
locations.push(new DiningLocation("The Commons", "N/A", "assets/locations/commons.jpeg"))
locations.push(new DiningLocation("Gracies", "Grace Watson Hall", "assets/locations/gracies.jpeg"))
locations.push(new DiningLocation("Crossroads", "Global Village", "assets/locations/crossroads.jpeg"))
locations.push(new DiningLocation("Brick City", "Student Alumni Union", "assets/locations/brick_city.jpeg"))
locations.push(new DiningLocation("Beanz", "Grace Watson Hall", "assets/locations/beanz.jpeg"))
locations.push(new DiningLocation("Sols Underground", "Tunnel", "assets/locations/sols.jpeg"))
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
            console.log(location.name)
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





    

