import mobile from '../assets/mobile.png'
import backend from '../assets/backend.png'

import web from '../assets/web.png'
import fullstack from '../assets/company/fullstack.png'

import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import git from '../assets/tech/git.png'
import javascript from '../assets/tech/javascript.png'
import typescript from '../assets/tech/typescript.png'
import reactjs from '../assets/tech/reactjs.png'
import nextjs from '../assets/tech/nextjs.svg'
import redux from '../assets/tech/redux.png'
import tailwind from '../assets/tech/tailwind.png'
import nodejs from '../assets/tech/nodejs.png'
import docker from '../assets/tech/docker.png'
import kubernetes from '../assets/tech/kubernetes.png'
import githubactions from '../assets/tech/githubactions.png'
import jest from '../assets/tech/jest.svg'
import zustand from '../assets/tech/zustand.png'
import nestjs from '../assets/tech/nestjs.svg'

import notes from '../assets/projects/notes.jpg'
import define_limit from '../assets/projects/define-limit.png'

import { itemForLang } from '../types'

// Links section

interface INavLink {
	id: string
	title: itemForLang<string>
}

const navLinks: INavLink[] = [
	{
		id: 'about',
		title: {
			en: 'About',
			ru: 'Обо мне',
		},
	},
	{
		id: 'works',
		title: {
			en: 'Works',
			ru: 'Проекты',
		},
	},
	{
		id: 'contact',
		title: {
			en: 'Contact',
			ru: 'Связаться',
		},
	},
]

// Services section

interface IService {
	title: itemForLang<string>
	icon: string
}

const services: IService[] = [
	{
		title: {
			en: 'Web Developer',
			ru: 'Web разработчик',
		},
		icon: web,
	},
	{
		title: {
			en: 'React Developer',
			ru: 'React Разработчик',
		},
		icon: mobile,
	},
	{
		title: {
			en: 'Backend Developer',
			ru: 'Backend Разработчик',
		},
		icon: backend,
	},
]

// Experience section

interface IExperience {
	title: itemForLang<string>
	company_name: string
	icon: string
	iconBg: string
	date: itemForLang<string>
	points: itemForLang<string>[]
}

const experiences: IExperience[] = [
	{
		title: {
			en: 'HTML/CSS Developer',
			ru: 'HTML/CSS Верстальщик',
		},
		company_name: '',
		icon: html,
		iconBg: '#E6DEDD',
		date: {
			en: 'June 2021 - August 2021',
			ru: 'Июнь 2021 - Август 2021',
		},
		points: [
			{
				en: 'Creating responsive and accessible web pages using HTML5, CSS3, and JavaScript.',
				ru: 'Создание отзывчивых и доступных веб-страниц с использованием HTML5, CSS3 и JavaScript.',
			},
			{
				en: 'Utilizing preprocessors such as SASS or LESS to streamline stylesheet development.',
				ru: 'Использование препроцессоров, таких как SASS или LESS, для оптимизации разработки таблиц стилей.',
			},
		],
	},
	{
		title: {
			en: 'Node.js Developer',
			ru: 'Node.js Разработчик',
		},
		company_name: '',
		icon: nodejs,
		iconBg: '#E6DEDD',
		date: {
			en: 'September 2021 - December 2021',
			ru: 'Сентябрь 2021 - Декабрь 2021',
		},
		points: [
			{
				en: 'Designing and implementing RESTful APIs using Express.js.',
				ru: 'Проектирование и реализация RESTful API с использованием Express.js.',
			},
			{
				en: 'Building scalable backend systems using Node.js and MongoDB.',
				ru: 'Создание масштабируемых бэкенд-систем с использованием Node.js и MongoDB.',
			},
			{
				en: 'Optimizing application performance through caching and load balancing techniques.',
				ru: 'Оптимизация производительности приложения с помощью кэширования и балансировки нагрузки.',
			},
		],
	},
	{
		title: {
			en: 'React.js Developer',
			ru: 'React.js Разработчик',
		},
		company_name: '',
		icon: reactjs,
		iconBg: '#E6DEDD',
		date: {
			en: 'Июль 2021 - Июль 2023',
			ru: 'July 2021 - July 2023',
		},
		points: [
			{
				en: 'Developing and maintaining web applications using React.js and other related technologies.',
				ru: 'Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий.',
			},
			{
				en: 'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
				ru: 'Сотрудничество с межфункциональными командами, включая дизайнеров, продуктовых менеджеров и других разработчиков для создания высококачественных продуктов.',
			},
			{
				en: 'Implementing responsive design and ensuring cross-browser compatibility.',
				ru: 'Реализация адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
			},
		],
	},
	{
		title: {
			en: 'Fullstack Developer',
			ru: 'Fullstack разработчик',
		},
		company_name: '',
		icon: fullstack,
		iconBg: '#E6DEDD',
		date: {
			en: 'October 2024 - Now',
			ru: 'Октябрь 2024 - Сейчас',
		},
		points: [
			{
				en: 'Developing full-stack web applications from concept to deployment.',
				ru: 'Разработка полнофункциональных веб-приложений от концепции до развертывания.',
			},
			{
				en: 'Building user interfaces with modern frontend technologies like React.js.',
				ru: 'Создание пользовательских интерфейсов с использованием современных фронтенд-технологий, таких как React.js.',
			},
			{
				en: 'Designing and implementing robust backend services using Node.js.',
				ru: 'Проектирование и реализация надежных бэкенд-сервисов с использованием Node.js.',
			},
		],
	},
]

// Tech section

interface ITechnology {
	name: string
	icon: string
}

const technologies: ITechnology[] = [
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Next JS',
		icon: nextjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Zustand',
		icon: zustand,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Git',
		icon: git,
	},
	{
		name: 'Docker',
		icon: docker,
	},
	{
		name: 'Kubernetes',
		icon: kubernetes,
	},
	{
		name: 'GitHub Actions',
		icon: githubactions,
	},
	{
		name: 'Nest JS',
		icon: nestjs,
	},
	{
		name: 'Jest',
		icon: jest,
	},
]

// Works section

interface ITag {
	name: string
	color: string
}

interface IProject {
	name: string
	description: itemForLang<string>
	tags: ITag[]
	image: string
	source_code_link: string
	site_link: string
}

const projects: IProject[] = [
	{
		name: 'Notes',
		description: {
			en: 'A simple yet powerful web-based task management app that helps users organize their tasks and boost productivity.',
			ru: 'Простое, но мощное веб-приложение для управления задачами, которое помогает пользователям организовать свои задачи и повысить производительность.',
		},
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: notes,
		source_code_link: 'https://github.com/Wo0zZ1/notes',
		site_link: 'https://notes-wo0zz1.vercel.app/',
	},
	{
		name: 'Define Limit',
		description: {
			en: 'An educational web application designed to help students understand and practice writing definitions for limits in mathematics.',
			ru: 'Образовательное веб-приложение, предназначенное для помощи студентам в изучении и практике написания определений для пределов в математике.',
		},
		tags: [
			{
				name: 'TypeScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'LaTeX',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: define_limit,
		source_code_link: 'https://github.com/Wo0zZ1/define-limit',
		site_link: 'https://define-limit.vercel.app/',
	},
]

// Feedbacks section

interface ITestimonial {
	testimonial: itemForLang<string>
	name: string
	designation: string
	company: string
	image: string
}

const testimonials: ITestimonial[] = [
	{
		testimonial: {
			en: 'I thought it was impossible to make a website as beautiful as our product, but Max proved me wrong.',
			ru: 'Я думала, что невозможно создать веб-сайт, такой же красивый, как наш продукт, но Макс доказал мне обратное.',
		},
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial: {
			en: "I've never met a web developer who truly cares about their clients' success like Max does.",
			ru: 'Я никогда не встречал веб-разработчика, который бы так заботился об успехе своих клиентов, как Макс.',
		},
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial: {
			en: "After Max optimized our website, our traffic increased by 50%. We can't thank them enough!",
			ru: 'После того как Макс оптимизировал наш сайт, наш трафик увеличился на 50%. Мы не можем его достаточно поблагодарить!',
		},
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
]

export { navLinks, services, technologies, experiences, testimonials, projects }

export type { INavLink, IService, IExperience, ITechnology, ITag, IProject, ITestimonial }
