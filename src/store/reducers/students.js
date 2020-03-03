import {SAVE_STUDENT} from '../actions/studentActions';

const initState = {
    list: [
        {
            id: 1,
            groupId: '001',
            name: 'Petya'
        },
        {
            id: 2,
            groupId: '002',
            name: 'Andry'
        },
        {
            id: 3,
            groupId: '003',
            name: 'Koala'
        },
        {
            id: 4,
            groupId: '001',
            name: 'tupack'
        }
    ]
};

function addNewStudent(state, payload) {
    return {
        ...state, list: [...state.list,
            {id: Date.now(), groupId: payload.groupId, name: payload.name}]
    }
}

function editStudent(state, payload) {
    return {
        ...state, list: state.list.map(item => {
            return item.id === payload.id ? payload : item;
        })
    }
}

export default function (state = initState, {type, payload}) {
    console.log('ACTION', type, 'state', state);
    switch (type) {
        case SAVE_STUDENT:
            return payload.id ? editStudent(state, payload) : addNewStudent(state, payload);
        default:
            return state;
    }

}