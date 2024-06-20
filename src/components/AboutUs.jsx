import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='a1'>
      <div className="container1">
        <div className="a2">
          <h2>About Us</h2>
          <p>Welcome to our Company, your trusted partner in real estate. Established in 2024, we have been dedicated to helping our clients navigate the complexities of the real estate market with confidence and ease. Our commitment to excellence, integrity, and personalized service has made us a leading name in the industry.
            our Company began with a vision to transform the real estate experience for buyers, sellers, and investors. Over the years, we have built a reputation for delivering exceptional results and creating lasting relationships with our clients. Our team of experienced professionals is passionate about real estate and dedicated to providing the highest level of service.
          </p>
          <h2>Benefits Of working with us:</h2>
          <p><b>Expertise and Experience:</b> With years of experience in the real estate industry, our team possesses deep market knowledge and a proven track record of success.
          <br />
          <br />
            <b>Personalized Service:</b> We take the time to understand your unique needs and goals, providing tailored solutions that best suit your situation.
            <br />
            <br />
           <b> Market Insights:</b> Stay ahead with our detailed market analysis and reports, helping you make informed decisions.
          </p>
          <h2>Our Vision:</h2>
          <p>Our vision at our Company is to redefine the real estate industry by setting new standards of excellence and innovation. We aim to be the most trusted and respected real estate firm, known for our commitment to client satisfaction and our ability to consistently deliver outstanding results. We envision a future where every client feels empowered and confident in their real estate decisions.</p>
          <button className='about-button'>Get started</button>
        </div>
        <div className='a3'>
            <span></span>
          <span><img src="https://balajiaws.s3.ap-south-1.amazonaws.com/Real_Estate/Developer-8/IMG-20240527-WA0051.jpg" alt="logo" width={100} /></span>
          
        </div>
      </div>

    </div>

  );
};

export default AboutUs;