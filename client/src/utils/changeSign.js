export const IMPORTANT = 'important'
export const REGULAR = 'regular'
export const UNIMPORTANT = 'unimportant'


export const changeSing = (currentSign) => {
  switch (currentSign) {
    case IMPORTANT: return REGULAR
      
    case REGULAR: return UNIMPORTANT

    case UNIMPORTANT: return IMPORTANT
    
    default: return IMPORTANT
  }
}