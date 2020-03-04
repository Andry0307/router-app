import {SAVE_STUDENT, SEARCH_STUDENT, DELETE_STUDENT, DELETE_GROUP_STUDENT} from '../actions/studentActions';
import students from '../../studentsData';


const initState = {
    list: students,
    search: ''
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
        case SEARCH_STUDENT:
            return {...state, search: payload};
        case DELETE_STUDENT:
            return {...state, list: state.list.filter(item => {
                    return item.id !== payload ;
                })};
        case DELETE_GROUP_STUDENT:
            return {...state, list: state.list.filter(item => {
                    return item.groupId !== payload;
                })};
        default:
            return state;
    }

}