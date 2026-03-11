import { motion } from 'framer-motion'
import styles from './Project.module.scss'

interface Props {
	title: string
	description: string
	img: string
}

export function Project({ title, description, img }: Props) {
	return (
		<motion.div className={styles.project}>
			<div className={styles.image_container}>
				<img src={img} alt={title} className={styles.project_img} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</motion.div>
	)
}
