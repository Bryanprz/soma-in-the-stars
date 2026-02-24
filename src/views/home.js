import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Soma in the Stars | Vedic Jyotish Astrology</title>
        <meta property="og:title" content="Soma in the Stars | Vedic Jyotish Astrology" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E%F0%9F%8C%99%3C/text%3E%3C/svg%3E"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.hero-visual, .portrait-card {
  transform: none !important;
}
.service-card:hover, .service-card:focus-within, .testimonials-section .card:hover, .testimonials-section .card:focus-within {
  transform: none;
}
}
a:focus-visible, button:focus-visible {
  outline: 3px solid var(--color-outline);
  outline-offset: 3px;
}
</style>`}
          ></Script>
        </div>
      </div>

      {/* ── 1. HERO ── */}
      <section
        role="region"
        aria-label="Soma in the Stars hero"
        className="hero-section"
      >
        <div className="home-hero-inner hero-inner">
          <div className="hero-content">
            <h1 className="headline">
              Get Clarity on Your Career, Relationships, and Life Decisions
            </h1>
            <p className="lead">
              Use the world's oldest astrological system to stop
              guessing and start making confident moves. Join a free
              community of seekers learning Vedic astrology — or book a
              private 90-minute reading with Jyotishi Carolina Ortiz and
              walk away with a personalized action plan.
            </p>
            <div className="cta-group">
              <a href="https://www.skool.com/soma-in-the-stars-7574/about" target="_blank" rel="noopener noreferrer">
                <div
                  role="button"
                  aria-label="Join free Skool community"
                  className="btn-accent btn"
                >
                  <span>Join Free Community</span>
                </div>
              </a>
              <a href="/consultations">
                <div
                  role="button"
                  aria-label="Book private reading with Jyotishi Carolina Ortiz"
                  className="btn-primary btn"
                >
                  <span>Book a Private Reading</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-panel">
              <img
                alt="Soma in the Stars logo"
                src="/soma-in-the-stars-logo.jpg"
                className="home-image1"
              />
              <p className="visual-caption" aria-hidden="true">
                Your Celestial Guide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SOCIAL PROOF BAR ── */}
      <section className="proof-bar" aria-label="Trust indicators">
        <div className="proof-bar-inner">
          <div className="proof-item">
            <span className="proof-number">500+</span>
            <span className="proof-label">Community Members</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">20+</span>
            <span className="proof-label">Years of Practice</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">Certified</span>
            <span className="proof-label">Classical Jyotishi</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">90 min</span>
            <span className="proof-label">Deep-Dive Sessions</span>
          </div>
        </div>
      </section>

      {/* ── 3. TWO OFFER CARDS ── */}
      <section
        role="region"
        aria-labelledby="offers-heading"
        className="services-section"
      >
        <div className="services-container">
          <h2 id="offers-heading" className="section-title">
            Two Ways to Start
          </h2>
          <div className="services-grid">
            <article
              role="group"
              aria-labelledby="offer-free"
              className="service-card flagship"
            >
              <div className="home-card-image2 card-image"></div>
              <div className="card-content">
                <div className="service-meta">
                  <span className="duration">Free</span>
                  <span className="deliverable">Immediate Access</span>
                </div>
                <h3 id="offer-free">Free Vedic Astrology Community</h3>
                <p>
                  Courses, live workshops, peer-led study sessions, and
                  ongoing teachings curated by Jyotishi Carolina Ortiz.
                  No credit card required.
                </p>
                <ul className="offer-includes">
                  <li>Mini-courses and live workshops</li>
                  <li>Peer feedback and study groups</li>
                  <li>Resource library access</li>
                </ul>
                <a href="https://www.skool.com/soma-in-the-stars-7574/about" target="_blank" rel="noopener noreferrer">
                  <div className="btn-accent btn-lg btn">
                    <span>Join Free Community</span>
                  </div>
                </a>
              </div>
            </article>
            <article
              role="group"
              aria-labelledby="offer-private"
              className="service-card flagship"
            >
              <div className="home-card-image1 card-image"></div>
              <div className="card-content">
                <div className="service-meta">
                  <span className="duration">90 min</span>
                  <span className="deliverable">Annotated Chart PDF</span>
                </div>
                <h3 id="offer-private">Private Jyotish Consultation</h3>
                <p>
                  A one-on-one deep dive into your Vedic birth chart.
                  Walk away with a bespoke action plan for your career,
                  relationships, and life decisions.
                </p>
                <ul className="offer-includes">
                  <li>Full birth chart analysis</li>
                  <li>Career and timing recommendations</li>
                  <li>Annotated PDF and session recording</li>
                </ul>
                <a href="/consultations">
                  <div className="btn-primary btn-lg btn">
                    <span>Book Your Reading</span>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── 4. TESTIMONIALS ── */}
      <section
        role="region"
        aria-labelledby="testimonials-heading"
        className="testimonials-section"
      >
        <h2 id="testimonials-heading" className="visually-hidden">
          What Others Are Saying
        </h2>
        <div className="carousel-viewport">
          <div className="carousel-track">
            <article role="listitem" className="card">
              <blockquote className="quote">
                <span>
                  &quot;Carolina&apos;s reading translated planetary patterns
                  into practical next steps for my gallery launch. Revenue and
                  confidence followed.&quot;
                </span>
              </blockquote>
              <div className="credential">
                <strong>Amara V.</strong>
                <span>Curator &amp; Visual Artist</span>
              </div>
              <div className="metrics">
                <span>Gallery Launch Success</span>
              </div>
            </article>
            <article role="listitem" className="card">
              <blockquote className="quote">
                <span>
                  &quot;The Skool community feels like a living syllabus.
                  Workshops, peer critiques, and Carolina&apos;s insights
                  sharpened my craft. I landed two commissions within
                  months.&quot;
                </span>
              </blockquote>
              <div className="credential">
                <strong>Mateo R.</strong>
                <span>Ceramicist</span>
              </div>
              <div className="metrics">
                <span>2 Commissions in 3 Months</span>
              </div>
            </article>
            <article role="listitem" className="card">
              <blockquote className="quote">
                <span>
                  &quot;I expected poetic language; I received rigorous,
                  teachable frameworks. Her Vedic charts clarified timing for
                  residencies and contracts — game changer.&quot;
                </span>
              </blockquote>
              <div className="credential">
                <strong>Laila S.</strong>
                <span>Composer &amp; Sound Artist</span>
              </div>
              <div className="metrics">
                <span>Residency Success</span>
              </div>
            </article>
            <article role="listitem" className="card">
              <blockquote className="quote">
                <span>
                  &quot;After a private session I restructured my studio
                  calendar according to planetary seasons. My productivity
                  doubled and my best work came through.&quot;
                </span>
              </blockquote>
              <div className="credential">
                <strong>Jonah K.</strong>
                <span>Photographer</span>
              </div>
              <div className="metrics">
                <span>2x Productivity Increase</span>
              </div>
            </article>
            <article role="listitem" className="card">
              <blockquote className="quote">
                <span>
                  &quot;The free Skool space introduced me to tools and mentors;
                  the one-on-one reading made those tools actionable. Intuition
                  meets method.&quot;
                </span>
              </blockquote>
              <div className="credential">
                <strong>Priya M.</strong>
                <span>Textile Designer</span>
              </div>
              <div className="metrics">
                <span>Actionable Insights</span>
              </div>
            </article>
            <article role="listitem" className="card">
              <blockquote className="quote">
                <span>
                  &quot;Professional, poetic, and precise. Carolina&apos;s
                  readings have become part of our creative team&apos;s
                  planning — she translates cosmic cycles into deadlines and
                  breakthroughs.&quot;
                </span>
              </blockquote>
              <div className="credential">
                <strong>Atelier Sol Collective</strong>
                <span>Creative Studio</span>
              </div>
              <div className="metrics">
                <span>Team Success Stories</span>
              </div>
            </article>
          </div>
        </div>
        <div className="carousel-controls">
          <button
            aria-label="Previous testimonial"
            className="carousel-btn prev"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="home-icon30"
            >
              <path
                d="m5 12l7-7l7 7m-7 7V5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button aria-label="Next testimonial" className="carousel-btn next">
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="home-icon32"
            >
              <path
                d="m5 12l7-7l7 7m-7 7V5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </section>

      {/* ── 5. ABOUT CAROLINA (compact) ── */}
      <section
        role="region"
        aria-labelledby="about-heading"
        className="about-section"
      >
        <div className="about-container">
          <div className="video-column">
            <div className="video-container">
              <video
                src="https://videos.pexels.com/video-files/6943710/6943710-hd_1080_1920_24fps.mp4"
                poster="https://images.pexels.com/videos/6943710/pictures/preview-0.jpeg"
                controls="true"
                aria-label="Video: Carolina Ortiz teaching"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="bio-card">
            <h2 id="about-heading">Jyotishi Carolina Ortiz</h2>
            <p className="subtitle">Vedic Guide &amp; Creative Astrologer</p>
            <p>
              Classically trained Jyotishi with 20+ years of practice.
              Carolina translates rigorous Vedic technique into actionable
              guidance for artists, designers, and creative leaders seeking
              clarity, timing, and the courage to create.
            </p>
            <div className="credential-strip-bottom">
              <div className="credential-chip">
                <span>Certified Jyotishi</span>
              </div>
              <div className="credential-chip">
                <span>International Clients</span>
              </div>
              <div className="credential-chip">
                <span>Creative Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ── */}
      <section className="final-cta-section" aria-label="Get started">
        <div className="final-cta-inner">
          <h2 className="section-title">Ready to Begin?</h2>
          <p className="section-subtitle">
            Whether you want to learn at your own pace or get a personalized
            reading, there is a path for you.
          </p>
          <div className="final-cta-buttons">
            <a href="https://www.skool.com/soma-in-the-stars-7574/about" target="_blank" rel="noopener noreferrer">
              <div className="btn-accent btn-lg btn">
                <span>Join Free Community</span>
              </div>
            </a>
            <a href="/consultations">
              <div className="btn-primary btn-lg btn">
                <span>Book Your Reading</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── SCRIPTS ── */}
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInRight {from {opacity: 0;
transform: translateX(40px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="testimonials-carousel">
(function(){
  const carouselTrack = document.querySelector(".carousel-track")
  const prevBtn = document.querySelector(".carousel-btn.prev")
  const nextBtn = document.querySelector(".carousel-btn.next")
  const cards = document.querySelectorAll(".testimonials-section .card")

  let currentIndex = 0
  const cardWidth = cards[0].offsetWidth
  const gap = 32

  function updateCarousel() {
    const offset = -(currentIndex * (cardWidth + gap))
    carouselTrack.style.transform = \`translateX(\${offset}px)\`

    cards.forEach((card, index) => {
      if (index === currentIndex) {
        card.style.transform = "scale(1.02)"
        card.setAttribute("aria-hidden", "false")
      } else {
        card.style.transform = "scale(1)"
        card.setAttribute("aria-hidden", "true")
      }
    })
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length
    updateCarousel()
  })

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length
    updateCarousel()
  })

  updateCarousel()

  let autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length
    updateCarousel()
  }, 5000)

  document
    .querySelector(".testimonials-section")
    .addEventListener("mouseenter", () => {
      clearInterval(autoplayInterval)
    })

  document
    .querySelector(".testimonials-section")
    .addEventListener("mouseleave", () => {
      autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length
        updateCarousel()
      }, 5000)
    })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
