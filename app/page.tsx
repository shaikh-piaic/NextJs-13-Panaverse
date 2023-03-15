import { Inter } from "next/font/google";
import About from "./components/About";
import Courses from "./components/Courses";
import Desc from "./components/Desc";
import Hero from "./components/Hero";
import Outcome from "./components/Outcome";

export default function Home() {
	return (
		<>
			<div className='container'>
				<Hero />
				<About />
				<Desc />
				<Courses />
				<Outcome />
			</div>
		</>
	);
}
