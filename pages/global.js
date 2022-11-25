class DiningLocation {
    constructor(name, location, schedule = null){ //Schedule will eventually be it's own object, but for the time being just gonna leave it as null
        this.name = name
        this.location = location
    }
}

//Going to store the locations out of my objects and load whenever this is loaded
locations = []

//Locations Data
locations.push(new DiningLocation("Ctrl Alt DELi", "Golisano Hall"))
locations.push(new DiningLocation("The Commons", "N/A"))
locations.push(new DiningLocation("Gracies", "Grace Watson Hall"))
locations.push(new DiningLocation("Crossroads", "Global Village"))
locations.push(new DiningLocation("Brick City", "Student Alumni Union"))
locations.push(new DiningLocation("Beanz", "Grace Watson Hall"))
locations.push(new DiningLocation("Sol Underground", "Tunnel"))
locations.push(new DiningLocation("Artesano's", "Student Alumni Union"))
locations.push(new DiningLocation("Ctrl Alt DELi", "Golisano Hall"))
locations.push(new DiningLocation("The Commons", "N/A"))
locations.push(new DiningLocation("Gracies", "Grace Watson Hall"))
locations.push(new DiningLocation("Crossroads", "Global Village"))
locations.push(new DiningLocation("Brick City", "Student Alumni Union"))
locations.push(new DiningLocation("Beanz", "Grace Watson Hall"))
locations.push(new DiningLocation("Sol Underground", "Tunnel"))
locations.push(new DiningLocation("Artesano's", "Student Alumni Union"))

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
        if(loadedObject == null){
            this.save()
        }else{
            this.selectedLocation = loadedObject.selectedLocation
            this.selectedCategory = loadedObject.selectedCategory
            this.locations = JSON.parse(localStorage.getItem("locationData"))
        }    
    }
    clear(){
        this.selectedLocation = null
        this.selectedCategory = null
    }
}

storedData = new PersistantData()
storedData.load()





function clearData(){
    storedData = new PersistantData()
    storedData.save()
}


    

