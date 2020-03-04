export const SAVE_STUDENT = 'SAVE_STUDENT';

export function saveStudent(value) {
    return {type: SAVE_STUDENT, payload: value}
}

export const SEARCH_STUDENT = 'SEARCH_STUDENT';

export function searchStudent(query) {
    return {type: SEARCH_STUDENT, payload: query}
}

export const DELETE_STUDENT = 'DELETE_STUDENT';

export function deleteStudent(id) {
    return {type: DELETE_STUDENT, payload: id}
}

export const DELETE_GROUP_STUDENT = 'DELETE_GROUP_STUDENT';

export function deleteGroupStudent(id) {
    return {type:DELETE_GROUP_STUDENT, payload: id}
}