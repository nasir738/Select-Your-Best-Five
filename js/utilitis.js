function disableButton(btn) {
  document.getElementById(btn.id).disabled = true;
}

function parPlayerBuddget() {
  let parPlayerBuddget = document.getElementById("perplayer-input");
  let parPlayerBuddgetString = parPlayerBuddget.value;
  let parPlayerBuddgetAmount = parseFloat(parPlayerBuddgetString);

  return parPlayerBuddgetAmount;
}
