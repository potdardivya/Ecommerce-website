// Home/StorySection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const StorySection = () => {
  return (
    <div className="story-section">
      <h2>Our Story</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.
      </p>
    <Link to="/about">  <button className="learn-more-button">Learn More</button></Link>
    </div>
  );
};

export default StorySection;
