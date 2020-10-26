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
	// const request = await fetch(url);

	// const instagramResponse: InstagramData = await request.json();
	
	// const { full_name, profile_pic_url, username  } = instagramResponse.graphql.user;

	// const instagramTimelineMediaEdges = instagramResponse.graphql.user.edge_owner_to_timeline_media.edges;

	// const instagramThumbs = instagramTimelineMediaEdges.slice(0,9).map(edge => {
	// 	return edge.node.thumbnail_resources[0].src
	// })

	const full_name = "Posicionamento Digital";
	const username = "pietranobre_";
	const profile_pic_url = "https://instagram.fgru5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101985646_2585759718405843_284970988804631656_n.jpg?_nc_ht=instagram.fgru5-1.fna.fbcdn.net&_nc_ohc=gPVyxUbdR0cAX-FFJGg&oh=febaf285ce75fae9af1c4d98b0834bc6&oe=5FBF1641";
	const instagramThumbs = [];

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
		  {/* <Instagram data={instagram} /> */}
		  <Footer data={instagram} />
	  </>
	)
}
