import { get, put, deleteMethod } from '../../utilities/https';

export const getAllPrograms = () => {
    const url = '/program/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PROGRAM_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const addProgram = (body) => {
    const url = `/program/add`
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PROGRAM_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const deleteProgram = (programId) => {
    const url = `/program/delete/${programId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PROGRAM_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}