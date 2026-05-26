import Head from 'next/head'
import Link from 'next/link'

const projects = [
  { title: 'Smart City Traffic Lights', category: 'Robotics', image: '/assets/images/project-traffic.jpg' },
  { title: 'Climate Data Dashboard', category: 'Data', image: '/assets/images/project-dashboard.jpg' },
  { title: 'Product Prototype', category: 'Design', image: '/assets/images/project-prototype.jpg' },
  { title: 'Mini Documentary', category: 'Media', image: '/assets/images/project-film.jpg' },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Meu Labs</title>
        <meta
          name="description"
          content="Student projects built at Meu Labs: robotics, data dashboards, design prototypes and media productions."
        />
      </Head>

      <section className="section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="section-kicker">Student projects</p>
            <h1>See what students build at Meu Labs.</h1>
            <p>
              Students build robots, dashboards, prototypes and media projects that show how learning becomes real.
            </p>
          </div>

          <div className="project-showcase" style={{ display: 'grid', gap: '24px' }}>
            {projects.map((project) => (
              <article key={project.title} className="project-card" style={{ background: '#fff', borderRadius: '28px', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} />
                <div style={{ padding: '22px' }}>
                  <p className="eyebrow">{project.category}</p>
                  <h2>{project.title}</h2>
                </div>
              </article>
            ))}
          </div>

          <div className="center-action" style={{ marginTop: '32px' }}>
            <Link href="/contact" className="btn btn-primary">
              Contact a counselor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
