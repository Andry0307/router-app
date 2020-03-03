import {GET_GROUP_TO_STUDENT} from '../actions/studentActions';

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

export default function (state = initState, action) {
    console.log('ACTION', action, 'state', state);
    switch (action.type) {
        case GET_GROUP_TO_STUDENT:
            return state;
        default:
            return state;
    }

}