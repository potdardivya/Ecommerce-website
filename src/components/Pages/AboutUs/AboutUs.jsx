import React from 'react'
import artisanImage from '../../../Assets/tamara-bellis-HY1fq4ZtLTE-unsplash.jpg'; // Replace with your image path
import processVideo from '../../../Assets/dummyvideo.mp4'; // Replace with your video path
import './AboutUs.css'
export default function AboutUs() {
  return (
    <div className="about-page">
     
      <section className="artisan-story">
        <h2>Meet the Artisans</h2>
        <div className="story-content">
          <div className="text-content">
            <p>
              Our artisans are the heart and soul of our craft. They have honed their skills over years of practice,
              passing down traditions that embody the essence of dedication, creativity, and precision. Each product
              reflects their love for handmade work, ensuring that no two pieces are alike.
            </p>
            <p>
              We are proud to share their stories and connect you with their inspiring work. By showcasing their
              dedication, we help preserve their art and support their livelihoods.
            </p>
          </div>
          <div className="image-content">
            <img src={artisanImage} alt="Artisan at work" />
          </div>
        </div>
      </section>

      <section className="process-stories">
        <h2>The Making Process</h2>
        <p>
          Dive into the world of craftsmanship with a glimpse of how our unique bags come to life.
        </p>
        <div className="video-container">
          <video controls>
            <source src={processVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="highlights">
          <div className="highlight">
            <h3>Authenticity</h3>
            <p>Each bag is an original piece, crafted by hand with attention to every detail.</p>
          </div>
          <div className="highlight">
            <h3>Quality Craftsmanship</h3>
            <p>We prioritize quality over quantity, ensuring that each product stands the test of time.</p>
          </div>
          <div className="highlight">
            <h3>Supporting Artisans</h3>
            <p>Your purchase helps support skilled artisans and keep traditional crafts alive.</p>
          </div>
        </div>
      </section>
    </div>
  );
}