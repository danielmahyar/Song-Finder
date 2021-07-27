import React, { useState, useContext, useEffect, useRef } from 'react'
import { ResultsContext } from '../App'
import { searchIsValid } from '../functions/input-validator'


export default function Hero() {
	const [search, setSearch] = useState("")
	const { dispatch }: any = useContext(ResultsContext)
	const prevResult = useRef('')

	const inputClass = `input main-input ${search !== '' && searchIsValid(search, prevResult.current) && 'input-success'} ${search !== '' && !searchIsValid(search, prevResult.current) && 'input-error'}`

	const handleSearchChange = (search: string) => {
		setSearch(search)
	}

	const handleSearch = (e: any) => {
		e.preventDefault()
		if(!searchIsValid(search, prevResult.current)) return 
		prevResult.current = search
		dispatch({ type: 'SEARCH_ARTISTS', payload: search })
	}

	return (
		<section className="main__hero-section">
			<form onSubmit={handleSearch} className="main__hero-section-form">
				<h1 className="main__hero-title">Find A Song</h1>
				<input 
					type="text" 
					className={inputClass}
					onChange={(e) => handleSearchChange(e.target.value)}
				/>
				<button
					className="btn btn-primary"
					type="submit"
				>
					{search !== '' ? `Search For ${search}` : 'Search'}
				</button>
			</form>
		</section>
	)
}
