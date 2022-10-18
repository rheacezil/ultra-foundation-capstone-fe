import { get, put, deleteMethod } from '../../utilities/https';

export const getAllDonations = () => {
    const url = '/donation/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_DONATION_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const getDonation = (donationId) => {
    const url = `/donation/getById/${donationId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_ACTIVE_DONATION',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addDonation = (body) => {
    const url = '/donation/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_DONATION_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const deleteDonation = (donationId) => {
    const url = `/donation/delete/${donationId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_DONATION_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}