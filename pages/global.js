class PersistantData { //This object will be used to store all of our persistent data, this will be used on the location specific page
    selectedLocation = null
    selectedCategory = null
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
        }
        
    }
   
}

storedData = new PersistantData()
storedData.load()





function clearData(){
    storedData = new PersistantData()
    storedData.save()
}


    

