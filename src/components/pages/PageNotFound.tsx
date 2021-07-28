import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function PageNotFound() {
	const location = useLocation()
	return (
		<div>
			Page not found at path {location.pathname} <br />
			Press this button to redirect to homepage:
			<Link to="/">
				<button className="btn btn-primary">Click Here</button>
			</Link>
		</div>
	)
}
