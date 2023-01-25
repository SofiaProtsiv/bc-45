const actions = document.querySelectorAll("[data-action]")
const counterValue = document.querySelector(".counter-value")

let counter = localStorage.getItem("COUNTER_KEY") || 0
counterValue.textContent = counter;

actions.forEach(action => {
  action.addEventListener("click", ()=>{
    const action_name = action.dataset.action

    switch (action_name){
      case "decrease":
        counter--
        localStorage.setItem("COUNTER_KEY", JSON.stringify(counter))
        break;
      
      case "increase":
        counter++
        localStorage.setItem("COUNTER_KEY", JSON.stringify(counter))
        break;
      
      case "reset":
        counter = 0
        localStorage.removeItem("COUNTER_KEY")
        break
    }

    counterValue.textContent = counter;
  })
})