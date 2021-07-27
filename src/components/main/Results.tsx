import React, { useContext } from 'react'
import { ResultsContext } from '../App'
import ResultCard from './ResultCard'

export default function Results() {
	const { results }: any = useContext(ResultsContext)

	return (
		<section className="main__results">
			{results.map((artistInfo: any) => {
				const screenInfo = artistInfo.result
				return <ResultCard key={screenInfo.id} {...screenInfo} />
			})}

		</section>
	)
}
