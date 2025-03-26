import "./Events.css"; 

function Events() {
  return (
    <div className="events-page">
      <h1>MUTC Weekly Schedule</h1>
      <p>Join us for various learning activities and workshops!</p>

      <div className="events-list">
        <div className="event-card">
          <h2>Monday</h2>
          <p><b>Topic:</b> Cyber Security</p>
          <p><b>Time:</b> 4pm - 7pm</p>
          <p><b>Location:</b> Computer Lab F04</p>
          <p><b>Led by:</b> Webster Ifedha</p>
        </div>

        <div className="event-card">
          <h2>Tuesday</h2>
          <p><b>Topic:</b> UI/UX</p>
          <p><b>Time:</b> 5pm - 8pm</p>
          <p><b>Location:</b> Computer Lab F04</p>
          <p><b>Led by:</b> Manase Gunga</p>
        </div>

        <div className="event-card">
          <h2>Wednesday</h2>
          <p><b>Topic:</b> Web Development</p>
          <p><b>Time:</b> 6pm - 9pm</p>
          <p><b>Location:</b> Computer Lab F04</p>
          <p><b>Led by:</b> Carolyne Githenduka</p>
        </div>

        <div className="event-card">
          <h2>Thursday</h2>
          <p><b>Topic:</b> Mobile Apps Development</p>
          <p><b>Time:</b> 4pm - 7pm</p>
          <p><b>Location:</b> Computer Lab F04</p>
          <p><b>Led by:</b> Stanley Amunze</p>
        </div>

        <div className="event-card">
          <h2>Friday</h2>
          <p><b>Topic:</b> Cloud Engineering</p>
          <p><b>Time:</b> 3pm - 6pm</p>
          <p><b>Location:</b> Computer Lab F04</p>
          <p><b>Led by:</b> Paul Karanja</p>
        </div>

        <div className="event-card">
          <h2>Saturday</h2>
          <p><b>Topic:</b> Power Platform</p>
          <p><b>Time:</b> 1pm - 4pm</p>
          <p><b>Location:</b> Computer Lab F04</p>
          <p><b>Led by:</b> Evyonn Mbithe</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
