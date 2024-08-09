import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body>
        <div className="container mx-auto px-10 py-2">
          {children}
        </div>
      </body>
    </html>
  );
}
