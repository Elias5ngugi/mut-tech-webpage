import "./Tracks.css";

function Tracks() {
  return (
    <div>
      <section className="tracks-hero">
        <h1>Explore Our Tracks</h1>
        <p>Join a specialized track and elevate your skills in technology.</p>
      </section>

      <section className="tracks-container">
        <div className="track-card">
          <img src="src/Tracks-images/cybersecurity.jpg" alt="Cyber Security" className="track-image" />
          <div className="card-content">
            <h3 className="track-title">Cyber Security</h3>
            <p className="track-description">
              Protect systems, master ethical hacking, and prevent cyber threats.
            </p>
          </div>
          <div className="tech-lines"></div>
        </div>

        <div className="track-card">
          <img src="src/Tracks-images/UIUX-design.jpg" alt="UI/UX Design" className="track-image" />
          <div className="card-content">
            <h3 className="track-title">UI/UX Design</h3>
            <p className="track-description">
              Design stunning interfaces and create seamless user experiences.
            </p>
          </div>
          <div className="tech-lines"></div>
        </div>

        <div className="track-card">
          <img src="src/Tracks-images/web-development.jpg" alt="Web Development" className="track-image"/>
          <div className="card-content">
            <h3 className="track-title">Web Development</h3>
            <p className="track-description">
              Develop dynamic websites using front-end & back-end technologies.
            </p>
          </div>
          <div className="tech-lines"></div>
        </div>

        <div className="track-card">
          <img src="src/Tracks-images/appdev.jpeg" alt="Mobile Apps Development" className="track-image" />
          <div className="card-content">
            <h3 className="track-title">Mobile Apps Development</h3>
            <p className="track-description">
              Build engaging mobile applications for Android and iOS.
            </p>
          </div>
          <div className="tech-lines"></div>
        </div>

        <div className="track-card">
          <img src="src/Tracks-images/cloud-engineering.jpeg" alt="Cloud Engineering" className="track-image" />
          <div className="card-content">
            <h3 className="track-title">Cloud Engineering</h3>
            <p className="track-description">
              Deploy scalable applications using AWS, Google Cloud & Azure.
            </p>
          </div>
          <div className="tech-lines"></div>
        </div>

        <div className="track-card">
          <img src="src/Tracks-images/UIUX-design.jpg" alt="Power Platform" className="track-image" />
          <div className="card-content">
            <h3 className="track-title">Power Platform</h3>
            <p className="track-description">
              Create business applications using Microsoft Power Platform.
            </p>
          </div>
          <div className="tech-lines"></div>
        </div>
      </section>

      <section className="register-section">
        <h2>Join a Track</h2>
        <p>Fill in your details and select a track to enroll.</p>
        <form className="register-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Your Course" required />
          <input type="number" placeholder="Year of Study" required />
          <select required>
            <option value="">Select Track</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Apps Development">Mobile Apps Development</option>
            <option value="Cloud Engineering">Cloud Engineering</option>
            <option value="Power Platform">Power Platform</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </section>
    </div>
  );
}

export default Tracks;
