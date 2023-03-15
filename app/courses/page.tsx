import ai from "@/public/ai.jpg";
import iot from "@/public/iot.jpg";
import cnc from "@/public/cnc.jpg";
import bcc from "@/public/bcc.jpg";
import gab from "@/public/gab.jpg";
import npa from "@/public/npa.jpg";
import q1 from "@/public/typescript.png";
import q2 from "@/public/Nextjs.png";
import q3 from "@/public/dollar.jpg";

import Image from "next/image";
import Link from "next/link";

const page = () => {
	// bg-[#211E39]
	return (
		<>
			{/* Header */}
			<section className='text-white/90 body-font bg-gray-500 '>
				<div className='container mx-auto px-5 py-16 md:px-14 md:py-28 lg:py-28'>
					<div className='lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-justify'>
						<h1 className=' md:text-4xl lg:text-5xl text-2xl mb-4 font-semibold text-white/90 text-justify'>
							Earn While you Learn
							{/* <br className='hidden lg:inline-block' /> */}
						</h1>
					</div>
				</div>
			</section>
			{/* Program */}
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-12 mx-auto flex flex-wrap md:px-14 flex-col'>
					<h2 className='text-xl  font-medium  mb-2 md:text-3xl lg:text-4xl '>
						Program of Studies
					</h2>
					<div className='md:w-5/5 '>
						<p className='leading-relaxed text-base text-justify md:text-xl lg:2xl'>
							The first three quarters are shared by all specialities and are
							dedicated to studying Object-Oriented Programming and cutting-edge
							Full-Stack Web 2.0 development. It is going to be a
							fifteen-month-long hybrid program that includes both onsite and
							online classes and is divided into five quarters of 13 weeks each.
							The emphasis will be on hands-on learning by educating students to
							produce projects.
						</p>
					</div>
				</div>
			</section>
			{/* Core */}
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-5 mx-auto md:px-14'>
					<h2 className='text-xl  font-medium  mb-10 md:text-3xl lg:text-4xl '>
						Core Courses (Common in All Specializations)
					</h2>
					<div className='md:w-3/5 mb-10 '>
						<p className='leading-relaxed text-base text-justify md:text-xl lg:2xl'>
							Every participant of the program will start by completing the
							following three core courses
						</p>
					</div>
					<div className='flex flex-wrap -m-4'>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={q1.src}
									alt='Typescript Logo'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										CORE
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/core/q1"}>
											Object-Oriented Programming using TypeScript
										</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4'>
										We will start the program by learning the fundamentals of
										Object-Oriented programming using JavaScript and TypeScript.
										We will also understand the latest Web trends i.e. Web 3.0
										and Metaverse concepts and try to understand their working
										from the perspective of the users.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={q2.src}
									alt='Nextjs Logo'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										Core
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/core/q2"}>
											Developing Planet-Scale Web 2.0 Apps using Next.js 13
										</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4'>
										The objective of this course is to teach participants to
										develop customer-facing planet-scale Websites, Full-Stack
										Apps and templates, Dashboards, and Muti-Cloud Serverless
										APIs. By the end of the quarter, the participants will be
										able to develop and deploy web platforms like Facebook,
										Shopify, etc. The technologies covered in this course will
										include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC,
										QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
										Compatible), AWS Serverless Technologies, and Cloud
										Development Kit for Terraform (CDKTF).
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/3 md:w-2/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={q3.src}
									alt='Dollar Image'
									width={720}
									height={400}
								/>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										CORE
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/core/q3"}>
											Dollar Making Bootcamp - Full-Stack Template
										</Link>
									</h1>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4'>
										In this course, you will be tasked with building APIs and a
										template to be sold on the Panaverse DAO Marketplace and
										Theme Forest. The Panaverse DAO will receive 25% of the sale
										for platform management and an additional 15% for marketing
										purposes. 60% of the revenues will be distributed to the
										developer as Panaverse tokens.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Specialization */}
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-5 mx-auto md:px-14'>
					<h2 className='text-xl  font-medium  mb-10 md:text-3xl lg:text-4xl '>
						Specializations
					</h2>
					<div className='md:w-3/5 mb-10 '>
						<p className='leading-relaxed text-base text-justify md:text-xl lg:2xl'>
							After completing the first three quarters the participants will
							select one or more specializations consisting of two courses each:
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
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/courses/ai"}>
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
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/courses/iot"}>Ambient Computing and IoT</Link>
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
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/courses/cnc"}>Cloud-Native Computing</Link>
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
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/courses/bcc"}>
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
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/courses/gab"}>
											Genomics and Bioinformatics
										</Link>
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
									<h2 className='tracking-widest text-xs  font-medium text-gray-400 mb-1'>
										SPECIALIZATION
									</h2>
									<h1 className=' text-base font-medium  mb-3 md:hover:text-rose-600 md:hover:underline'>
										<Link href={"/courses/npa"}>
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

export default page;
