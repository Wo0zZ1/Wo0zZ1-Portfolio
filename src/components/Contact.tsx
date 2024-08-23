import { FC, memo, useCallback, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hocs'

import useLang from '../hooks/useLang'

import { styles } from '../styles'

type FormValues = {
	name: string
	email: string
	message: string
}

const Contact: FC = memo(() => {
	const { lang, translations } = useLang()

	const [loading, setLoading] = useState<boolean>(false)

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = useCallback(
		form => {
			setLoading(true)
			emailjs
				.send(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					{
						from_name: form.name,
						to_name: import.meta.env.VITE_EMAILJS_YOUR_NAME,
						from_email: form.email,
						to_email: import.meta.env.VITE_EMAILJS_YOUR_EMAIL,
						message: form.message,
					},
					import.meta.env.VITE_EMAILJS_PUBLIC_API,
				)
				.then(() => {
					setLoading(false)
					alert(
						'Thank you! I will get back to you as soon as possible',
					)
					reset()
				})
				.catch(error => {
					setLoading(false)
					alert('Something went wrong')
					console.log(error)
				})
		},
		[setLoading, reset],
	)

	return (
		<div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
				<p className={styles.sectionSubText}>
					{translations[lang].contact.get_in_touch}
				</p>
				<h3 className={styles.sectionHeadText}>
					{translations[lang].contact.contact}
				</h3>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mt-8 flex flex-col gap-5'>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							{translations[lang].contact.your_name}
						</span>
						<input
							type='text'
							{...register('name', {
								required:
									translations[lang].contact.errors
										.required_field,
							})}
							placeholder={
								translations[lang].contact.q_your_name
							}
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
						/>
						<p className='h-5 mt-1 text-sm text-red-700'>
							{errors.name?.message}
						</p>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							{translations[lang].contact.your_email}
						</span>
						<input
							type='email'
							{...register('email', {
								required:
									translations[lang].contact.errors
										.required_field,
							})}
							placeholder={
								translations[lang].contact.q_your_email
							}
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
						/>
						<span className='h-5 mt-1 text-sm text-red-700'>
							{errors.email?.message}
						</span>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							{translations[lang].contact.your_message}
						</span>
						<textarea
							rows={3}
							{...register('message', {
								required:
									translations[lang].contact.errors
										.required_field,
							})}
							placeholder={
								translations[lang].contact.q_your_message
							}
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
						/>
						<span className='h-5 mt-1 text-sm text-red-700'>
							{errors.message?.message}
						</span>
					</label>

					<button
						type='submit'
						disabled={loading}
						className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition hover:bg-tertiary/40 hover:scale-105'>
						{loading
							? translations[lang].contact.sending
							: translations[lang].contact.send}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
				<EarthCanvas />
			</motion.div>
		</div>
	)
})

export default SectionWrapper(Contact, 'contact')
