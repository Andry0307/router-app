export const SAVE_GROUP = 'SAVE_GROUP';
export function saveGroup(value) {
    return {type: SAVE_GROUP, payload: value}
}
export const SEARCH_GROUP = 'SEARCH_GROUP';
 export function searchGroup(query) {
    return {type: SEARCH_GROUP, payload: query}
}