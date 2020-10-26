import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { useCallback } from 'react';

interface CourseCardsProps {
	name: string;
	price: number;
	image: string;
}

const Card = styled(motion.div)`
	display: flex;
	flex-direction: row;
	margin: 10px;
	color: ${props => props.theme.colors.darkSecondary};
	height: 12em;
	width: 35em;
	background: ${props => props.theme.colors.light};
	cursor: pointer; 
	border: 2px dashed ${props => props.theme.colors.primary};
	/* box-shadow: 0px 0px 30px rgba(0,0,0,0.09); */

	div:nth-child(1) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		padding: 30px 10px;

		p {
			font-size: 14px;
		}
	}

`

const Highlight = styled(motion.span)`
	content: ' ';
	display: block;
	background-color: ${props => props.theme.colors.darkSecondary};
	height: 1px;
	margin-top: -15px;
`

const ImageWrapper = styled(motion.div)`
	height: 100%;
	width: 300px;
	overflow: hidden;
`

const TextWrapper = styled.div`
	overflow: hidden;
`

const CourseImage = styled(motion.img)`
	height: 100%;
`

const Price = styled(motion.h2)`
	display: table;
	background-color: #00cc44;
	padding: 5px 15px;
	border-radius: 9999px;
	color: ${props => props.theme.colors.light};
`;

const spanAnimation = {
	starting: {
		width: '0%'
	},
	animation: {
		width: '100%',
		transition: {
			duration: 0.6
		}
	}
}
const imgAnimation = {
	starting: {
		scale: 1,
		originX: 0.5,
	},
	animation: {
		scale: 1.15,
		transition: {
			duration: 0.6
		}
	}
}

const cardAnimation = { 
	starting: {
		scale: 1,
		boxShadow: '0px 0px 30px rgba(0,0,0,0)'
	},
	animation: {
		scale: 1.15,
		transition: {
			duration: 0.6,
			type: "tween",
			ease: "easeInOut"
		}
	}
}

export default function CourseCards({ name, price, image }: CourseCardsProps) {

	const formattedPrice = useCallback((price: number) => {

		if (price <= 0) {
			return "GRÁTIS"
		}

		return price.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })
	}, [])

	return (
		<Card
			variants={cardAnimation}
			initial="starting"
			whileHover="animation"
			animate="starting"
		> 
			<TextWrapper>
				<h2>{name}</h2>
				<Highlight variants={spanAnimation} />
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
				<Price>{formattedPrice(price)}</Price>
			</TextWrapper>
			<ImageWrapper>
				<CourseImage variants={imgAnimation} src={image} />
			</ImageWrapper>

		</Card>

	);
}