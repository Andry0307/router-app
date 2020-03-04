import {SAVE_GROUP, SEARCH_GROUP, DELETE_GROUP} from '../actions/groupActions';
import groups from '../../groupsData';

const initState = {
    list: groups,
    search: ''
};

function editGroup(state, payload) {
    return {...state, list:  state.list.map(item => {
            return  item.id === payload.id ? payload : item
        })};
}

function addNewGroup(state, payload) {
        return {...state, list: [...state.list, {
                id: Date.now(),
                groupId: Date.now().toString(),
                name: payload.name,
            }]}
}

export default function (state = initState, {type, payload}) {
    switch (type) {
        case SAVE_GROUP:
            return  payload.id ? editGroup(state, payload) : addNewGroup(state, payload);
        case SEARCH_GROUP:
            return {...state, search: payload};
        case DELETE_GROUP:
            return {...state, list: state.list.filter(item=>{
                return item.id !== payload
            })};
        default:
            return state;
    }
}

