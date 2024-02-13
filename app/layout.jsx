import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Valorant Select Agent Web",
  description:
    "This project is a dynamic web application built with Next.js, Tailwind CSS, and JavaScript, offering an immersive experience reminiscent of the agent selection process in the popular game Valorant. Users can explore a visually appealing interface where they can select agents, each with unique abilities, mimicking the game's agent selection feature.",
  metadataBase: new URL("https://agent-selector.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
