import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Common/Navbar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import ScrollProgressBar from "@/Components/Common/ScrollProgressBar";
import Footer from "@/Components/Common/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Snappy Tales",
	description: "Your Growth, Our Mission",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ScrollProgressBar />
					<Navbar />
					{children}
					<Footer />
					<Toaster position="top-center" />
				</ThemeProvider>
			</body>
		</html>
	);
}
