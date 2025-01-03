import project1 from '../assets/projects/project-1.webp';
import project2 from '../assets/projects/project-2.webp';
import project3 from '../assets/projects/project-3.webp';
import project4 from '../assets/projects/project-4.webp';

export const HERO_CONTENT = `A developer with a knack for crafting robust and scalable web applications. Through various personal and academic projects, I have honed my skills in front-end technologies.`;

export const ABOUT_TEXT = `Versatile JavaScript developer with experience in React, Next.js, Node.js, and databases like MySQL, PostgreSQL, and MongoDB. Passionate about crafting efficient and user-friendly web applications, solving complex problems, and collaborating in dynamic environments. Always learning and exploring new technologies.`;

export const EXPERIENCES = [
	{
		year: '2023 - Present',
		role: 'Senior Full Stack Developer',
		company: 'Google Inc.',
		description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
		technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
	},
	{
		year: '2022 - 2023',
		role: 'Frontend Developer',
		company: 'Adobe',
		description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
		technologies: ['HTML', 'CSS', 'Vue.js', 'mySQL'],
	},
	{
		year: '2021 - 2022',
		role: 'Full Stack Developer',
		company: 'Facebook',
		description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
		technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
	},
	{
		year: '2020 - 2021',
		role: 'Software Engineer',
		company: 'Paypal',
		description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
		technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
	},
];

export const PROJECTS = [
	{
		id: 1,
		title: 'E-Commerce Website',
		image: project1,
		description:
			'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
		technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
	},
	{
		id: 2,
		title: 'Task Management App',
		image: project2,
		description:
			'An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.',
		technologies: ['HTML', 'CSS', 'Angular', 'Firebase'],
	},
	{
		id: 3,
		title: 'Portfolio Website',
		image: project3,
		description:
			'A personal portfolio website showcasing projects, skills, and contact information.',
		technologies: ['HTML', 'CSS', 'React', 'Bootstrap'],
	},
	{
		id: 4,
		title: 'Blogging Platform',
		image: project4,
		description:
			'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
		technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
	},
];

export const CONTACT = {
	address: 'Independence Avenue, Santo Domingo, DR 11005 ',
	phoneNo: '+1 (849) 763-5403',
	email: 'gabriel.duarte18@outlook.es',
};
