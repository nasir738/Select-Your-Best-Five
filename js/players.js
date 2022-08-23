let number = 0;
function check(number) {
  if (number > 5) {
    alert("You can't add more Player!");
    return false;
  }
  return true;
}
document.getElementById("first-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-1").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("secend-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-2").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("thard-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-3").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("forth-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-4").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("fifth-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-5").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("six-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-6").innerText;
    listItemsElements.appendChild(li);
  }
});
