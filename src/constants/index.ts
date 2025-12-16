import nextjs from '../assets/roles/web.svg'
import electron from '../assets/roles/desktop.svg'
import reactnative from '../assets/roles/mobile.svg'
import nestjs from '../assets/roles/backend.svg'

import nodejs from '../assets/tech/nodejs.png'
import html from '../assets/tech/html.png'
import typescript from '../assets/tech/typescript.png'
import reactjs from '../assets/tech/reactjs.png'
import redux from '../assets/tech/redux.png'
import zustand from '../assets/tech/zustand.png'
import tailwind from '../assets/tech/tailwind.png'
import git from '../assets/tech/git.png'
import docker from '../assets/tech/docker.png'
import kubernetes from '../assets/tech/kubernetes.png'
import githubactions from '../assets/tech/githubactions.png'
import jest from '../assets/tech/jest.svg'

import github from '../assets/github.png'

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
		icon: nextjs,
	},
	{
		title: {
			en: 'Desktop Developer',
			ru: 'Desktop разработчик',
		},
		icon: electron,
	},
	{
		title: {
			en: 'Mobile Developer',
			ru: 'Мобильный разработчик',
		},
		icon: reactnative,
	},
	{
		title: {
			en: 'Backend Developer',
			ru: 'Backend Разработчик',
		},
		icon: nestjs,
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
				en: 'Utilizing preprocessors such as SASS to streamline stylesheet development.',
				ru: 'Использование препроцессоров, таких как SASS для оптимизации разработки таблиц стилей.',
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
			en: 'September 2021 - December 2024',
			ru: 'Сентябрь 2021 - Декабрь 2024',
		},
		points: [
			{
				en: 'Developing and maintaining web applications using React.js and other related technologies.',
				ru: 'Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий.',
			},
			{
				en: 'Participating in hackathons, collaborating with teams of designers and developers to build innovative solutions under tight deadlines.',
				ru: 'Участие в хакатонах, сотрудничество с командами дизайнеров и разработчиков для создания инновационных решений в сжатые сроки.',
			},
			{
				en: 'Implementing responsive design and ensuring cross-browser compatibility.',
				ru: 'Реализация адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
			},
			{
				en: 'Participating in hackathons, working in teams to rapidly prototype and deliver working solutions.',
				ru: 'Участие в хакатонах, работа в командах для быстрого прототипирования и создания работающих решений.',
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
			en: 'June 2022 - December 2024',
			ru: 'Июнь 2022 - Декабрь 2024',
		},
		points: [
			{
				en: 'Building scalable backend systems using Node.js and PostgreSQL.',
				ru: 'Создание масштабируемых бэкенд-систем с использованием Node.js и PostgreSQL.',
			},
			{
				en: 'Implementing message-driven microservices architecture using RabbitMQ for asynchronous communication.',
				ru: 'Реализация архитектуры микросервисов с использованием RabbitMQ для асинхронного взаимодействия.',
			},
			{
				en: 'Optimizing application performance through caching with Redis and load balancing techniques.',
				ru: 'Оптимизация производительности приложения с помощью кэширования с Redis и балансировки нагрузки.',
			},
			{
				en: 'Writing unit and integration tests using Jest to ensure code quality and reliability.',
				ru: 'Написание модульных и интеграционных тестов с использованием Jest для обеспечения качества и надежности кода.',
			},
		],
	},
	{
		title: {
			en: 'Fullstack Developer',
			ru: 'Fullstack разработчик',
		},
		company_name: '',
		icon: nextjs,
		iconBg: '#E6DEDD',
		date: {
			en: 'January 2025 - Now',
			ru: 'Январь 2025 - Сейчас',
		},
		points: [
			{
				en: 'Developing full-stack web applications from concept to deployment.',
				ru: 'Разработка полнофункциональных веб-приложений от концепции до развертывания.',
			},
			{
				en: 'Building user interfaces with modern frontend technologies like React.js and Next.js.',
				ru: 'Создание пользовательских интерфейсов с использованием современных фронтенд-технологий, таких как React.js и Next.js.',
			},
			{
				en: 'Designing and implementing robust backend services using NestJS.',
				ru: 'Проектирование и реализация надежных бэкенд-сервисов с использованием NestJS.',
			},
			{
				en: 'Actively participating in hackathons, working in teams to rapidly prototype and deliver working solutions.',
				ru: 'Активное участие в хакатонах, работа в командах для быстрого прототипирования и создания работающих решений.',
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
		name: 'Unix Shell Emulator',
		description: {
			en: 'A graphical UNIX command line emulator built with Electron. Features a virtual file system loaded from XML, supports 20+ shell commands, auto-completion, command history, environment variables, pipes and I/O redirection.',
			ru: 'Графический эмулятор командной строки UNIX на Electron. Включает виртуальную файловую систему из XML, поддержку 20+ команд оболочки, автодополнение, историю команд, переменные окружения, конвейеры и перенаправление ввода/вывода.',
		},
		tags: [
			{
				name: 'Electron',
				color: 'blue-text-gradient',
			},
			{
				name: 'TypeScript',
				color: 'green-text-gradient',
			},
			{
				name: 'Jest',
				color: 'orange-text-gradient',
			},
			{
				name: 'XML',
				color: 'pink-text-gradient',
			},
		],
		image: '/projects/unix-shell-emulator.jpg',
		source_code_link: 'https://github.com/Wo0zZ1/unix-shell-emulator',
		site_link: 'https://github.com/Wo0zZ1/unix-shell-emulator#readme',
	},
	{
		name: 'Unolingo',
		description: {
			en: 'An interactive mobile application for learning foreign languages through gamification (a clone of Duolingo). Utilizes React Native for cross-platform development, NestJS for the backend, and PostgreSQL for data storage.',
			ru: 'Интерактивное мобильное приложение для изучения иностранных языков с помощью геймификации (клон Duolingo). Использует React Native для кроссплатформенной разработки, NestJS для бэкенда и PostgreSQL для хранения данных.',
		},
		tags: [
			{
				name: 'React Native',
				color: 'blue-text-gradient',
			},
			{
				name: 'PostgreSQL',
				color: 'green-text-gradient',
			},
			{
				name: 'NestJS',
				color: 'orange-text-gradient',
			},
		],
		image: '/projects/unolingo.png',
		source_code_link: 'https://github.com/Wo0zZ1/unolingo',
		site_link:
			'https://github.com/Wo0zZ1/unolingo?tab=readme-ov-file#-%D0%B4%D0%B5%D0%BC%D0%BE',
	},
	{
		name: 'Web Calculator',
		description: {
			en: 'A web calculator with basic arithmetic operations built using HTML, CSS and JavaScript in OOP style. Features instant calculations, theme switching, adaptive design, and an interactive interface.',
			ru: 'Веб-калькулятор с основными арифметическими операциями, построенный с использованием HTML, CSS и JavaScript в стиле ООП. Особенности включают мгновенные вычисления, переключение тем, адаптивный дизайн и интерактивный интерфейс.',
		},
		tags: [
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'HTML/CSS',
				color: 'orange-text-gradient',
			},
			{
				name: 'OOP',
				color: 'green-text-gradient',
			},
		],
		image: '/projects/web-calculator.jpg',
		source_code_link: 'https://github.com/Wo0zZ1/web-calculator',
		site_link: 'https://webcalculator-tan.vercel.app/',
	},
	{
		name: 'Notes',
		description: {
			en: 'A simple yet powerful web-based task management app that helps users organize their tasks and boost productivity.',
			ru: 'Простое, но мощное веб-приложение для управления задачами, которое помогает пользователям организовать свои задачи и повысить производительность. ',
		},
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'SCSS',
				color: 'pink-text-gradient',
			},
		],
		image: '/projects/notes.jpg',
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
				name: 'Tailwind CSS',
				color: 'pink-text-gradient',
			},
		],
		image: '/projects/define-limit.png',
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

export { navLinks, services, technologies, experiences, testimonials, projects, github }

export type { INavLink, IService, IExperience, ITechnology, ITag, IProject, ITestimonial }
