export const SAVE_STUDENT = 'SAVE_STUDENT';

export function saveStudent(value) {
    return {type: SAVE_STUDENT, payload: value}
}