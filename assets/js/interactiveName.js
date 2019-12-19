let userName = "no name provided"
document.getElementById("name-submit").addEventListener("click", e => { //listen for click on submit btn
  e.preventDefault()
  userName = document.getElementById("user-name").value || "no name provided"; // set username for tracking
  const userNameForDiv = userName === "no name provided" ? "there" : userName //set username for div
  const hiNameH1 = document.getElementById("hi-name")
  hiNameH1.innerText = `Hi ${userNameForDiv}!`
  // console.log(userName)
})