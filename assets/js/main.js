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


// remembers which project is currently the popup (null = none), so it can be closed from anywhere (close button, backdrop, escape)
let openItem = null

function openProject(event) {
  // only one project can be open at a time
  if (openItem) return

  // from the clicked button, walk up to the slot it belongs to
  const item = event.currentTarget.closest(".project-item")
  openItem = item

  morphProject(item, () => {
    item.classList.add("expanded")
    document.querySelector(".project-backdrop").classList.add("open")
    document.body.classList.add("project-open")
    // the open button is hidden now, so the keyboard focus moves on to the close button
    item.querySelector(".project-close").focus()
  })
}

function closeProject() {
  if (!openItem) return

  const item = openItem
  openItem = null

  morphProject(item, () => {
    item.classList.remove("expanded")
    document.querySelector(".project-backdrop").classList.remove("open")
    document.body.classList.remove("project-open")
    // gives the keyboard focus back to the card it came from
    item.querySelector(".project-open").focus({ preventScroll: true })
  })
}

// applies a change to the page (the function "change") and lets the browser animate from the state before to the state after.
// all css for the two states lives in style.css, this only decides WHEN the switch happens
function morphProject(item, change) {
  // no animation in browsers that don't know view transitions, or if the user asked their system for less motion
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (!document.startViewTransition || reducedMotion) {
    change()
    return
  }

  // .morphing gives the card its view-transition-name. a name may only exist once on the page, so it's taken away from the card that had it before
  document.querySelectorAll(".project-item.morphing").forEach((other) => other.classList.remove("morphing"))
  item.classList.add("morphing")

  // the browser takes a picture of the page, runs change(), and then animates from the picture to the new state
  document.startViewTransition(change)
}

// escape closes the popup
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProject()
})
