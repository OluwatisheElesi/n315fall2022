import * as MODEL  from "./model.js";

function initListeners() {
    console.log("HELLO");
    MODEL.getName("Tishe");
    MODEL.getLastName("Elesinnla");
}
    $("nav a").click((e) => {
        e.prevent
    })
    $(document).ready(function () {
        initListeners();
    });


    const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("http://hp-api.herokuapp.com/api/characters")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return {name: user.name, house: user.house, image: user.image,  element: card }
    })
  })

