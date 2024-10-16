// two buttons friend request

// function frndrqst() {
//     let istatus = document.querySelector("h5");
//     let addFriend = document.querySelector("#add");

//     addFriend.addEventListener("click", function () {
//         istatus.innerHTML = "Friends"
//         istatus.style.color = "green"
//     });

//     let istatus2 = document.querySelector("h5")
//     let removeFrnd = document.querySelector("#remove");

//     removeFrnd.addEventListener("click", function () {
//         istatus2.innerHTML = "Stranger";
//         istatus2.style.color = "red";
//     })
// }
// frndrqst();


// Single buttons friend request


let istatus = document.querySelector("h5");
let btn = document.querySelector("#add");
flag = 0;

btn.addEventListener("click", function () {
    if (flag == 0) {
        istatus.innerHTML = "friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style.color = "#000";
        btn.style.backgroundColor = "#dadada";
        flag = 1
    } else {
        istatus.innerHTML = "Stranger";
        // istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.color = "aliceblue";
        btn.style.backgroundColor = "rgb(148, 61, 61)";
        flag = 0

    }
})