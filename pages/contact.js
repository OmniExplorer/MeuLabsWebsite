import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Meu Labs</title>
        <meta
          name="description"
          content="Contact Meu Labs for student counseling, course registration, or more information about our STEM learning programs."
        />
      </Head>

      <section className="section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h1>Get in touch with a student counselor.</h1>
            <p>
              We&apos;re here to help you choose the right course for your child and answer questions about schedules,
              fees, and learning pathways.
            </p>
          </div>

          <div className="rounded-card" style={{ padding: '32px', background: '#fff' }}>
            <h2>Talk to us</h2>
            <p>
              Call or WhatsApp us at <a href="tel:+94XXXXXXXXX">+94XXXXXXXXX</a>, or email{' '}
              <a href="mailto:hello@meulabs.org">hello@meulabs.org</a>.
            </p>
            <p>
              You can also reach us on social media for project updates and course announcements.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
