// - - - - - - - - - - - -Tab Handling- - - - - - - - - - - -
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const userInfoContainer = document.querySelector(".userInfoContainer");
const grantAccessContainer = document.querySelector(".grantLocationContainer");

const searchForm = document.querySelector("[data-searchForm ]");
const searchInput = document.querySelector("[data-searchInput]");
const apiErrorContainer = document.querySelector(".api-error-container");


// Initial Variables 
let oldTab = userTab;
const API_KEY = "168771779c71f3d64106d8a88376808a";
oldTab.classList.add("current-tab");


//ek kaam or pending hai??

function switchTab(clickedTab){
    if(clickedTab!=oldTab){
        oldTab.classList.remove("current-tab");
        oldTab=clickedTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            
        }


    }


}


userTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(userTab);
});


searchTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(searchTab);
});