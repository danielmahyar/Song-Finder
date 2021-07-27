import React from 'react'

export default function ResultCard(props: any) {
	const { 
		title, 
		header_image_thumbnail_url,
		song_art_primary_color,
		url,
		primary_artist
	} = props

	const handleRedirect = () => {
		window.location.href = url; 
	}


	const styles = {
		backgroundColor: song_art_primary_color
	}

	return (
		<div 
			className="card result__card" 
			style={styles}
			onClick={handleRedirect}
		>
			<div className="result__card-left-section">
				<h3 className="result__card-title">{title}</h3>
				<span className="result__card-artist_name">{primary_artist.name}</span>
			</div>
			<img src={header_image_thumbnail_url} alt="" />
		</div>
	)
}
