function makeLocationCard(location){
    return `
        <span class = "locationCard" onclick="selectLocation('${location.name}')">
            <span class="locationCardLeft">
                <img src="assets/ctrlalt.jpg"/>
                Left
            </span>
            <span class="locationCardRight">
                ${location.name}
                <br>
                ${location.location}
            </span>
        </span>
    `
    
}

function selectLocation(location){
    storedData.selectedLocation = location
    storedData.save()
    window.location.href = "location-details.html"
}

storedData = new PersistantData()
storedData.load()


function main(){
    locationsBox = document.getElementById("mainBodyContent");
    storedData.locations.forEach(location => {
        locationsBox.innerHTML += makeLocationCard(location)
    });

    //Add lower break because I need it temporarily
    for(let i = 0; i < 5; i++){
        locationsBox.innerHTML += "<br>"
    }

}

