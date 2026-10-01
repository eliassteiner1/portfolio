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