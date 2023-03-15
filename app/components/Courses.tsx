import ai from "@/public/ai.jpg";
import iot from "@/public/iot.jpg";
import cnc from "@/public/cnc.jpg";
import bcc from "@/public/bcc.jpg";
import gab from "@/public/gab.jpg";
import npa from "@/public/npa.jpg";
import Image from "next/image";
import Link from "next/link";

const Courses = () => {
	return (
		<>
			<section className='text-black body-font'>
				<div className='container px-5 py-5 mx-auto md:px-14'>
					<h2 className='text-xl  font-medium  mb-10 md:text-3xl lg:text-4xl text-justify md:text-center'>
						Specialized Courses
					</h2>
					<div className='md:w-full mb-10 '>
						<p className='leading-relaxed text-base text-justify md:text-xl lg:2xl md:text-center '>
							Total six specialized courses are offered in which first three
							quarter are same for each course.
						</p>
					</div>
					<div className='flex flex-wrap -m-4'>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={ai.src}
									alt='AI'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href='/courses/ai'>
											Artificial Intelligence and Deep Learning
										</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4'>
										The AI and Deep Learning specialization focuses on building
										and deploying intelligent APIs using OpenAI models and
										building custom Deep Learning Tensorflow models.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={iot.src}
									alt='IOT'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href='/courses/iot'>Ambient Computing and IoT</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4'>
										The Ambient Computing and IoT Specialization focuses on
										building Smart Homes, Offices, Factories, and Cities using
										Voice computing, Matter Protocol, and Embedded Devices.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={cnc.src}
									alt='CNC'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href='/courses/cnc'>Cloud-Native Computing</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4'>
										The Cloud-Native Computing Specialization focuses on
										Containers, Kubernetes, and CDK for Kubernetes.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={bcc.src}
									alt='BCC'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href='/courses/bcc'>
											Web 3.0 (Blockchain) and Metaverse
										</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4'>
										This Web 3.0 and Metaverse specialization focuses on
										developing full-stack Web 3.0 and Metaverse experiences for
										the next generation of the internet by specializing in
										building worlds that merge the best of cutting-edge
										decentralized distributed blockchains with 3D metaverse
										client experiences.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={gab.src}
									alt='GAB'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href='/courses/gab'>Genomics and Bioinformatics</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4 '>
										Genomics is the study of the total genetic makeup of
										individual organisms, and how this genetic information is
										structured, functions, and has evolved; bioinformatics
										encompasses a diverse range of analytical methods and tools
										applied to genomic data. This Specialization focuses on
										performing complex bioinformatics analysis using the most
										essential Python libraries and applications.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							{/* <Link href={"/courses/npa"}> */}
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={npa.src}
									alt='NPA'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href='/courses/npa'>
											Network Programmability and Automation
										</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4'>
										More than ever, network engineers are finding it challenging
										to complete their duties entirely manually. Network
										automation is now crucial due to new protocols,
										technologies, delivery models, and the requirement for
										enterprises to become more adaptable and agile. This course
										teaches network engineers how to automate systems with code
										using a variety of technologies and tools, including Linux,
										Python, APIs, and Git.
									</p>
								</div>
							</div>
							{/* </Link> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Courses;
