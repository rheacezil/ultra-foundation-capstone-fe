import { get, put, deleteMethod } from '../../utilities/https';

export const getAllFundraisers = () => {
    const url = '/fundraiser/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_FUNDRAISER_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const addFundraiser = (body) => {
    const url = `/fundraiser/add`
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_FUNDRAISER_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const deleteFundraiser = (fundraiserId) => {
    const url = `/fundraiser/delete/${fundraiserId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_FUNDRAISER_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}