import Head from 'next/head'
import Link from 'next/link'

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses | Meu Labs</title>
        <meta
          name="description"
          content="Course offerings at Meu Labs include robotics, coding, AI, data science, design and creative STEM learning for kids."
        />
      </Head>

      <section className="section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="section-kicker">Courses</p>
            <h1>Project-based learning paths for every learner.</h1>
            <p>
              Choose a course pathway that matches your child&apos;s age, interests and experience. Each course includes
              hands-on projects, expert guidance and real-world skill building.
            </p>
          </div>

          <div className="pathway-grid">
            {[
              { title: 'STEM for Kids: Junior', subtitle: 'Age 8 - 12', description: 'Introductory robotics, coding and creative STEM projects.' },
              { title: 'Coding for Kids', subtitle: 'Age 10 - 14', description: 'Build apps, games and computational thinking skills.' },
              { title: 'Robotics and IoT', subtitle: 'Age 10 - 15', description: 'Design robots, sensors and automation systems for real challenges.' },
              { title: 'Data Science & AI', subtitle: 'Age 12+', description: 'Explore data, machine learning, dashboards and AI assistants.' },
            ].map((course) => (
              <article key={course.title} className="stage-card" style={{ padding: '28px', background: '#fff' }}>
                <div className="stage-top">
                  <span className="stage-icon">•</span>
                  <div>
                    <h3>{course.title}</h3>
                    <p className="age-chip">{course.subtitle}</p>
                  </div>
                </div>
                <p>{course.description}</p>
              </article>
            ))}
          </div>

          <div className="center-action" style={{ marginTop: '32px' }}>
            <Link href="/contact" className="btn btn-primary">
              Book a counseling call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
