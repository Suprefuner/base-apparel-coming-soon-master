"use strict"

const email = document.querySelector(".input-email")
const btn = document.querySelector(".btn-arrow")

const clear = (target) => {
  target.previousElementSibling.classList.add("hidden")
  target.nextElementSibling.classList.add("hidden")
}

btn.addEventListener("click", function () {
  clear(this)

  const re = /^.+@.+\..+$/
  if (email.value.match(re)) {
    email.style.border = "1px solid green"
    email.value = ""
    email.setAttribute("placeholder", "Email sent")
    email.classList.toggle("class")
    clear(this)

    setTimeout(() => {
      email.style.border = "1px solid var(--color-red-1)"
      email.setAttribute("placeholder", "Email Address")
      email.classList.toggle("class")
    }, 2000)
  } else {
    this.previousElementSibling.classList.remove("hidden")
    this.nextElementSibling.classList.remove("hidden")
  }
})
