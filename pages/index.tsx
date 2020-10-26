import Hero from 'sections/Hero';
import About from 'sections/About';
import Courses from 'sections/Courses';
import Newsletter from 'sections/Newsletter';
import Footer from 'sections/Footer';
import Instagram from 'sections/Instagram';

const url = 'https://www.instagram.com/pietranobre_/?__a=1';

type InstagramThumbnailNodeSrc = {
	src: string;
}

type InstagramThumbnailNode = {
	node: {
		thumbnail_resources: InstagramThumbnailNodeSrc[];
	}
}

type InstagramData = {
	graphql: {
		user: {
			full_name: string;
			username: string;
			profile_pic_url: string;
			profile_pic_url_hd: string;
			edge_owner_to_timeline_media: {
				edges: InstagramThumbnailNode[]
			}
		}
	}
}

export const getServerSideProps = async () => {
	const request = await fetch(url);

	const instagramResponse: InstagramData = await request.json();
	
	const { full_name, profile_pic_url, username  } = instagramResponse.graphql.user;

	const instagramTimelineMediaEdges = instagramResponse.graphql.user.edge_owner_to_timeline_media.edges;

	const instagramThumbs = instagramTimelineMediaEdges.slice(0,9).map(edge => {
		return edge.node.thumbnail_resources[0].src
	})

	return {
		props: {
			instagram: {
				full_name, 
				username, 
				profile_pic_url,
				thumbnails: instagramThumbs
			}
		}
	}
}

export default function Home({ instagram }) {

  return (
	  <>
		  <Hero />
		  <About />
		  <Courses />
		  <Newsletter />
		  <Instagram data={instagram} />
		  <Footer data={instagram} />
	  </>
	)
}
