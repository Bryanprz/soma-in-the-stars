import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation-logo, .navigation-logo-icon, .navigation-toggle, .navigation-link, .navigation-cta-btn, .navigation-menu, .navigation-backdrop {
  animation: none;
  transition: none;
}
.navigation-logo-icon::before {
  display: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav id="navigation" className="navigation">
        <div className="navigation-container">
          <a href="/">
            <div
              aria-label="Soma in the Stars - Homepage"
              className="navigation-logo"
            >
              <span className="navigation-logo-icon">
                <img
                  alt="Soma in the Stars logo"
                  src="/Soma-in-the-stars-moon.png"
                  className="navigation-logo-image"
                />
              </span>
              <span className="navigation-logo-text">
                <span className="navigation-navigation-logo-primary">Soma</span>
                <span className="navigation-navigation-logo-secondary">
                  in the Stars
                </span>
              </span>
              <span aria-hidden="true" className="navigation-logo-accent">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </span>
            </div>
          </a>
          <button
            id="navigationToggle"
            aria-label="Toggle navigation menu"
            aria-controls="navigationMenu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <span className="navigation-navigation-toggle-icon1">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigation-toggle-icon2">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
          <div id="navigationMenu" className="navigation-menu">
            <ul className="navigation-list">
              <li className="navigation-item">
                <a href="/consultations">
                  <div className="navigation-link">
                    <span>Astrology Readings</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="https://www.skool.com/soma-in-the-stars-7574/about" target="_blank" rel="noopener noreferrer">
                  <div className="navigation-link">
                    <span>Community</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item navigation-item-cta">
                <a href="https://www.skool.com/soma-in-the-stars-7574/about" target="_blank" rel="noopener noreferrer">
                  <div className="btn-outline btn navigation-cta-btn">
                    <span>
                      {' '}
                      Join Skool
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </li>
              <li className="navigation-item navigation-item-cta">
                <a href="/consultations">
                  <div className="btn-primary btn navigation-cta-btn">
                    <span>
                      {' '}
                      Book Reading
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="navigationBackdrop" className="navigation-backdrop"></div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigationLogoShine {0%,100% {transform: translateX(-100%) translateY(-100%) rotate(45deg);}
50% {transform: translateX(100%) translateY(100%) rotate(45deg);}}@keyframes navigationLogoGradient {0%,100% {background-position: 0% 50%;}
50% {background-position: 100% 50%;}}@keyframes navigationSparkle {0%,100% {opacity: 0.4;
transform: scale(1) rotate(0deg);}
50% {opacity: 1;
transform: scale(1.2) rotate(180deg);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigationBackdrop = document.getElementById("navigationBackdrop")
  const navigationLinks = navigationMenu.querySelectorAll(
    ".navigation-link, .navigation-cta-btn"
  )

  function toggleMenu() {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true"

    navigationToggle.setAttribute("aria-expanded", !isExpanded)
    navigationMenu.classList.toggle("navigation-menu-active")
    navigationBackdrop.classList.toggle("navigation-backdrop-active")

    if (!isExpanded) {
      navigationBackdrop.style.display = "block"
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        navigationBackdrop.style.display = "none"
      }, 300)
      document.body.style.overflow = ""
    }
  }

  function closeMenu() {
    navigationToggle.setAttribute("aria-expanded", "false")
    navigationMenu.classList.remove("navigation-menu-active")
    navigationBackdrop.classList.remove("navigation-backdrop-active")

    setTimeout(() => {
      navigationBackdrop.style.display = "none"
    }, 300)
    document.body.style.overflow = ""
  }

  navigationToggle.addEventListener("click", toggleMenu)
  navigationBackdrop.addEventListener("click", closeMenu)

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 991) {
        closeMenu()
      }
    })
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      closeMenu()
      navigationBackdrop.style.display = "none"
    }
  })

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      navigationToggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
