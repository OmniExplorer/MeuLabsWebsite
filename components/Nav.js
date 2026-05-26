import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Meu Labs home">
          <img src="/assets/logos/logo.svg" alt="Meu Labs" width="150" height="48" />
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/courses" className="nav-cta">
          Explore Courses
        </Link>
      </nav>
    </header>
  )
}
