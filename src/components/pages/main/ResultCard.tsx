import React from 'react'
import { Link } from 'react-router-dom'
import { 
	useSpring, 
	animated
} from 'react-spring'
import { SearchResult } from '../../models/genius-hits'

export default function ResultCard(props: SearchResult) {
	const { 
		title, 
		header_image_thumbnail_url,
		song_art_primary_color,
		primary_artist,
	} = props
	const animation = useSpring({ 
		from: { 
			opacity: 0,
			translateX: -1000
		},
		to: {
			opacity: 1,
			translateX: 0
		},
		delay: 200

	})

	const styles = {
		backgroundColor: song_art_primary_color,
		color: song_art_primary_color,
		textShadow: `0 4px 1px black`,
		backgroundImage: `url(${primary_artist.header_image_url})`
	}

	return (
		<animated.div style={animation}>
			<Link to={`/artist/${primary_artist.id}`}>
				<div 
					className="card result__card" 
					style={styles}
				>
					<div className="result__card-left-section">
						<h3 className="result__card-title">{title}</h3>
						<span className="result__card-artist_name">{primary_artist.name}</span>
					</div>
					<div className="result__card-right-section">
						<img src={header_image_thumbnail_url} alt="" />
					</div>
				</div>
			</Link>
		</animated.div>
	)
}
