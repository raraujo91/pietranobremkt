import styled from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Container = styled(motion.div)`
		display: flex;
		align-items: center;
		height: 70vh;
		background: ${props => props.theme.colors.light};
		padding: 0px 50px;
		color: black;

		h1 {
			font-weight: 900;
			font-size: 54px;
		}

		div {
			height: 100%;
			display: flex;
			align-items: flex-start;
		}

		div:nth-child(1) {
			width: 250px;
			height: 250px;
			overflow: hidden;
			border-radius: 50%;

			img {
				width: 100%;
			}
		}

		div:nth-child(2) {
			flex: 2;
			flex-direction: column;
			justify-content: center;
			margin-left: 50px;
		}
	`

export default function About() {

	const { scrollYProgress } = useViewportScroll();
	const imageZoom = useTransform(scrollYProgress, [0.2, 0.3], [1, 1.2]);

	return (
		<Container>
			<div id="about">
				<motion.img style={{ scale: imageZoom }} transition={{ duration: 0.5, ease: 'easeOut' }} src="/model.jpg" />
			</div>
			<div>
				<h1>about</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos delectus expedita consequuntur consequatur, molestiae nostrum sapiente ut cupiditate corrupti fugiat, ullam deleniti earum consectetur culpa explicabo alias tempora ab. Similique.</p>
			</div>
		</Container>
	)
}