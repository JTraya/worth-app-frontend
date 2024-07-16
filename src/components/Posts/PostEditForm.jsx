
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
        <main className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
        Edit Worth
        </h1>
              <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="game" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Game
                </label>
                <input 
                name="game" 
                id="game"
                value={formData.game}
                onChange={handleChange}
                required
                className='mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="'
                />
                </div>
                <div>
                <label htmlFor="details" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Details
                </label> 
                <textarea 
                name="details" 
                id="details"
                value={formData.details}
                onChange={handleChange}
                required
                className='mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="'>
                </textarea>
                </div>
                <div>
                <label htmlFor="worth" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Worth
                </label>
                <select name="worth" id="worth" value={formData.worth} onChange={handleChange} required className='mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="'>
                    <option value="Is it Worth?">Is it Worth?</option>
                    <option value="Worth!">Worth!</option>
                    <option value="Not Worth.">Not Worth.</option>
                </select>
                </div>
                <div>
                <button className='w-full mb-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Edit Post
                </button>
                </div>
            </form>
        </div>
        </div>
      </div>
    </main>
    )

}

export default PostEditForm