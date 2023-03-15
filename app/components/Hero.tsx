import Image from "next/image";
import hero from "@/public/hero.jpg";
const Hero = () => {
	return (
		<>
			<section className='text-gray-600 body-font bg-[#F0F0F0]'>
				<div className='container mx-auto flex px-5 py-20 md:flex-row flex-col items-center md:px-14'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify'>
						<h1 className=' md:text-4xl lg:text-5xl text-2xl mb-4 font-semibold  text-justify'>
							Certified Web 3.0 & <br />
							Metaverse Developer
						</h1>

						<p className='leading-relaxed '>
							A One and Quarter Years Panaverse DAO Earn as you Learn Program
							Getting Ready for the Next Generation of the Internet
							Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
							Cloud, Edge, Ambient Computing/IoT, Network Automation, and
							Bioinformatics Technologies
						</p>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<Image
							width={991}
							height={570}
							className='object-cover object-center rounded'
							alt='hero'
							src={hero.src}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
