const myHeaders = new Headers();
export default {
    async fetchGET(url) {
        let init = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
        };
        let request = new Request(url, init);
        return await fetch(request, init)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Server response wasn't OK");
                }
            })
            .then(data => {
                return data;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
};