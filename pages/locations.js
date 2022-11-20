// For the time being I am going to store the dining locations inside of objects to be referenced later and to pull information from

class DiningLocation {
    constructor(name, location, schedule = null){ //Schedule will eventually be it's own object, but for the time being just gonna leave it as null
        this.name = name
        this.location = location
    }
}

function makeLocationCard(location){
    return `
        <span class = "locationCard">
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

function main(){
    locations = []

    locations.push(new DiningLocation("Ctrl Alt DELi", "Golisano Hall"))
    locations.push(new DiningLocation("The Commons", "N/A"))
    locations.push(new DiningLocation("Gracies", "Grace Watson Hall"))
    locations.push(new DiningLocation("Crossroads", "Global Village"))
    locations.push(new DiningLocation("Brick City", "Student Alumni Union"))
    locations.push(new DiningLocation("Beanz", "Grace Watson Hall"))
    locations.push(new DiningLocation("Sol Underground", "Tunnel"))
    locations.push(new DiningLocation("Artesano's", "Student Alumni Union"))
    
    //Temp adding extra to make sure it works as expected 
    locations.push(new DiningLocation("Ctrl Alt DELi", "Golisano Hall"))
    locations.push(new DiningLocation("The Commons", "N/A"))
    locations.push(new DiningLocation("Gracies", "Grace Watson Hall"))
    locations.push(new DiningLocation("Crossroads", "Global Village"))
    locations.push(new DiningLocation("Brick City", "Student Alumni Union"))
    locations.push(new DiningLocation("Beanz", "Grace Watson Hall"))
    locations.push(new DiningLocation("Sol Underground", "Tunnel"))
    locations.push(new DiningLocation("Artesano's", "Student Alumni Union"))


    console.log(document)
    locationsBox = document.getElementById("mainBodyContent");
    console.log(locationsBox)
    
    locations.forEach(location => {
        locationsBox.innerHTML += makeLocationCard(location)
    });

    //Add lower break because I need it temporarily
    for(let i = 0; i < 5; i++){
        locationsBox.innerHTML += "<br>"
    }

}

