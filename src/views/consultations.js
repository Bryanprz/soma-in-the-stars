import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './consultations.css'

const Consultations = (props) => {
  return (
    <div className="consultations-container">
      <Helmet>
        <title>Private Jyotish Consultation | Soma in the Stars</title>
        <meta
          property="og:title"
          content="Private Jyotish Consultation | Soma in the Stars"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E%F0%9F%8C%99%3C/text%3E%3C/svg%3E"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="consultations-hero">
        <div className="consultations-hero-inner">
          <h1 className="section-title">Private Jyotish Consultation</h1>
          <p className="section-subtitle">
            A one-on-one, 75-90 minute deep dive into your Vedic birth chart
            with Jyotishi Carolina Ortiz.
          </p>
        </div>
      </section>
      <section className="consultations-content">
        <div className="consultations-card">
          <h3>What You Receive</h3>
          <p>
            A bespoke interpretation and action plan covering deep chart
            synthesis, career-creative cycle mapping, and timing guidance for
            launches, collaborations, and signature works.
          </p>
          <div className="consultations-details">
            <span className="detail-tag">75-90 minutes</span>
            <span className="detail-tag">Video consultation</span>
            <span className="detail-tag">Annotated Chart PDF</span>
          </div>
          <div className="consultations-includes">
            <h4>Your session includes:</h4>
            <ul>
              <li>Full Vedic birth chart analysis</li>
              <li>Career and creative cycle mapping</li>
              <li>Personalized timing recommendations</li>
              <li>Annotated chart PDF delivered after session</li>
              <li>Recording of your consultation</li>
            </ul>
          </div>
          <div className="consultations-cta">
            <a
              href="https://buy.stripe.com/8x2bJ0gABgvH8kj9dEcAo00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-primary btn-lg btn">
                <span>Book Your Reading</span>
              </div>
            </a>
            <span className="secure-note">
              Secure checkout powered by Stripe
            </span>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Consultations
