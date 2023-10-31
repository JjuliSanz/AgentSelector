import "./globals.css";
import { Providers } from "./providers";


export const metadata = {
  title: "ValoDesignWeb",
  description: "Select Agent Valorant Web",
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
