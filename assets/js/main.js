// basic sidebar functionality
function showSidebar(){
  const sidebar = document.querySelector(".sidebar")
  const sidebarBackdrop = document.querySelector(".sidebar-backdrop")
  sidebar.classList.add("open")
  sidebarBackdrop.classList.add("open")
}
function hideSidebar(){
  const sidebar = document.querySelector(".sidebar")
  const sidebarBackdrop = document.querySelector(".sidebar-backdrop")
  sidebar.classList.remove("open")
  sidebarBackdrop.classList.remove("open")
}

// function for achieving that clicks from the sidebar still wait for it to close to feel smooth
function navigateFromSidebar(event) {
  // let ctrl/cmd/shift-click open new tabs as usual
  if (event.ctrlKey || event.metaKey || event.shiftKey) return

  // stops the action of the click (which would be to navigate to a site)
  event.preventDefault()

  // intercepts the url where the user wanted to go, hides the sidebar waits for 200ms (set to the same amount as sidebar animation time) and then navigate to the requested url.
  const url = event.currentTarget.href
  hideSidebar()
  setTimeout(() => { window.location.href = url }, 200)
}



// stores which card is currently expanded
let expandedCard = null
// remembers the last started animation, so closing can wait for it to finish
let currentTransition = null

function openCard(event) {
  // if any card is already open, ingore the click => stops a second click from doing anything
  if (expandedCard) return

  // stores which new card is expanded
  const card = event.currentTarget
  expandedCard = card

  // as multiple subelements might need separate view-transition-names, it's easier to just add a ".morphing" class to the clicked card, and define the individual transition-names in css with selectors for children. but first. any existing morphing classes have to be removed! only the clicked element should have it
  document.querySelectorAll(".card").forEach((c) => { c.classList.remove("morphing") })
  card.classList.add("morphing")

  // tells the browser to do a view transition around this change
  currentTransition = document.startViewTransition(() => {
    card.classList.add("expanded")
  })
}

async function closeCard(event) {
  // stops the click from travelling up to the card (travels to all parents), which would open it again right away
  event.stopPropagation()

  // nothing is open, so nothing to close
  if (!expandedCard) return
  
  // retrieve currently expanded card from "memory" and reset memory
  const card = expandedCard
  expandedCard = null

  // if an animation is still running, pause here until it's done
  if (currentTransition) await currentTransition.finished

  // ... only then execute the closing animation when no other animation is running
  currentTransition = document.startViewTransition(() => {
    card.classList.remove("expanded")
  })


}

// pressing escape closes card
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCard(event)
})



