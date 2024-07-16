

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL + '/posts'

async function create(formData){
    console.log(BASE_URL)
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    const data = await response.json()
    if(response.ok) return data
    throw new Error(data.error)
}

async function index(){

    const response = await fetch(BASE_URL, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
})
    const data = await response.json()
    if(response.ok) return data
    throw new Error(data.error)
}

async function show(postId){

    const response = await fetch(BASE_URL + `/${postId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
        const data = await response.json()
    if(response.ok) return data
    throw new Error(data.error)
}

async function edit(postId, formData){

    const response = await fetch(BASE_URL + `/${postId}/edit`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })

    const data = await response.json()
    if(response.ok) return data
    throw new Error(data.error)
}

async function deletePost(postId){

    const response = await fetch(BASE_URL + `/${postId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    const data = await response.json()
    if(response.ok) return data
    throw new Error(data.error)
}

export {create, index, show, edit, deletePost}