import styled from 'styled-components';

type InstagramProps = {
	data: {
		thumbnails: string[];
	}
}

const Container = styled.div`
		display: flex;
		align-items: center;
		height: 100%;
		background: ${props => props.theme.colors.secondary};
		color: white;
`

export default function Instagram({ data: instagram }: InstagramProps) {
	return (
		<Container>
			{instagram.thumbnails.map((thumb, index) => <img key={index} src={thumb} />)}
		</Container>
	)
}