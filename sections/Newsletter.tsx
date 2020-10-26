import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
		display: flex;
		align-items: center;
		height: 20vh;
		background: ${props => props.theme.colors.primary};
		padding-left: 50px;
		color: white;

		h1 {
			font-weight: 900;
			font-size: 36px;
		}

		div:nth-child(2) {
			margin-left: 30px;
			width: 25%;
		}
	`;

const Input = styled.input`
	width: 40%;
	border: none;
	background: ${props => props.theme.colors.light};
	font-size: 20px;
	padding: 10px;
	transition: all 250ms;

	&:focus {
		background: ${props => props.theme.colors.light};
	}
`;

const Button = styled.button`
	padding: 10px 20px;
	font-size: 20px;
	color: ${props => props.theme.colors.light};
	background: ${props => props.theme.colors.darkSecondary};
	border: none;
	cursor: pointer;
	transition: transform 250ms;

	&:active {
		transform: scale(0.8);
	}
`;

export default function Newsletter() {

	return (
		<Container>
			<div>
				<h1>newsletter</h1>
			</div>
			<div><p>assine a nossa newsletter e receba as novidades por e-mail</p></div>
			<div>
				<Input type="text" placeholder="Nome" />
				<Input type="email" placeholder="E-mail" />
				<Button>Assinar</Button>
			</div>
		</Container>
	)
}