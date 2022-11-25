storedData = new PersistantData()
storedData.load()

function selectCategory(category){
    //Will be implemented for category system
    storedData.selectCategory = category
    storedData.save()
    storedData.load()
}


