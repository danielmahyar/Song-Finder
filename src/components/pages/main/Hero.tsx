import React, { useState, useContext, useRef, useEffect } from 'react'
import { ResultsContext } from '../../App'
import { heroContentIsLoading, searchIsValid } from '../../functions/input-validator'
import { ACTIONS } from '../../functions/asynchandlers'

export default function Hero() {
	const [search, setSearch] = useState("")
	const [isLoading, setLoading] = useState(false)
	const { results, dispatch }: any = useContext(ResultsContext)
	const prevResult = useRef('')
	const inputClass = `input main-input ${search !== '' && searchIsValid(search, prevResult.current) && 'input-success'} ${search !== '' && !searchIsValid(search, prevResult.current) && 'input-error'}`

	useEffect(() => {
		console.log(results)
		const status = heroContentIsLoading(search, results)
		setLoading(status)
	}, [results, search])


	const handleSearchChange = (search: string) => {
		setSearch(search)
	}

	const handleSearch = (e: any) => {
		e.preventDefault()
		if(!searchIsValid(search, prevResult.current)) return 
		prevResult.current = search
		setLoading(true)
		dispatch({ type: 'SEARCH_ARTISTS', payload: search })
	}

	const handleClear = () => {
		dispatch({ type: 'CLEAR_ARTISTS' })
	}

	const handleLimit = () => {
		dispatch({ type: ACTIONS.LIMIT_ARTISTS, payload: 5 })
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
				{results.length !== 0 && !isLoading && (
					<>
						<button 
							className="btn btn-small"
							onClick={handleClear}
						>
							Clear Results
						</button>

						<button 
							className="btn btn-small"
							onClick={handleLimit}
						>
							Limit To 5
						</button>
					</>
				)}
				{isLoading && (
					<p>I am loading</p>
				)}
			</form>
		</section>
	)
}
