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