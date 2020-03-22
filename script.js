// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            const container = document.getElementById("container")
            for (index=0; index<json.length; index++) {
            container.innerHTML = container.innerHTML + `
            <div class = "astronaut">
                <div class = "bio">
                    <h3>${json[index].firstName} ${json[index].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[index].hoursInSpace}</li>
                        <li>Active: ${json[index].active}</i>
                        <li>Skills: ${json[index].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class = "avatar" src=${json[index].picture}
            </div>`
            }
    });
});
});