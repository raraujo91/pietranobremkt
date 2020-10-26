import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from 'styles/theme';

const StyledHeader = styled(motion.div)`
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 5px 50px;
		z-index: 5;
	`;

const Logo = styled.div`
		h1 {
			font-weight: bolder;
			font-size: 42px;
			color: ${props => props.theme.colors.light};
			cursor: default;
		}
	`;

const Options = styled.ul`
		list-style-type: none;
	`;

const Option = styled.li`
		padding: 0px 15px;
		display: inline;
		font-weight: 700;
		transition: font-weight .2s linear;

		a {
			text-decoration: none;
			color: #ffffff;
		}
	`;

const variants = {
	scrolled: {
		backgroundColor: theme.colors.darkSecondary,
		opacity: 1
	},
	defaultPosition: {
		backgroundColor: theme.colors.transparent,
		opacity: 1
	},
	hidden: {
		opacity: 0
	}
}

export default function Header() {

	const [isTop, setIsTop] = useState(true);
	const [isHidden, setIsHidden] = useState(false);
	const [lastYPosition, setLastYPosition] = useState(0);

	useEffect(() => {

		function handleScroll() {
			window.scrollY < 20 ? setIsTop(true) : setIsTop(false);

			setLastYPosition(window.scrollY);

			if (lastYPosition < window.scrollY) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
			}
			
		}


		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [lastYPosition]);

	return (
		<StyledHeader
			animate={isTop ? "defaultPosition" : isHidden ? "hidden" : "scrolled"}
			variants={variants}
			transition={{ duration: 0.2 }}
		>
			<Logo>
				<h1>ddmkt.</h1>
			</Logo>
			<Options>
				<Option><a href="#about">about</a></Option>
				<Option><a href="#courses">courses</a></Option>
				<Option><a href="#social">social</a></Option>
			</Options>
		</StyledHeader>
	)
} 