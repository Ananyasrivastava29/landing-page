function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
  <ul className="nav-items">
    <li className="dropdown">
      Courses
      <ul className="dropdown-menu">
        <li>JEE</li>
        <li>NEET</li>
        <li>CLAT</li>
      </ul>
    </li>

    <li className="nav-highlight">Paths</li>
    <li className="nav-highlight">Community</li>
    <li className="login-btn">Login</li>
  </ul>
</nav>


      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Learn with <span>Clarity</span><br />
            Grow with Depth
          </h1>

          <p>
            A focused learning platform for competitive exams.
            Structured paths, visual understanding, and calm progress.
          </p>

          <div className="buttons">
            <button className="primary">Explore Courses</button>
            <button className="secondary">How It Works</button>
          </div>
        </div>

        {/* VISUAL AREA (IMAGE ADDED HERE) */}
        <div className="visual">
          <div className="glow"></div>

          <div className="study-image">
            <img src="/study-desk.jpg" alt="Student studying" />
          </div>
        </div>
      </section>

      {/* FLOW SECTION */}
      <section className="flow">
        <h2>How Learning Flows</h2>

        <div className="flow-steps">
          <div className="step">Understand Concepts</div>
          <div className="line"></div>
          <div className="step">Practice Questions</div>
          <div className="line"></div>
          <div className="step">Analyze Mistakes</div>
          <div className="line"></div>
          <div className="step">Improve Rank</div>
        </div>
      </section>

      {/* EXAMS SECTION */}
      <section className="exams">
        <h2>Designed for Your Exam</h2>

        <div className="exam-cards">
          <div className="exam-card">
            <h3>JEE</h3>
            <p>Physics, Chemistry, Maths with deep problem solving.</p>
          </div>

          <div className="exam-card">
            <h3>NEET</h3>
            <p>Biology-focused learning with concept reinforcement.</p>
          </div>

          <div className="exam-card">
            <h3>CLAT</h3>
            <p>Logical reasoning, legal aptitude, and mock analysis.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="footer">
        <h2>Consistency beats intensity.</h2>
        <p>Study calmly. Progress daily.</p>
      </section>
    </div>
  );
}

export default App;
