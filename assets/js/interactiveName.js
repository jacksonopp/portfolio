
document.getElementById("name-submit").addEventListener("click", e => {
  e.preventDefault()
  const userName = document.getElementById("user-name").value || "no name provided";
  const userNameForDiv = userName === "no name provided" ? "there" : userName
  const hiNameH1 = document.getElementById("hi-name")
  hiNameH1.innerText = `Hi ${userNameForDiv}!`
  console.log(userName)
})