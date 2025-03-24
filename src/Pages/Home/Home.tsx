import "./Home.css"
import aboutImg from "../../assets/about-img.jpeg";


function Home() {
    return (
      <div>
        <section className="hero">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>Empowering Innovators, Building the Future</h1>
            <p>Join Murang’a University Tech Club and explore endless possibilities in technology and innovation.</p>
            <button className="hero-btn">Join Us</button>
          </div>
        </section>
  
        <section className="about">
        <img src={aboutImg} alt="About image" className="about-image" />
          <div className="about-text">
            <h2>About MUTC</h2>
            <p>
              Murang’a University Tech Club (MUTC) is a dynamic hub for students passionate about technology, coding, and innovation. We provide a space where aspiring developers, designers, and tech enthusiasts can collaborate, share knowledge, and work on real-world projects.

              Through interactive workshops, hackathons, and mentorship programs, members gain hands-on experience in software development, cybersecurity, artificial intelligence, and emerging technologies. Whether you're a beginner or an experienced coder, MUTC offers an engaging environment to enhance your skills, network with industry professionals, and contribute to cutting-edge tech solutions. Join us and be part of a thriving community shaping the future of technology!
            </p>
            <h3>Our Mission</h3>
              <p>
                  To inspire and equip students with the technical and leadership skills needed to innovate and solve real-world 
                  problems using technology.
             </p>
             <h3>Our Vission</h3>
             <p>
               To be the leading student-driven tech community in Kenya, fostering a culture of creativity, collaboration, and 
               continuous learning.
             </p>
            <a href="#more" className="about-btn">Read More</a>
          </div>
        </section>
        <section className="testimonials">
            <h2>What Our Members Say</h2>
            <div className="testimonial-container">
        <div className="testimonial">
            <img src="src/assets/alex-kariuki.jpg" alt="kariukiimg" className="abt-img" />
            <p>"MUTC has been a game-changer for my tech career. The workshops and mentorship are top-notch!"</p>
            <p>⭐⭐⭐⭐⭐</p>
            <h4>- Alex Kariuki</h4>
         </div>
        <div className="testimonial">
            <img src="src/assets/faith-njoroge.jpg" alt="faithimg" className="abt-img" />
            <p>"Joining MUTC helped me build my first project and network with industry experts!"</p>
            <p>⭐⭐⭐⭐⭐</p>
            <h4>- Faith Njoroge</h4>
        </div>
          <div className="testimonial">
            <img src="src/assets/kevin-mwangi.jpg" alt="kevinimg" className="abt-img"/>
            <p>"A great place to learn, collaborate, and innovate with like-minded students."</p>
            <p>⭐⭐⭐⭐⭐</p>
            <h4>- Kevin Mwangi</h4>
        </div>
        <div className="testimonial">
            <img src="src/Leaders/allan-muhari.jpg" alt="kariukiimg" className="abt-img" />
            <p>"MUTC has been a game-changer for my tech career. The workshops and mentorship are top-notch!"</p>
            <p>⭐⭐⭐⭐⭐</p>
            <h4>- Francis Muraya</h4>
         </div>
        <div className="testimonial">
            <img src="src/Leaders/victory-njeri.jpg" alt="faithimg" className="abt-img" />
            <p>"Joining MUTC helped me build my first project and network with industry experts!"</p>
            <p>⭐⭐⭐⭐⭐</p>
            <h4>- Cynthia Wambui</h4>
        </div>
          <div className="testimonial">
            <img src="src/Leaders/manase-gunga.jpg" alt="kevinimg" className="abt-img"/>
            <p>"A great place to learn, collaborate, and innovate with like-minded students."</p>
            <p>⭐⭐⭐⭐⭐</p>
            <h4>- Moses Mbuthia</h4>
        </div>
  </div>
</section>

      </div>
    );
  }
  
  export default Home;
  