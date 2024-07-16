
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as postService from '../../services/postService'

const PostEditForm = ({ user, handleEditPost}) => {

    const [formData, setFormData] = useState({
        game: '',
        details: '',
        worth: '',
        owner: user._id
    })

    const { postId } = useParams()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault()
        handleEditPost(postId, formData)
    }

    useEffect(() => {

        async function fetchPost(){

            const postData = await postService.show(postId)
            console.log('Data: ', postData)
            setFormData(postData)
        }
    
        if (postId) fetchPost()
    
      }, [postId])
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="game">Game: </label>
                <input 
                name="game" 
                id="game"
                value={formData.game}
                onChange={handleChange}
                required
                />
                <label htmlFor="details">Details: </label> 
                <textarea 
                name="details" 
                id="details"
                value={formData.details}
                onChange={handleChange}
                required>
                </textarea>
                <label htmlFor="worth">Worth: </label>
                <select name="worth" id="worth" value={formData.worth} onChange={handleChange} required>
                    <option value="Worth?">Is it Worth?</option>
                    <option value="Worth!">Worth!</option>
                    <option value="NotWorth">Not Worth.</option>
                </select>
                <button type="submit">Edit Post</button>
            </form>
        </div>
    )

}

export default PostEditForm