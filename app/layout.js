import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Agencia Monarca | Marketing Digital",
  description: "Transformamos marcas con estrategias digitales que generan resultados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geist.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}