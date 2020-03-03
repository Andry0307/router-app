import {SAVE_GROUP, SEARCH_GROUP} from '../actions/groupActions';

const initState = {
    list: [
        {
            id: 1,
            groupId: '001',
            name: 'Java'
        },
        {
            id: 2,
            groupId: '002',
            name: 'JavaScript'
        },
        {
            id: 3,
            groupId: '003',
            name: 'React'
        }
    ],
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
                groupId: payload.groupId,
                name: payload.name,
            }]}
}

export default function (state = initState, {type, payload}) {
    switch (type) {
        case SAVE_GROUP:
            return  payload.id ? editGroup(state, payload) : addNewGroup(state, payload);
        case SEARCH_GROUP:
            return {...state, search: payload};
        default:
            return state;
    }
}

