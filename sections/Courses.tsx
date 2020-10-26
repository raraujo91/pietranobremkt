import styled from 'styled-components';
import { motion } from 'framer-motion';
import CourseCards from 'components/CourseCards'

const Container = styled(motion.div)`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		background: ${props => props.theme.colors.light};
		padding: 50px;
		color: black;

		h1 {
			font-weight: 900;
			font-size: 54px;
		}

		div {
			margin-bottom: 20px;
		}

	`;

const CardWrapper = styled.div`
	display: flex; 	
	flex-direction: column;
	align-items: center;
	width: 100%;
`

export default function Courses() {

	return (
		<Container id="courses">
			<div>
				<h1>courses</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus placeat velit quos nam qui minus sunt nulla quas, maxime, fugiat dolorum ullam fuga quo, architecto doloribus at commodi praesentium.</p>
			</div>
			<CardWrapper>
				<CourseCards name="PDF Grátis" price={0} image="/mkt1.jpg" />
				<CourseCards name="Curso 1" price={19.90} image="/mkt2.jpg" />
				<CourseCards name="Curso 2" price={39.90} image="/mkt3.jpg" />
			</CardWrapper>
		</Container>
	)
}