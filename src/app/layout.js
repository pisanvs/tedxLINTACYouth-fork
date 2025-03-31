import PoppinsFont from "@/utils/PoppinsFont";
import "./globals.css";
import { DictProvider } from "@/locales/dict";

export const metadata = {
  title: "TEDxLINTAC Youth | Website",
  description: "TEDxLINTAC Youth 2025: All Limits; Beyond Limits. Lincoln International Academy Gymnasium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PoppinsFont />
      <body className="selection:bg-red selection:text-white">
        <DictProvider>
          {children}
        </DictProvider>
      </body>
    </html>
  );
}
