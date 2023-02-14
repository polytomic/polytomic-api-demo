import axios from "axios"

// vars
const DEV_MODE = process.env.NODE_ENV !== 'production'

const API_URL = '/api'
const API_VERSION = '2022-12-12'

const HEADERS = {
    'Authorization': `Bearer ${process.env.REACT_APP_PT_API_KEY}`,
    'X-Polytomic-Version': `${API_VERSION}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

if (DEV_MODE) {
    console.log(`[${DEV_MODE}] Polytomic Service`, { env: process.env }, API_URL, API_VERSION, HEADERS)
}



class PolytomicService {
    /* CONNECTIONS */
    static getConnectionTypes = () => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/connection_types`,
        })
    }
    static getConnections = () => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/connections`,
        })
    }
    static getConnection = (connId) => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/connections/${connId}`,
        })
    }
    static createConnection = (conn) => {
        return axios({
            method: 'POST',
            headers: HEADERS,
            url: `${API_URL}/connections`,
            data: { ...conn }
        })
    }
    static updateConnection = (connId, conn) => {
        return axios({
            method: 'PATCH',
            headers: HEADERS,
            url: `${API_URL}/connections/${connId}`,
            data: conn
        })
    }
    static deleteConnection = (connId) => {
        return axios({
            method: 'DELETE',
            headers: HEADERS,
            url: `${API_URL}/connections/${connId}`,
        })
    }
    static getConnectionFields = (connId, data) => {
        return axios({
            method: 'POST',
            headers: HEADERS,
            url: `${API_URL}/connection/${connId}/fields`,
            data: { id: connId, ...data }
        })
    }
    static getConnectionObjects = (connId, data) => {
        return axios({
            method: 'POST',
            headers: HEADERS,
            url: `${API_URL}/connection/${connId}/objects`,
            data: data
        })
    }
    static getConnectionTarget = (connId, data) => {
        return axios({
            method: 'POST',
            headers: HEADERS,
            url: `${API_URL}/connection/${connId}/target`,
            data: data
        })
    }
    /* MODELS */
    static getModels = () => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/models`,
        })
    }
    static getModel = (modelId) => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/models/${modelId}`,
        })
    }
    static createModel = (data) => {
        return axios({
            method: 'POST',
            headers: HEADERS,
            url: `${API_URL}/models`,
            data: { ...data }
        })
    }
    static updateModel = (modelId, model) => {
        return axios({
            method: 'PATCH',
            headers: HEADERS,
            url: `${API_URL}/models/${modelId}`,
            data: { ...model }
        })
    }
    static deleteModel = (modelId) => {
        return axios({
            method: 'DELETE',
            headers: HEADERS,
            url: `${API_URL}/models/${modelId}`
        })
    }
    /* MODEL SYNCS */
    static getModelSyncs = () => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/syncs`,
        })
    }
    static getModelSync = (modelSyncId) => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/syncs/${modelSyncId}`,
        })
    }
    static createModelSync = (modelSync) => {
        return axios({
            method: 'POST',
            headers: HEADERS,
            url: `${API_URL}/syncs`,
            data: { ...modelSync }
        })
    }
    static updateModelSync = (modelSyncId, modelSync) => {
        return axios({
            method: 'PATCH',
            headers: HEADERS,
            url: `${API_URL}/syncs/${modelSyncId}`,
            data: { ...modelSync }
        })
    }
    static deleteModelSync = (modelSyncId) => {
        return axios({
            method: 'DELETE',
            headers: HEADERS,
            url: `${API_URL}/syncs/${modelSyncId}`
        })

    }
    static getModelSyncExecutions = (modelSyncId) => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/syncs/${modelSyncId}/executions`,
        })
    }
    static getModelSyncExecution = (modelSyncId, executionId) => {
        return axios({
            method: 'GET',
            headers: HEADERS,
            url: `${API_URL}/syncs/${modelSyncId}/executions/${executionId}`,
        })
    }

}

export default PolytomicService