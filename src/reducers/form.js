const formReducer = (state=null, action) =>
{
    switch(action.type)
    {
        case 'FORMACTION':
            return action.payload;
        default:
            return state;
    }
}
export default formReducer;