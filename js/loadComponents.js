function initSidebar() {
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");
  const body = document.body;

  if (menuBtn && sidebar && closeBtn) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.remove("translate-x-full", "pointer-events-none");
      sidebar.classList.add("translate-x-0", "pointer-events-auto");
      body.classList.add("overflow-hidden");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("translate-x-0", "pointer-events-auto");
      sidebar.classList.add("translate-x-full", "pointer-events-none");
      body.classList.remove("overflow-hidden");
    });
  } else {
    console.warn("Sidebar elements not found!");
  }
}


  
  function loadComponent(id, callback) {
    fetch(`components/${id}.html`)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback(); // Run callback after insertion
      });
  }
  
  function initSidebar() {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const body = document.body;
  
    if (menuBtn && sidebar && closeBtn) {
      menuBtn.addEventListener("click", () => {
        sidebar.classList.remove("translate-x-full", "pointer-events-none");
        sidebar.classList.add("translate-x-0", "pointer-events-auto");
        body.classList.add("overflow-hidden");
      });
  
      closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("translate-x-0", "pointer-events-auto");
        sidebar.classList.add("translate-x-full", "pointer-events-none");
        body.classList.remove("overflow-hidden");
      });
    } else {
      console.warn("Sidebar elements not found. Check your IDs!");
    }
  }
  