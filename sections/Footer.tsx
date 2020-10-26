import styled from 'styled-components';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const Container = styled(motion.div)`
		display: flex;
		align-items: center;
		height: 30vh;
		background: ${props => props.theme.colors.secondary};
		padding-left: 50px;
		color: white;

		a {
			text-decoration: none;
			color: white;
		}

		h1 {
			font-weight: 900;
			font-size: 54px;
		}

		> div {
			height: 100%;
			display: flex;
			align-items: center;
			flex: 1;
			position: relative;
			overflow: hidden;
			
			p {
				position: absolute;
				z-index: 1;
			}
			
		}

		div:nth-child(3) {

			overflow: visible !important;
			justify-content: center; 
			cursor: pointer;
			
			div:first-child {
				
				height: 100%;
				align-items: center;
				justify-content: center;
				display: flex; 
				
				div {
					width: 80px;
					height: 80px;
					overflow: hidden;
					border-radius: 50%;
					position: relative;
					z-index: 1;
				}

				svg {
					position: absolute;
					z-index: 0;
				}


				img {
					width: 100%;
				}
			
			}

			div:last-child {
				margin-left: 20px;
				margin-top: -25px;
			}
			
		}

	`;

type FooterProps = {
	data: {
		full_name: string;
		profile_pic_url: string;
		username: string;
	}
}

export default function Footer({ data: instagram }: FooterProps) {

	const telegramAnimation = useAnimation();
	const whatsappAnimation = useAnimation();

	const { scrollYProgress } = useViewportScroll();
	const imageZoom = useTransform(scrollYProgress, [0.95, 1], [1, 1.2]);

	const openInstagram = () => {
		return window.open(`https://instagram.com/${instagram.username}`);
	}

	return (
		<Container id="social">
			<motion.div 
				onHoverStart={() => telegramAnimation.start({ y: 250 })}
				onHoverEnd={() => telegramAnimation.start({ y: 0 })}
			>
				<p>telegram</p>
				<motion.div animate={telegramAnimation} initial={{ y: 0, x: 200 }} transition={{ duration: 0.6 }}><FaTelegramPlane size={128} /></motion.div>
			</motion.div>
			<motion.div
				onHoverStart={() => whatsappAnimation.start({ y: 250 })}
				onHoverEnd={() => whatsappAnimation.start({ y: 0 })}
			>
				<p>whatsapp</p>
				<motion.div animate={whatsappAnimation} initial={{ y: 0, x: 200 }} transition={{ duration: 0.6 }}><FaWhatsapp size={128} /></motion.div>
			</motion.div>
			<motion.div onClick={openInstagram}>
				<div>
					<div>
						<motion.img style={{ scale: imageZoom }} transition={{ duration: 0.5, ease: 'easeOut' }} src={instagram.profile_pic_url} />
					</div>
					<svg height="100" width="100">
						<defs>
							<linearGradient id="gradient">
								<stop offset="0%" stopColor="#f88334" />
								<stop offset="50%" stopColor="#EA118D" />
								<stop offset="100%" stopColor="#be1fa9" />
							</linearGradient>
						</defs>
						<circle cx="50" cy="50" r="43" stroke="url(#gradient)" strokeWidth="2" fill="none" />
					</svg> 
				</div>
				<div>
					<h2>@{instagram.username}</h2>
					<p>{instagram.full_name}</p>
				</div>
			</motion.div>
		</Container>
	)
}

