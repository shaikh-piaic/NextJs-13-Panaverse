import nutshell from "@/public/nutshell.jpg";
import studies from "@/public/Coding-Guy.png";
import Image from "next/image";

const Desc = () => {
	return (
		<>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-20 lg:flex-row md:flex-col flex-col items-center md:px-14'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-2'>
						<Image
							className='object-cover object-center rounded'
							alt='Program in a Nutshell'
							src={nutshell.src}
							width={720}
							height={600}
						/>
					</div>
					<div className='lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className=' sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-justify'>
							The Program in a Nutshell: Earn While You Learn
						</h1>
						<p className='mb-8 leading-relaxed text-base md:text-xl lg:text-2xl text-justify'>
							In this brand-new type of curriculum, students will learn how to
							make money and boost exports in the classroom and will begin doing
							so within six months of the program&apos;s beginning. It resembles
							a cross between a corporate venture and an educational project.
						</p>
					</div>
				</div>
			</section>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-20 lg:flex-row md:flex-col flex-col items-center md:px-14'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:order-2 lg:order-none'>
						<Image
							className='object-cover object-center rounded'
							alt='Coding Guy'
							src={studies.src}
							width={720}
							height={600}
						/>
					</div>
					<div className='lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className=' sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-justify'>
							Program of Studies
						</h1>
						<p className='mb-8 leading-relaxed text-base md:text-xl lg:text-2xl text-justify'>
							This curriculum is intended for beginners who want to learn
							software development from the ground up. The first three quarters
							are shared by all specialties and are dedicated to studying
							Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
							development. It is going to be a fifteen-month-long hybrid program
							that includes both onsite and online classes and is divided into
							five quarters of 13 weeks each. The emphasis will be on hands-on
							learning by educating students to produce projects. To accommodate
							everyone, courses will be held primarily on weekends or on
							weekdays. It employs a hybrid teaching format, with core onsite
							classes complemented by online Zoom laboratories and recorded
							videos.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Desc;
