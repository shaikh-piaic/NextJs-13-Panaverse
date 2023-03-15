import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
	title: "Panaverse Dao",
	description:
		"The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='font-serif'>
				<Navbar />
				<div className='flex flex-col min-h-screen'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
