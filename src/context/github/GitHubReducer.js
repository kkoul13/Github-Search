const githubReducer = (state,action)=>{

    switch(action.type){
        case 'GET-USERS':
            return{
                ...state,
                users:action.payload,
                loading:false,
            }

            case 'GET-USER':
            return{
                ...state,
                user:action.payload,
                loading:false,
            }

            case 'GET-REPOS':
            return{
                ...state,
                repos:action.payload,
                loading:false,
            }

            case 'SET-LOADING':
                return{
                    ...state,
                    loading:true
                }

                case 'CLEAR-USERS':
                    return{
                        ...state,
                        users:[]
                    }

            default:
                return state
    }

}

export default githubReducer