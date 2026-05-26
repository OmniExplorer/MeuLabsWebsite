import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Labs | Robotics, Coding & STEM for Kids in Sri Lanka</title>
        <meta
          name="description"
          content="Project-based robotics, coding, STEM, AI and design learning for children and teens in Colombo, Sri Lanka."
        />
      </Head>

      <section className="hero-section">
        <div className="hero-bg" aria-hidden="true" />
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Where students discover their passion and build real world tools and skills</p>
            <h1 className="hero-title">
              <span className="hero-line">Sri Lanka&apos;s Best</span>
              <span className="hero-line">
                <img className="robotics-wordmark" src="/assets/images/robotics-wordmark-exact.svg" alt="Robotics" />
                <span className="coding-wordmark coding-wordmark-typed" role="img" aria-label="Coding" />
              </span>
              <span className="hero-line">Courses</span>
              <span className="hero-line">for <span className="word-kids">Kids</span></span>
            </h1>
            <p className="hero-subtitle">
              Bridge the gap between what your child learns in school and what they need for the real world.
            </p>
            <div className="hero-actions">
              <Link href="/courses" className="btn btn-primary">
                Explore Courses <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Speak with a Student Counselor <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>

          <div className="hero-collage" aria-label="Student project collage">
            <figure className="hero-card hero-card-main">
              <img src="/assets/images/hero-robotics.jpg" alt="Students building robotics projects" />
            </figure>
            <figure className="hero-card hero-card-code">
              <img src="/assets/images/hero-code.jpg" alt="Coding project on a computer screen" />
            </figure>
            <figure className="hero-card hero-card-board">
              <img src="/assets/images/electronics-board.jpg" alt="Electronics board project" />
              <figcaption>Smart Home</figcaption>
            </figure>
            <div className="dot-grid dot-grid-top" aria-hidden="true" />
            <div className="dot-grid dot-grid-bottom" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section pathway-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="section-kicker">Learning pathway</p>
            <h2>A long-term journey, built step by step</h2>
            <p>
              From first steps to advanced skills, our courses help students discover what they love and build
              real-world capabilities.
            </p>
          </div>

          <div className="pathway-grid">
            <article className="stage-card stage-foundations">
              <div className="stage-top">
                <span className="stage-icon">01</span>
                <div>
                  <h3>Foundations</h3>
                  <p className="age-chip">Age 8 - 12</p>
                </div>
              </div>
              <p>
                Build strong foundational skills across coding, design, robotics, videography, communication, and
                leadership while developing essential 21st-century skills.
              </p>
              <p className="course-list-label">Courses</p>
              <div className="course-list">
                <Link className="journey-course" href="/courses">
                  <span>STEM for Kids: Junior</span>
                </Link>
                <Link className="journey-course" href="/courses">
                  <span>STEM for Kids</span>
                </Link>
              </div>
            </article>

            <article className="stage-card stage-learning">
              <div className="stage-top">
                <span className="stage-icon">02</span>
                <div>
                  <h3>Learning Paths</h3>
                  <p className="age-chip">Age 10 - 14</p>
                </div>
              </div>
              <p>
                Choose themed courses aligned with engineering, analytics, or creative expression. Deeper,
                project-driven, and skill-focused.
              </p>
              <p className="course-list-label">Courses</p>
              <div className="course-list">
                <Link className="journey-course" href="/courses">
                  <span>Coding for Kids</span>
                </Link>
                <Link className="journey-course" href="/courses">
                  <span>Robotics and IoT</span>
                </Link>
                <Link className="journey-course" href="/courses">
                  <span>Digital Media Production</span>
                </Link>
              </div>
            </article>

            <article className="stage-card stage-specialisations">
              <div className="stage-top">
                <span className="stage-icon">03</span>
                <div>
                  <h3>Specialisations</h3>
                  <p className="age-chip">Age 12 - 16</p>
                </div>
              </div>
              <p>
                Dive deep into industry-focused domains through advanced projects, technical mentorship, and
                real-world problem solving.
              </p>
              <p className="course-list-label">Courses</p>
              <div className="course-list course-list-scroll">
                <div className="course-scroll-track">
                  <Link className="journey-course" href="/courses">
                    <span>Software Engineering</span>
                  </Link>
                  <Link className="journey-course" href="/courses">
                    <span>Data Science and AI</span>
                  </Link>
                  <Link className="journey-course" href="/courses">
                    <span>EEE</span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="stage-card stage-launch">
              <div className="stage-top">
                <span className="stage-icon">04</span>
                <div>
                  <h3>Launch Pad</h3>
                  <p className="age-chip">Age 16+</p>
                </div>
              </div>
              <p>
                Transition into university, career, or entrepreneurship through structured pathways and our Launch
                Network.
              </p>
              <p className="course-list-label">Pathways</p>
              <div className="course-list">
                <Link className="journey-course" href="/courses">
                  <span>Industry Gateway</span>
                </Link>
                <Link className="journey-course" href="/courses">
                  <span>University Access</span>
                </Link>
              </div>
            </article>
          </div>

          <div className="center-action">
            <Link href="/courses" className="btn btn-primary">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
