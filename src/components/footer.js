import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-star-float, .footer-logo-icon, .footer-brand-name, .footer-cta-section::before {
  animation: none;
}
.footer-link, .footer-social-link {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-soma" className="footer-container">
        <div className="footer-background-cosmic">
          <img
            alt="Cosmic stars background"
            src="https://images.pexels.com/photos/2597937/pexels-photo-2597937.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
            className="footer-background-image"
          />
          <div className="footer-background-overlay"></div>
        </div>
        <div className="footer-content-wrapper">
          <div aria-hidden="true" className="footer-stars-decorative">
            <div className="footer-star-float footer-star-1">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="footer-star-2 footer-star-float">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
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
            </div>
            <div className="footer-star-3 footer-star-float">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="footer-star-4 footer-star-float">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="footer-main-content">
            <div className="footer-brand-section">
              <div className="footer-logo-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="footer-logo-icon"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <h2 className="footer-brand-name">Soma in the Stars</h2>
              </div>
              <p className="footer-brand-tagline">
                {' '}
                Ancient Vedic Wisdom for Modern Souls
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="footer-brand-description">
                {' '}
                Guided by Jyotishi Carolina Ortiz, we illuminate your cosmic
                path through the timeless wisdom of Jyotish astrology.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="footer-links-grid">
              <div className="footer-links-column">
                <h3 className="footer-column-title">Explore</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="/">
                      <div className="footer-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#about">
                      <div className="footer-link">
                        <span>About Carolina</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <div className="footer-link">
                        <span>Services</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials">
                      <div className="footer-link">
                        <span>Testimonials</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-column-title">Join Us</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="#">
                      <div className="footer-link footer-link-with-icon">
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
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle r="4" cx="9" cy="7"></circle>
                          </g>
                        </svg>
                        <span>Free Skool Community</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link footer-link-with-icon">
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Book a Reading</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link footer-link-with-icon">
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
                            <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect
                              x="2"
                              y="4"
                              rx="2"
                              width="20"
                              height="16"
                            ></rect>
                          </g>
                        </svg>
                        <span>Newsletter</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-column-title">Resources</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Blog</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Birth Chart Guide</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Jyotish Basics</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>FAQ</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-column-title">Legal</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Privacy Policy</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Terms of Service</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Cookie Policy</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Disclaimer</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-cta-section">
              <div className="footer-cta-content">
                <h3 className="footer-cta-title">Begin Your Cosmic Journey</h3>
                <p className="footer-cta-description">
                  {' '}
                  Connect with ancient wisdom and discover your celestial path
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-cta-buttons">
                  <a href="#">
                    <div className="btn-primary btn-lg btn">
                      <span>Join Free Community</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-accent btn-lg btn">
                      <span>Book Your Reading</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <p>© 2025 Soma in the Stars. All rights reserved.</p>
                <p className="footer-crafted">
                  {' '}
                  Crafted with cosmic love by Jyotishi Carolina Ortiz
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="footer-social-links">
                <a href="#">
                  <div
                    aria-label="Follow us on Instagram"
                    className="footer-social-link"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Facebook"
                    className="footer-social-link"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on YouTube"
                    className="footer-social-link"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15l5-3l-5-3z"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Contact us via email"
                    className="footer-social-link"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footer-float-star {0%,100% {transform: translateY(0px) rotate(0deg);
opacity: 0.6;}
50% {transform: translateY(-20px) rotate(180deg);
opacity: 1;}}@keyframes footer-pulse-glow {0%,100% {filter: drop-shadow(0 0 12px currentColor);}
50% {filter: drop-shadow(0 0 20px currentColor);}}@keyframes footer-gradient-shift {0%,100% {background-position: 0% 50%;}
50% {background-position: 100% 50%;}}@keyframes footer-rotate-glow {0% {transform: rotate(0deg);}
100% {transform: rotate(360deg);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer-soma-interactions">
(function(){
  // Parallax effect for floating stars on scroll
  const footerStars = document.querySelectorAll(".footer-star-float")
  let ticking = false

  function updateStarPositions() {
    const scrolled = window.scrollY
    const footerElement = document.getElementById("footer-soma")

    if (!footerElement) return

    const footerTop = footerElement.offsetTop
    const footerHeight = footerElement.offsetHeight
    const windowHeight = window.innerHeight

    // Only apply parallax when footer is in view
    if (
      scrolled + windowHeight > footerTop &&
      scrolled < footerTop + footerHeight
    ) {
      const relativeScroll = scrolled + windowHeight - footerTop

      footerStars.forEach((star, index) => {
        const speed = 0.05 + index * 0.02
        const yOffset = relativeScroll * speed
        star.style.transform = \`translateY(\${yOffset}px)\`
      })
    }

    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateStarPositions)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true })

  // Add subtle hover effect to CTA section
  const ctaSection = document.querySelector(".footer-cta-section")
  if (ctaSection) {
    ctaSection.addEventListener("mouseenter", function () {
      this.style.borderColor =
        "color-mix(in srgb, var(--color-accent) 50%, transparent)"
    })

    ctaSection.addEventListener("mouseleave", function () {
      this.style.borderColor =
        "color-mix(in srgb, var(--color-accent) 30%, transparent)"
    })
  }

  // Intersection Observer for fade-in animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe footer columns for staggered fade-in
  const footerColumns = document.querySelectorAll(".footer-links-column")
  footerColumns.forEach((column, index) => {
    column.style.opacity = "0"
    column.style.transform = "translateY(20px)"
    column.style.transition = \`opacity 0.6s ease \${
      index * 0.1
    }s, transform 0.6s ease \${index * 0.1}s\`
    observer.observe(column)
  })

  // Add glow effect to social links on hover
  const socialLinks = document.querySelectorAll(".footer-social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.boxShadow =
        "0 8px 30px color-mix(in srgb, var(--color-accent) 60%, transparent)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.boxShadow = ""
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
