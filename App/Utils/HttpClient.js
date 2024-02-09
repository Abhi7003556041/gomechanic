import Storage from '@Utils/Storage'
import { MAIN_BASE_URL } from './EnvVariables';

const BASE_URL = `http://localhost:5000`;

async function getToken() {
    return await Storage.get('token');
}

function get(endpoint, params) {
    return request(endpoint, params);
}

function post(endpoint, params) {
    return request(endpoint, params, "POST");
}

function put(endpoint, params) {
    return request(endpoint, params, "PUT");
}

function Delete(endpoint, params) {
    return request(endpoint, params, null, "DELETE");
}

async function request(endpoint, params = null, method = 'GET') {
    let token = await getToken();

    var xmlRequest = new XMLHttpRequest();
    let url = BASE_URL + endpoint;

    return new Promise((resolve, reject) => {
        xmlRequest.open(method, url, true);

        xmlRequest.setRequestHeader('Accept', '*/*');
        xmlRequest.setRequestHeader('Content-Type', 'application/json');
        xmlRequest.setRequestHeader('Authorization', token);

        if (method == 'GET') {
            xmlRequest.send();
        } else {
            xmlRequest.send(JSON.stringify(params));
        }

        xmlRequest.onreadystatechange = function () { // Call a function when the state changes.   
            // console.log("xmlRequest.response",xmlRequest.response)  
            if (xmlRequest.readyState === XMLHttpRequest.DONE) {
                if (xmlRequest.status === 200) {
                    resolve(JSON.parse(xmlRequest.response));
                } else {
                    try {
                        reject(JSON.parse(xmlRequest.response));
                    } catch (err) {
                        reject({ error: 'Server Error Please try again later !!!', actError: err });
                    }
                }
            }
        }
    })

}

async function multiupload(endpoint, method, files = [], object_get = {}) {
    let token = await getToken();

    var xmlRequest = new XMLHttpRequest();
    let url = BASE_URL + endpoint;

    var data = new FormData();

    let objArray = Object.keys(object_get);
    objArray.forEach((element) => {
        data.append(element, object_get[element]);
    });

    files.forEach(async (element) => {
        let get_originalname = await getOriginalname(element.path);
        data.append(element.key, {
            uri: element.path,
            type: felementile.mime,
            name: get_originalname,
        });
    })

    return new Promise((resolve, reject) => {
        xmlRequest.open(method, url, true);

        xmlRequest.setRequestHeader('Accept', '/');
        xmlRequest.setRequestHeader('Content-Type', 'multipart/form-data');
        xmlRequest.setRequestHeader('cache-control', 'no-cache');
        xmlRequest.setRequestHeader('Authorization', token);

        xmlRequest.send(data);

        xmlRequest.onreadystatechange = function () { // Call a function when the state changes.   
            if (xmlRequest.readyState === XMLHttpRequest.DONE) {
                if (xmlRequest.status === 200) {
                    resolve(JSON.parse(xmlRequest.response));
                } else {
                    try {
                        reject(JSON.parse(xmlRequest.response));
                    } catch (err) {
                        reject({ error: 'Server Error Please try again later !!!', actError: err });
                    }
                }
            }
        }
    })
}

async function getOriginalname(data) {
    let arr = data.split("/");
    let lent = Number(arr.length - 1);
    return arr[lent];
}

const HttpClient = {
    get,
    post,
    put,
    Delete,
    multiupload
}

export default HttpClient