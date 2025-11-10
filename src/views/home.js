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
        <title>Gummy Immediate Antelope</title>
        <meta property="og:title" content="Gummy Immediate Antelope" />
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
      <section
        role="region"
        aria-label="Soma in the Stars hero"
        className="hero-section"
      >
        <div className="home-hero-inner hero-inner">
          <div className="hero-content">
            <h1 className="headline">
              {' '}
              Soma in the Stars — Learn Vedic Astrology with an Artist&apos;s
              Eye
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <p className="lead">
              {' '}
              Unlock your creative destiny through Jyotish: immersive learning,
              clear guidance, and soulful community for artists and makers. Join
              our free Skool to explore courses, live workshops, and peer-led
              study — or book a private reading with Jyotishi Carolina Ortiz for
              a bespoke, practice-informed consultation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="cta-group">
              <a href="#skool">
                <div
                  role="button"
                  aria-label="Join Skool — free"
                  className="btn-primary btn"
                >
                  <span>
                    {' '}
                    Join the Skool (Free)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#reading">
                <div
                  role="button"
                  aria-label="Book private reading with Jyotishi Carolina Ortiz"
                  className="btn btn-secondary"
                >
                  <span>
                    {' '}
                    Book a Private Reading
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-overlay"></div>
            <img
              alt="Starry night sky with Milky Way"
              src="/soma%20in%20the%20stars%20-%20transparent-800h.png"
              className="home-image1"
            />
          </div>
        </div>
      </section>
      <section
        id="skool"
        role="region"
        aria-labelledby="skool-heading"
        className="skool-section"
      >
        <div className="skool-cta">
          <div className="cta-content">
            <h2 id="skool-heading">
              Join the Free astrology community on Skool
            </h2>
            <p>
              {' '}
              Connect with artists, designers, and creative professionals
              exploring Vedic astrology as a generative tool for process,
              portfolio and purpose.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <ul className="benefits-list">
              <li>
                <span>
                  Curated mini-courses &amp; live studio-style workshops
                </span>
              </li>
              <li>
                <span>Collaborative projects &amp; resource libraries</span>
              </li>
              <li>
                <span>Peer feedback &amp; supportive creative cohort</span>
              </li>
              <li>
                <span>Practical, evidence-rooted teachings</span>
              </li>
            </ul>
            <div className="credential-tags">
              <span className="tag">Free Membership</span>
              <span className="tag">Immediate Access</span>
              <span className="tag">Expert Guidance</span>
            </div>
            <div className="cta-buttons">
              <a href="#join">
                <div
                  role="button"
                  aria-label="Join Skool community now"
                  className="btn-primary btn"
                >
                  <span>
                    {' '}
                    Join the Community Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#learn">
                <div
                  role="button"
                  aria-label="Learn more about Skool"
                  className="btn btn-secondary"
                >
                  <span>
                    {' '}
                    Explore Free Resources
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="visual-card">
            <img
              alt="Astrology study and tarot reading session"
              src="https://images.pexels.com/photos/6931775/pexels-photo-6931775.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="card-overlay">
              <div className="overlay-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m8 9l5 5v7H8v-4m0 4H3v-7l5-5m1 1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17h-8m0-14v.01M17 7v.01M17 11v.01M17 15v.01"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Active Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="reading"
        role="region"
        aria-labelledby="reading-heading"
        className="reading-section"
      >
        <div className="reading-panel">
          <div className="left-column">
            <h2 id="reading-heading">Book a Private Jyotish Reading</h2>
            <p className="synopsis">
              {' '}
              Step into a luminous, one-on-one session with Jyotishi Carolina
              Ortiz — an embodied Vedic guide for creative minds. These private
              readings blend rigorous Jyotish technique with an artist&apos;s
              sensibility to illuminate your creative cycles, career timing,
              collaborative potential, and soulful projects.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <figure className="portrait-card">
              <img
                alt="Private astrology chart reading session"
                src="https://images.pexels.com/photos/6932077/pexels-photo-6932077.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <figcaption>Bespoke Chart Analysis</figcaption>
            </figure>
            <div className="credential-strip">
              <span className="credential-badge">Certified Jyotishi</span>
              <span className="credential-badge">20+ Years Practice</span>
              <span className="credential-badge">Creative Focus</span>
            </div>
            <div className="cta-stack">
              <a href="#book-now">
                <div
                  role="button"
                  aria-label="Book a private Jyotish reading"
                  className="btn-primary btn"
                >
                  <span>
                    {' '}
                    Book a Private Reading
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#custom-plan">
                <div
                  role="button"
                  aria-label="Request personalized plan"
                  className="btn btn-secondary"
                >
                  <span>
                    {' '}
                    Request Creative-Astrology Plan
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="right-column">
            <h3>What to Expect</h3>
            <ul className="outcomes-list">
              <li>
                <span>
                  Focused chart analysis tailored to your creative practice
                </span>
              </li>
              <li>
                <span>Actionable timing for launches and collaborations</span>
              </li>
              <li>
                <span>Ritualized remedies you can actually use</span>
              </li>
              <li>
                <span>Clear learning path to understand your chart</span>
              </li>
            </ul>
            <div className="who-for">
              <h4>Who This Is For</h4>
              <p>
                {' '}
                Artists, designers, makers, cultural leaders and creative
                professionals seeking both precise astrological guidance and
                practical, career-forward strategies.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="booking-teaser">
              <div className="teaser-badge">
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
                    <path d="M8 2v4m8-4v4"></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
                <span>Book Your Session Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <span>
                  {' '}
                  Your browser does not support the video tag.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </video>
              <div className="video-caption">
                <h3>Teaching Philosophy</h3>
                <p>Experience Carolina&apos;s approach to Jyotish</p>
              </div>
            </div>
          </div>
          <div className="bio-card">
            <h2 id="about-heading">Jyotishi Carolina Ortiz</h2>
            <p className="subtitle">Vedic Guide &amp; Creative Astrologer</p>
            <p>
              {' '}
              Jyotishi Carolina blends rigorous Jyotish scholarship with an
              artist&apos;s sensibility. Trained in classical Vedic astrology,
              she reads charts as living compositions: planetary rhythms as
              color, dashas as narrative beats, and transits as shifts in
              texture.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p>
              {' '}
              Her work translates technical mastery into actionable insights for
              artists, designers, and cultural leaders seeking direction, deeper
              craft, and the courage to create.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="bio-highlights">
              <div className="highlight-item">
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
                <span>Decades of Classical Study</span>
              </div>
              <div className="highlight-item">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                  </g>
                </svg>
                <span>International Clients</span>
              </div>
              <div className="highlight-item">
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
                    <path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                    <circle
                      r=".5"
                      cx="13.5"
                      cy="6.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="17.5"
                      cy="10.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="6.5"
                      cy="12.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="8.5"
                      cy="7.5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <span>Creative Practice Focus</span>
              </div>
            </div>
            <a href="#about-full">
              <div
                role="button"
                aria-label="Learn more about Carolina"
                className="btn-primary btn"
              >
                <span>
                  {' '}
                  Discover Carolina&apos;s Journey
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="credential-strip-bottom">
          <div className="credential-chip">
            <span>Certified in Classical Jyotish</span>
          </div>
          <div className="credential-chip">
            <span>Practical Mentoring</span>
          </div>
          <div className="credential-chip">
            <span>Creative Breakthrough Guide</span>
          </div>
          <div className="credential-chip">
            <span>Warm &amp; Precise Sessions</span>
          </div>
        </div>
      </section>
      <section
        role="region"
        aria-labelledby="services-heading"
        className="services-section"
      >
        <div className="services-container">
          <h2 id="services-heading" className="section-title">
            {' '}
            Offerings — Guided, Creative, Transformative
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <p className="section-subtitle">
            {' '}
            A concise suite of Vedic astrology experiences crafted for makers,
            directors, and creative leaders who want celestial clarity to shape
            their practice and projects.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="services-grid">
            <article
              role="group"
              aria-labelledby="service-1"
              className="service-card flagship"
            >
              <div className="home-card-image1 card-image"></div>
              <div className="card-content">
                <h3 id="service-1">Private Jyotish Consultations</h3>
                <p>
                  {' '}
                  75–90 minutes, bespoke interpretation and action plan. Deep
                  chart synthesis, career-creative cycle mapping, timing for
                  launches, collaborations, and signature works.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="service-meta">
                  <span className="duration">90 min</span>
                  <span className="deliverable">Annotated Chart PDF</span>
                </div>
                <a href="#book-private">
                  <div className="btn-primary btn">
                    <span>Book Session</span>
                  </div>
                </a>
              </div>
            </article>
            <article
              role="group"
              aria-labelledby="service-2"
              className="service-card flagship"
            >
              <div className="home-card-image2 card-image"></div>
              <div className="card-content">
                <h3 id="service-2">Project &amp; Launch Readings</h3>
                <p>
                  {' '}
                  Focused 45-minute sessions tailored to a single creative
                  endeavor: book launches, exhibitions, product drops, or season
                  releases.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="service-meta">
                  <span className="duration">45 min</span>
                  <span className="deliverable">Timing Guide</span>
                </div>
                <a href="#book-project">
                  <div className="btn-primary btn">
                    <span>Schedule Now</span>
                  </div>
                </a>
              </div>
            </article>
            <article
              role="group"
              aria-labelledby="service-3"
              className="service-card flagship"
            >
              <div className="home-card-image3 card-image"></div>
              <div className="card-content">
                <h3 id="service-3">Creative Mentorship Series</h3>
                <p>
                  {' '}
                  Multi-session pathway (3 or 6 sessions) integrating Jyotish
                  with creative practice: seasonal planning, concept incubation,
                  and sustainable workflow.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="service-meta">
                  <span className="duration">3–6 sessions</span>
                  <span className="deliverable">Resource Packets</span>
                </div>
                <a href="#mentorship">
                  <div className="btn-primary btn">
                    <span>Enroll</span>
                  </div>
                </a>
              </div>
            </article>
            <article
              role="group"
              aria-labelledby="service-4"
              className="service-card"
            >
              <h3 id="service-4">Astrology for Teams</h3>
              <p>
                {' '}
                Group workshops and chart-led strategy sessions for studios,
                collectives, and cultural organizations.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#teams">
                <div className="btn btn-secondary">
                  <span>Learn More</span>
                </div>
              </a>
            </article>
            <article
              role="group"
              aria-labelledby="service-5"
              className="service-card"
            >
              <h3 id="service-5">Artistic Chart Readings</h3>
              <p>
                {' '}
                Aesthetic-forward interpretations that translate planetary
                symbolism into visual and narrative prompts for artists.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#artistic">
                <div className="btn btn-secondary">
                  <span>Explore</span>
                </div>
              </a>
            </article>
            <article
              role="group"
              aria-labelledby="service-6"
              className="service-card"
            >
              <h3 id="service-6">Formats &amp; Access</h3>
              <p>
                {' '}
                In-person (select residencies), video consultations, and
                recorded sessions with time-stamped summaries.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#formats">
                <div className="btn btn-secondary">
                  <span>View Options</span>
                </div>
              </a>
            </article>
            <article
              role="group"
              aria-labelledby="guidance"
              className="service-card guidance-card"
            >
              <h3 id="guidance">How to Choose Your Path</h3>
              <p>
                {' '}
                Pick Private Jyotish for life-defining clarity; Project Reading
                for focused launches; Mentorship Series for sustained growth;
                Team Workshops for organizational alignment. Still unsure? Join
                the free Skool community to sample teachings and ask for a
                personalized recommendation.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#skool-join">
                <div className="btn-accent btn">
                  <span>Join Skool Community</span>
                </div>
              </a>
            </article>
          </div>
        </div>
      </section>
      <section
        role="region"
        aria-labelledby="testimonials-heading"
        className="testimonials-section"
      >
        <h2 id="testimonials-heading" className="visually-hidden">
          {' '}
          Student Testimonials
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h2>
        <div className="carousel-viewport">
          <div className="carousel-track">
            <article role="listitem" className="card">
              <blockquote className="quote">
                <span>
                  {' '}
                  &quot;A luminous guide for my creative path—Carolina&apos;s
                  reading translated planetary patterns into practical next
                  steps for my gallery launch. Revenue and confidence
                  followed.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
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
                  {' '}
                  &quot;The Skool community feels like a living syllabus:
                  workshops, peer critiques, and Carolina&apos;s insights
                  sharpened my craft and my schedule. I landed two commissions
                  within months.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
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
                  {' '}
                  &quot;I expected poetic language; I received rigorous,
                  teachable frameworks. Her Vedic charts clarified timing for
                  residencies and contracts—game changer for my practice.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
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
                  {' '}
                  &quot;After a private session I restructured my studio
                  calendar according to planetary seasons. My productivity
                  doubled and my best work came through.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
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
                  {' '}
                  &quot;Soma in the Stars marries intuition with method. The
                  free Skool space introduced me to tools and mentors; the
                  one-on-one reading made those tools actionable.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
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
                  {' '}
                  &quot;Professional, poetic, and precise. Carolina&apos;s
                  readings have become part of our creative team&apos;s
                  planning—she translates cosmic cycles into deadlines and
                  breakthroughs.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
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
      <section
        role="region"
        aria-labelledby="insights-title"
        className="insights"
      >
        <div className="insights-container">
          <h2 id="insights-title" className="section-title">
            Insights &amp; Practice
          </h2>
          <p className="section-subtitle">
            {' '}
            A curated digest for creative minds — deep, lyrical essays and
            practical lessons that translate Jyotish into studio practice,
            project planning, and creative cycles.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div
            role="region"
            aria-label="Recent essays"
            aria-roledescription="carousel"
            className="carousel"
          >
            <article className="insight-card card">
              <div className="home-card-image-slot1 card-image-slot"></div>
              <div className="card-text">
                <h3>Planetary Prompts</h3>
                <p>
                  {' '}
                  Monthly short reads that map upcoming transits to artistic
                  opportunity. Clear learning outcomes and suggested prompts.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="card-meta">
                  <span className="duration">5 min read</span>
                  <span className="level">All Levels</span>
                </div>
              </div>
            </article>
            <article className="insight-card card">
              <div className="home-card-image-slot2 card-image-slot"></div>
              <div className="card-text">
                <h3>Timing Your Launch</h3>
                <p>
                  {' '}
                  A condensed lesson on electional timing for creative projects:
                  theory, case study, and a reproducible checklist.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="card-meta">
                  <span className="duration">12 min read</span>
                  <span className="level">Studio Level</span>
                </div>
              </div>
            </article>
            <article className="insight-card card">
              <div className="home-card-image-slot3 card-image-slot"></div>
              <div className="card-text">
                <h3>Student Spotlight</h3>
                <p>
                  {' '}
                  Case-study profiles showing how Skool members used
                  astrological timing to finish exhibitions and commissions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="card-meta">
                  <span className="duration">8 min read</span>
                  <span className="level">Case Study</span>
                </div>
              </div>
            </article>
            <article className="insight-card card">
              <div className="home-card-image-slot4 card-image-slot"></div>
              <div className="card-text">
                <h3>Chart Reading Basics</h3>
                <p>
                  {' '}
                  Compact visual guides on chart reading fundamentals tailored
                  for designers, performers, and makers.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="card-meta">
                  <span className="duration">6 min read</span>
                  <span className="level">Foundational</span>
                </div>
              </div>
            </article>
          </div>
          <div className="matrix">
            <article className="card feature">
              <div className="accent-bar"></div>
              <h3>Masterclass Excerpt</h3>
              <p>
                {' '}
                Deep dive into electional astrology with Carolina&apos;s
                signature teaching methodology.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#masterclass">
                <div className="btn-primary btn">
                  <span>View Lesson</span>
                </div>
              </a>
            </article>
            <article className="masterclass card">
              <div className="accent-bar"></div>
              <h3>Process &amp; Outcome</h3>
              <p>
                {' '}
                Real stories from artists who used astrology to complete major
                projects.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#outcomes">
                <div className="btn-primary btn">
                  <span>Read Stories</span>
                </div>
              </a>
            </article>
            <article className="howto card">
              <div className="accent-bar"></div>
              <h3>Archive &amp; Search</h3>
              <p>
                Discover content by skill level, format, and creative
                discipline.
              </p>
              <a href="#archive">
                <div className="btn-primary btn">
                  <span>Browse Library</span>
                </div>
              </a>
            </article>
          </div>
          <div className="insights-cta">
            <p>
              {' '}
              Dive into the full Insights library inside our free Skool
              community for ongoing lessons, live study sessions, and peer
              feedback.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <a href="#skool-insights">
              <div className="btn-accent btn">
                <span>Explore All Insights</span>
              </div>
            </a>
          </div>
        </div>
      </section>
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
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon34"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text201">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
