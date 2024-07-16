
import { useState } from "react"

const PostForm = ({user, handleAddPost}) => {

    const [formData, setFormData] = useState({
        game: '',
        details: '',
        worth: 'Is it Worth?',
        owner: user._id
    })

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        handleAddPost(formData)
        setFormData({
            game: '',
            details: '',
            worth: 'Is it Worth?',
            owner: user._id    
        })
    }

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
                    <option value="Is it Worth?">Is it Worth?</option>
                    <option value="Worth!">Worth!</option>
                    <option value="Not Worth.">Not Worth.</option>
                </select>
                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default PostForm