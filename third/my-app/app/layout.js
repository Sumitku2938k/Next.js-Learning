import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Facebook - Connect with the world",
  description: "This is a facebook and we can connect with the world using facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto min-h-[83vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
