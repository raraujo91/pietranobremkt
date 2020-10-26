import styled from 'styled-components';
import { motion, useAnimation, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';

const dotMotion = {
	y: [0, -50, 10, 0, 5, 0],
	color: [null, 'rgba(0,0,0,0)', '#fff', '#fff', '#fff', 'rgba(0,0,0,0)'],
	transition: { ease: 'easeInOut'}
};

const lineAnimation = {
	hidden: {
		height: '0%'
	},
	show: {
		height: '80%'
	}
}


const Container = styled(motion.div)`
		display: flex;
		align-items: center;
		height: 100vh;
		background: ${props => props.theme.colors.primary};
		padding: 0px 50px;
		color: white;

		h1 {	
			font-weight: bolder;
			font-size: 56px;
			color: ${props => props.theme.colors.transparent};
			-webkit-text-stroke: 2px #ffffff;
			cursor: default;
		}

		div {
			height: 100%;
			align-items: center;
			display: flex;

			&:nth-child(1),
			&:nth-child(3) {
				flex: 3;
			}

			&:nth-child(2) {
				display: flex;
				justify-content: center;
				align-items: center;
				flex: 1;
			}
		}

		p {
			font-weight: 300;
		}
	`;

const Line = styled(motion.span)`
	content: '';
	width: 2px;
	background: ${props => props.theme.colors.light};
	margin: 5px;	
`;

export default function Hero() {

	const { scrollYProgress } = useViewportScroll();
	const controls = useAnimation();
	const lineScrollAnimation = useTransform(scrollYProgress, [0.10, 0.30], ['80%', '0%']);

	useEffect(() => {
		controls.start({...dotMotion, transition: { delay: 1.2 }});
	}, []);

	return (
		<Container>
			<div style={{ overflow: 'hidden' }} onMouseEnter={() => controls.start(dotMotion)}>
				<div><h1>dom digital mkt</h1><motion.h1 animate={controls}>.</motion.h1></div>
			</div>
			<div><Line variants={lineAnimation} style={{ height: lineScrollAnimation }} initial="hidden" animate="show" transition={{ duration: 1 }} /></div>
			<div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellat eius! Quibusdam molestias illo corrupti sapiente dolorem tempora magnam, mollitia dolore unde possimus aperiam soluta odit excepturi ullam perferendis architecto?</p>
			</div>
		</Container>
	)
}