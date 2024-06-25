import "./globals.css";
import NavBar from "./components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body>
        <NavBar/>
        <div className="container mx-auto px-10 py-2">
          {children}
        </div>
      </body>
    </html>
  );
}
