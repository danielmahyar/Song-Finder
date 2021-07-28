import { searchForArtist } from "./fetch"

export const ACTIONS = {
	SET_ARTISTS: 'setArtists',
	CLEAR_ARTISTS: 'clearArtists',
	LIMIT_ARTISTS: 'limitArtists'
}

export const resultsState = (results: any, action: any) => {
	switch (action.type) {
		case ACTIONS.SET_ARTISTS: //Sets results to an array of artists
			return action.payload
		case ACTIONS.CLEAR_ARTISTS:
			return []
		case ACTIONS.LIMIT_ARTISTS:
			return [...results.filter((item, index) => index++ < action.payload)]
		default:
			return []
	}
}
   
export const asyncActionHandlers = {
	SEARCH_ARTISTS: ({ dispatch }: any) => async(action: any) => {
	  try {
			const data = await searchForArtist(action.payload)
			const hits = [...data.response.hits]
			dispatch({ type: ACTIONS.SET_ARTISTS, payload: hits })
	  	} catch (error) {
	    		console.log(error)
	  	}
	}
}
   