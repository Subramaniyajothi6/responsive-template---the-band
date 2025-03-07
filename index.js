function dropdown(){
    let more = document.getElementById("drop_down");
    if(more.style.display === "flex"){
        more.style.display = "none";}
    else{   more.style.display = "flex";}
}

// function sidebar(){
//     let more = document.getElementById("sidebar");
//     if(more.style.display === "flex"){
//         more.style.display = "none";}
//     else{   more.style.display = "flex";}
 
// }

function sidebar() {
    let more = document.getElementById("sidebar");

    if (more.style.display === "flex") {
        more.style.display = "none";
        document.removeEventListener("click", closeSidebarOnClickOutside);
    } else {
        more.style.display = "flex";
        setTimeout(() => {
            document.addEventListener("click", closeSidebarOnClickOutside);
        }, 0); // Delay to avoid immediate closure
    }
}

function closeSidebarOnClickOutside(event) {
    let more = document.getElementById("sidebar");
    let openButton = document.getElementById("menu");

    // Close only if the clicked element is outside the sidebar and not the open button
    if (!more.contains(event.target) && event.target !== openButton) {
        more.style.display = "none";
        document.removeEventListener("click", closeSidebarOnClickOutside);
    }
}



