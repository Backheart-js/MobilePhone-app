import httpRequest from "./httpRequest";

export const categpry = {
    dtdd: 'dtdd',
    laptop: 'laptop',
    tablet: 'tablet',
    watch: 'watch',
    smartwatch: 'smartwatch',
    usedphone: 'usedphone',
    pc: 'pc',
    camera: 'camera',
}

const tgtdAPI = {
    getProductsList: (category, params) => {
        const url = `${category}`;
        return httpRequest.get(url, params);
    },
    addProduct: (category, params) => {
        const url = `${category}`;
        return httpRequest.post(url, params);
    }
}