// playerCards =[]
// compCards = []

//addPlayerScore, addComputerScore

const initialState = []

export const matchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'score/addMatch':
      return state.concat(action.payload)
      case 'score/clearMatched':
        return []
    default:
      return state;
  }
}

export const addMatch = (matches) => {
  return {
    type: 'score/addMatch',
    payload: matches
  }
}

export const clearMatched = () => {
  return {
    type: 'score/clearMatched',
  }
}

export const selectNumberMatched = state => state.matched.length;
export const selectMatched = state => state.matched;