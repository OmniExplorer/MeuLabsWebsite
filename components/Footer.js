import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/30 bg-cream text-navy">
      <div className="page-shell" style={{ padding: '40px 0' }}>
        <div className="footer-grid" style={{ display: 'grid', gap: '24px' }}>
          <div>
            <p className="eyebrow">Meu Labs</p>
            <p>Project-based robotics, coding, STEM, and AI learning for Sri Lankan students.</p>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <p>
              <a href="tel:+94XXXXXXXXX">+94XXXXXXXXX</a>
              <br />
              <a href="mailto:hello@meulabs.org">hello@meulabs.org</a>
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <nav style={{ display: 'grid', gap: '10px' }}>
              <Link href="/">Home</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
