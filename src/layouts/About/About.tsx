'use client'

import styles from './About.module.scss'
import { motion } from 'framer-motion'

export default function About() {
	return (
		<section className={styles.about}>
			<div className={styles.about_me}>
				<span>About me</span>
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
				/>
			</div>

			<div className={styles.texts}>
				<div className={styles.text}>
					<h3>Your Professional Title</h3>
					<p>
						Provide a brief overview of your background and passion here. 
						This is where you tell your story and describe what drives 
						your work in the tech industry.
					</p>
				</div>
				<div className={styles.text}>
					<h3>Work Experience</h3>
					<p>
						<strong>Experience 1:</strong> Enter your role and main achievements here.<br/>
						<strong>Experience 2:</strong> Mention another significant role or project.<br/>
						<strong>Experience 3:</strong> Describe your most recent professional contribution.
					</p>
				</div>
				<div className={styles.text}>
					<h3>Technical Skills</h3>
					<p>
						List your core technologies here (e.g., React, Node.js, Python, 
						Cloud Services, Databases, etc.).
					</p>
				</div>
			</div>
		</section>
	)
}
