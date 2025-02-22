import { PROJECTS } from '../constants/index';
import { motion } from 'framer-motion';
const Projects = () => {
	return (
		<section className='pb-4'>
			<motion.h2
				className='my-20 text-center text-4xl'
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
			>
				Projects
			</motion.h2>
			<div>
				{PROJECTS.map((project) => (
					<div
						key={project.id}
						className='mb-8 flex flex-wrap lg:justify-center'
					>
						<motion.div
							className='w-full lg:w-1/4'
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
						>
							<img
								className='mb-6 rounded'
								src={project.image}
								alt={project.title}
								width={250}
								height={250}
							/>
						</motion.div>
						<motion.div
							className='w-full max-w-xl lg:w-3/4'
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
						>
							<a
								href={project.link}
								className='hover:underline'
								target='_blank'
							>
								<h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
							</a>
							<p className='mb-4 text-stone-400'>{project.description}</p>
							{project.technologies.map((tech, index) => (
								<span
									key={index}
									className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
								>
									{tech}
								</span>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
