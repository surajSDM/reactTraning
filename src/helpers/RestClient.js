
class RestClient {
    /**
     * @description API Call method for calling GET type request.
     * @param path String API Path 
     * @param authToken Token for API Call
     */
    static getCall = (path, authToken = null) => {
        return new Promise((resolve, reject) => {
            try {
                fetch(`${process.env.API_URL}${path}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authToken
                    }
                })
                    .then(resp => resp.json())
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            } catch (e) {
                reject({ message: "unable to call api" })
            }
        });
    }

     /**
     * @description API Call method for calling POST,GET, POST, PUT, DELETE, etc.
     * @param path String API Path 
     * @param param object param object for call 
     * @param method String method of API POST,GET, POST, PUT, DELETE, etc.
     * @param authToken Token for API Call
     */
    static restCall = (path, params = {},method="POST", authToken = null) => {
        return new Promise((resolve, reject) => {
            console.log("calling rest",path,`${path}`,JSON.stringify(params) );
            
            try {
                fetch(`http://localhost:3003/${path}`, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authToken
                    },
                    body: JSON.stringify(params)
                })
                    .then(resp => resp.json())
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            } catch (e) {
                reject({ message: "unable to call api" })
            }
        });
    }
};

export default RestClient;