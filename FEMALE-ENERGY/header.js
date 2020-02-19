const slidingNav = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const searchArea = document.querySelector('.search-area')
    
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active')
      burger.classList.toggle('close')
      searchArea.display = 'none'
    })
  }
  
  slidingNav()