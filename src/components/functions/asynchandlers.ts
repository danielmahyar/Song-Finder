import { searchForArtist } from "./fetch"

export const ACTIONS = {
	SET_ARTISTS: 'setArtists'
}

export const resultsState = (results: any, action: any) => {
	switch (action.type) {
		case ACTIONS.SET_ARTISTS:
			console.log(action.payload)
			return action.payload
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
   