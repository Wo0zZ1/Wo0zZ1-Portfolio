import { FC, memo, useCallback, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { EarthCanvas } from './canvas'
import { slideIn } from '../utils'
import { SectionWrapper } from '../hocs'
import { useLang } from '../hooks'

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
						to_name: import.meta.env.VITE_EMAILJS_NAME,
						from_email: form.email,
						to_email: import.meta.env.VITE_EMAILJS_EMAIL,
						message: form.message,
					},
					import.meta.env.VITE_EMAILJS_PUBLIC_API,
				)
				.then(() => {
					setLoading(false)
					alert('Thank you! I will get back to you as soon as possible')
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
				<p className={styles.sectionSubText}>{translations[lang].contact.get_in_touch}</p>
				<h3 className={`${styles.sectionHeadText} text-text-heading`}>
					{translations[lang].contact.contact}
				</h3>{' '}
				<form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col gap-5'>
					<label className='flex flex-col'>
						<span className='font-medium mb-4 text-text-primary'>
							{translations[lang].contact.your_name}
						</span>
						<input
							type='text'
							{...register('name', {
								required: translations[lang].contact.errors.required_field,
							})}
							placeholder={translations[lang].contact.q_your_name}
							className='py-4 px-6 placeholder:text-secondary rounded-lg outline-none font-medium text-text-primary bg-bg-input'
						/>
						<p className='h-5 mt-1 text-sm text-text-error'>{errors.name?.message}</p>
					</label>
					<label className='flex flex-col'>
						<span className='font-medium mb-4 text-text-primary'>
							{translations[lang].contact.your_email}
						</span>
						<input
							type='email'
							{...register('email', {
								required: translations[lang].contact.errors.required_field,
							})}
							placeholder={translations[lang].contact.q_your_message}
							className='py-4 px-6 placeholder:text-secondary rounded-lg outline-none font-medium text-text-primary bg-bg-input'
						/>
						<span className='h-5 mt-1 text-sm text-text-error'>
							{errors.email?.message}
						</span>
					</label>{' '}
					<label className='flex flex-col'>
						<span className='font-medium mb-4 text-text-primary'>
							{translations[lang].contact.your_message}
						</span>
						<textarea
							rows={3}
							{...register('message', {
								required: translations[lang].contact.errors.required_field,
							})}
							placeholder={translations[lang].contact.q_your_message}
							className='py-4 px-6 placeholder:text-secondary rounded-lg outline-none font-medium'
							style={{ color: 'var(--text-primary)', backgroundColor: 'var(--bg-input)' }}
						/>
						<span className='h-5 mt-1 text-sm text-text-error'>
							{errors.message?.message}
						</span>
					</label>
					<button
						type='submit'
						disabled={loading}
						className='py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary transition-all duration-200 hover:scale-105 bg-[var(--btn-send)] hover:bg-[var(--btn-send-hover)]'
						style={{
							color: 'var(--btn-send-text)',
						}}>
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
