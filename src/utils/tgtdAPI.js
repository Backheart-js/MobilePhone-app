import httpRequest from "./httpRequest";

export const tgtdCategory = {
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
    getProductsList: (category, params = {}) => {
        const url = `${category}`;
        return httpRequest.get(url, { params });
    },
    addProduct: (category, data) => {
        const url = `${category}`;
        return httpRequest.post(url, data);
    },
    updateProduct: (category, id, newData) => {
        const url = `${category}/${id}`;
        return httpRequest.put(url, newData);
    },
    removeProduct: (category, id) => {
        const url = `${category}/${id}`;
        return httpRequest.delete(url);
    },
    getDetail: (category, id) => {
        const url = `${category}/${id}`;
        return httpRequest.get(url);
    }
}

export default tgtdAPI;