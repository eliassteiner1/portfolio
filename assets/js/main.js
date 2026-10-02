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



function toggleCard(event) {
  const card = event.currentTarget

  // as multiple subelements might need separate view-transition-names, it's easier to just add a ".morphing" class to the clicked card, and define the individual transition-names in css with selectors for children. but first. any existing morphing classes have to be removed! only the clicked element should have it
  document.querySelectorAll(".card").forEach((c) => { c.classList.remove("morphing") })
  card.classList.add("morphing")
  
  // tells the browser to do a view transition around this change
  document.startViewTransition(() => {
    card.classList.toggle("expanded")
  })
}