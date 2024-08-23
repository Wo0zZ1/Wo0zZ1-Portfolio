import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from '../assets'

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
		id: 'work',
		title: {
			en: 'Work',
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
			en: 'React Native Developer',
			ru: 'React Native Разработчик',
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
	{
		title: {
			en: 'Content Creator',
			ru: 'Контент-мейкер',
		},
		icon: creator,
	},
]

// Experience section

interface IExperience {
	title: itemForLang<string>
	company_name: string
	icon: string
	iconBg: string
	date: string
	points: itemForLang<string>[]
}

const experiences: IExperience[] = [
	{
		title: {
			en: 'React.js Developer',
			ru: 'React.js Разработчик',
		},
		company_name: 'Starbucks',
		icon: starbucks,
		iconBg: '#383E56',
		date: 'Март 2020 - Апрель 2021',
		points: [
			{
				en: 'Developing and maintaining web applications using React.js and other related technologies.',
				ru: 'Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий.',
			},
			{
				en: 'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
				ru: 'Сотрудничество с межфункциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.',
			},
			{
				en: 'Implementing responsive design and ensuring cross-browser compatibility.',
				ru: 'Реализация адаптивного дизайна и обеспечение совместимости с различными браузерами.',
			},
			{
				en: 'Participating in code reviews and providing constructive feedback to other developers.',
				ru: 'Участие в ревью кода и предоставление конструктивной обратной связи другим разработчикам.',
			},
		],
	},
	{
		title: {
			en: 'React Native Developer',
			ru: 'React Native Разработчик',
		},
		company_name: 'Tesla',
		icon: tesla,
		iconBg: '#E6DEDD',
		date: 'Январь 2021 - Февраль 2022',
		points: [
			{
				en: 'Developing and maintaining web applications using React.js and other related technologies.',
				ru: 'Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий.',
			},
			{
				en: 'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
				ru: 'Сотрудничество с межфункциональными командами, включая дизайнеров, менеджеров по продукту и других разработчиков, для создания высококачественных продуктов.',
			},
			{
				en: 'Implementing responsive design and ensuring cross-browser compatibility.',
				ru: 'Реализация адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
			},
			{
				en: 'Participating in code reviews and providing constructive feedback to other developers.',
				ru: 'Участие в код-ревью и предоставление конструктивной обратной связи другим разработчикам.',
			},
		],
	},
	{
		title: {
			en: 'Web Developer',
			ru: 'Веб-разработчик',
		},
		company_name: 'Shopify',
		icon: shopify,
		iconBg: '#383E56',
		date: 'Январь 2022 - Январь 2023',
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
				ru: 'Реализация адаптивного дизайна и обеспечение совместимости с различными браузерами.',
			},
			{
				en: 'Participating in code reviews and providing constructive feedback to other developers.',
				ru: 'Участие в код-ревью и предоставление конструктивной обратной связи другим разработчикам.',
			},
		],
	},
	{
		title: {
			en: 'Full stack Developer',
			ru: 'Full stack разработчик',
		},
		company_name: 'Meta',
		icon: meta,
		iconBg: '#E6DEDD',
		date: 'Январь 2023 - Сейчас',
		points: [
			{
				en: 'Developing and maintaining web applications using React.js and other related technologies.',
				ru: 'Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий.',
			},
			{
				en: 'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
				ru: 'Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков для создания высококачественных продуктов.',
			},
			{
				en: 'Implementing responsive design and ensuring cross-browser compatibility.',
				ru: 'Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
			},
			{
				en: 'Participating in code reviews and providing constructive feedback to other developers.',
				ru: 'Участие в ревью кода и предоставление конструктивной обратной связи другим разработчикам.',
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
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
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
}

const projects: IProject[] = [
	{
		name: 'Car Rent',
		description: {
			en: 'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
			ru: 'Веб-платформа, которая позволяет пользователям искать, бронировать и управлять арендами автомобилей от различных поставщиков, предлагая удобное и эффективное решение для транспортных потребностей.',
		},
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: carrent,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Job IT',
		description: {
			en: 'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
			ru: 'Веб-приложение, которое позволяет пользователям искать вакансии, просматривать предполагаемые диапазоны зарплат для должностей и находить доступные работы в зависимости от их текущего местоположения.',
		},
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: jobit,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Trip Guide',
		description: {
			en: 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
			ru: 'Всеобъемлющая платформа для бронирования путешествий, которая позволяет пользователям бронировать рейсы, отели и аренду автомобилей, а также предлагает тщательно подобранные рекомендации по популярным направлениям.',
		},
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'supabase',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: tripguide,
		source_code_link: 'https://github.com/',
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

export {
	navLinks,
	services,
	technologies,
	experiences,
	testimonials,
	projects,
}

export type {
	INavLink,
	IService,
	IExperience,
	ITechnology,
	ITag,
	IProject,
	ITestimonial,
}
