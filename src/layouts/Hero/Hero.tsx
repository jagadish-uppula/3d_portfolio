'use client'

import { MediaLinks } from '@/components/ui/MediaLinks/MediaLinks'
import styles from './Hero.module.scss'
import { links } from './links'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
	const [scrollY, setScrollY] = useState(0) // Current scroll position
	const [isVisible, setIsVisible] = useState(true) // Visibility of the element

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			// Determine visibility based on scroll direction
			setIsVisible(currentScrollY < scrollY)
			setScrollY(currentScrollY)
		}

		// Attach the scroll listener
		window.addEventListener('scroll', handleScroll)

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollY])
	return (
		<section className={styles.hero}>
			<div className={styles.top}>
				<h1 className={styles.main_text}>Your</h1>
				<h3 className={styles.sub_text}>Name</h3>
				<p className={styles.text}>Software Engineer</p>
				<div className={styles.buttons}>
					<button className={styles.resume}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M8 5v14l11-7z' />
						</svg>
						Resume
					</button>
					<button className={styles.linkedin}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='12' cy='12' r='10' />
							<line x1='12' y1='16' x2='12' y2='12' />
							<line x1='12' y1='8' x2='12.01' y2='8' />
						</svg>
						Linkedin
					</button>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 1, y: 0 }}
				animate={{
					opacity: isVisible ? 1 : 0,
					y: isVisible ? 0 : -50,
				}}
				transition={{ duration: 0.5 }}
				className={styles.bottom}
			>
				<div className={styles.icons}>
					<MediaLinks items={links} />
				</div>
				<div className={styles.explore}>
					<span>Scroll to explore</span>
					<motion.span
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: '100%', opacity: 1 }}
						transition={{
							type: 'spring',
							repeat: Infinity,
							repeatType: 'reverse',
							repeatDelay: 0.5,
						}}
						className={styles.border}
					></motion.span>
				</div>
			</motion.div>
		</section>
	)
}
