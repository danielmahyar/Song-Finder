import React, { useContext, useRef, useLayoutEffect } from 'react'
import { ResultsContext } from '../../App'
import ResultCard from './ResultCard'

export default function Results() {
	const { results }: any = useContext(ResultsContext)
	const divElement = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		divElement.current?.scrollIntoView({ behavior: 'smooth' })
	}, [results])

	return (
		<>
			<div ref={divElement}></div>

			<section className="main__results">

				{results.map((artistInfo: any) => {
					const screenInfo = artistInfo.result
					return <ResultCard key={screenInfo.id} {...screenInfo} />
				})}

			</section>
		</>
	)
}
