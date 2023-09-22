import "./globals.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Cyper Studio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
