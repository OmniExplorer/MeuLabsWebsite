import "./globals.css";

export const metadata = {
  title: "Meu Labs Sri Lanka",
  description: "Project-based robotics, coding, AI, design, and STEM learning for students in Sri Lanka."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.12),_transparent_22%),linear-gradient(180deg,_#f8f1e2_0%,_#fffaf2_48%,_#ffffff_100%)] font-sans text-slate-900 antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(13,53,87,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,53,87,0.04)_1px,transparent_1px)] [background-position:center] [background-size:72px_72px]" />
        {children}
      </body>
    </html>
  );
}
