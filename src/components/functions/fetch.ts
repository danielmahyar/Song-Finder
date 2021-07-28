import { SearchResult, Params } from "../models/genius-hits"
const ACCESS_TOKEN = "OTvcGu8B_h6KE9nqYysCWv8qMLHTylNW3gQcLDVYXELdqGk3UNBuy-RXXE37-WXR"
const API_URL = "https://api.genius.com"

export const searchForArtist = async(artist_name: string) => {
	try {
		const query: Params = {
			action: 'search',
			param: '&q=',
			payload: artist_name
		}
	
		const response = await fetchDataFromApi(query)
	
		return response
	} catch (error) {
		return error
	}

}

export const getArtist = async(artist_id: number) => {
	try {
		const query: Params = {
			action: `artists/${artist_id}`
		}

		const data = await fetchDataFromApi(query)
		return { ...data.response.artist }
	} catch (error) {
		console.error(error)
	}
}

export const fetchDataFromApi = async(params: Params = { action: '', param: '', payload: ''}): Promise<any> => {
	try {
		params.param = (params.param === undefined) ? '' : params.param
		params.payload = (params.payload === undefined) ? '' : params.payload
		const response = await fetch(`${API_URL}/${params.action}?access_token=${ACCESS_TOKEN}${params.param}${params.payload}`)

		return new Promise<SearchResult>((resolve, reject) => {
			resolve(response.json())
		})
	} catch (error) {
		return new Promise<Error>((resolve, reject) => {
			reject(error)
		})
	}
}
