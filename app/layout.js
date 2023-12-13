import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "지안이의 돌잔치",
  description: "지안이의 첫 생일!!!",
  openGraph: {
    title: "지안이의 돌잔치 초대장 👶🏻",
    description: "1월 13일 (토)",
    image: "https://ifh.cc/g/ymC9Yc.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html style={{ height: "100%" }} lang="en">
      <body style={{ padding: 0, margin: 0, height: "100%" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
