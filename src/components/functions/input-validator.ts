const INVALID_CHARACTERS = /^\d+$/g
export const searchIsValid = (stringToValidate: string, prevResult: string, options = { stringLength: 50, isRequired: true }) => {
	
	//Is string required and empty
	if(options.isRequired && stringToValidate === '') return false
	
	//Previous result is same as current
	if(stringToValidate === prevResult) return false

	//Check for invalid characters
	if(INVALID_CHARACTERS.test(stringToValidate)) return false
	
	//If string is above required length
	if(stringToValidate.length > options.stringLength) return false

	//If test is passed then pass true
	return true
}

export const heroContentIsLoading = (search, results) => {
	if(search === "" && results === []) return false
	if(search !== "" && results === []) return true
	if(search !== "" && results !== []) return false
}