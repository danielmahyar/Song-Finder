import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getArtist } from '../functions/fetch';
import { Link } from 'react-router-dom'

const intialArtistData = {
	name: '',
	header_image_url: '',
}

export default function ArtistPage() {
	const { id } = useParams() 
	const [artist, setArtist] = useState(intialArtistData)

	useEffect(() => {
		getArtist(id).then(artist =>{
			setArtist(artist)
			console.table(artist)
		})
	}, [id])

	return (
		<main className="main-section">
			<Link to="/"><button className="btn btn-small">← Go Back</button></Link>
			<h1>{artist.name}</h1>
		</main>
	)
}
