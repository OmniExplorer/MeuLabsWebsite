import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Meu Labs</title>
        <meta
          name="description"
          content="Meu Labs is a project-based learning space for robotics, coding, design, data and AI learning in Sri Lanka."
        />
      </Head>

      <section className="section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="section-kicker">About Meu Labs</p>
            <h1>Helping students build confidence through real-world STEM learning.</h1>
            <p>
              Meu Labs is a project-based learning space where students explore robotics, coding, design, data, and AI
              through guided hands-on programmes.
            </p>
          </div>

          <div className="grid-cols-2" style={{ display: 'grid', gap: '28px' }}>
            <div className="rounded-card" style={{ padding: '28px', background: '#fff' }}>
              <h2>Our learning model</h2>
              <p>
                Students learn best when they can build, test, explain and improve their ideas. At Meu Labs, technical
                concepts are introduced through guided projects, instructor support and real presentation practice.
              </p>
            </div>
            <div className="rounded-card" style={{ padding: '28px', background: '#fff' }}>
              <h2>Why it works</h2>
              <p>
                We blend curiosity, creativity and serious STEM skill-building with mentorship, structured progression and
                student ownership of learning.
              </p>
            </div>
            <div className="rounded-card" style={{ padding: '28px', background: '#fff' }}>
              <h2>Student outcomes</h2>
              <p>
                Students grow problem-solving ability, technical confidence, communication, collaboration and portfolio
                work.
              </p>
            </div>
            <div className="rounded-card" style={{ padding: '28px', background: '#fff' }}>
              <h2>Future-ready pathways</h2>
              <p>
                Our pathway connects foundations to advanced software, data, AI, embedded systems and product design.
              </p>
            </div>
          </div>

          <div className="center-action" style={{ marginTop: '32px' }}>
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
