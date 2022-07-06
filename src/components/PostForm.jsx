import React, { useState } from 'react'
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';


const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault();
        if (!post.title && !post.body) return

        const newPost = {
            id: Date.now(),
            ...post
        }
        create(newPost)
        setPost({ title: '', body: '' })

    };
    return (
        <form>
            {/* {Управляемый компонент} */}
            <MyInput
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            {/* Неуправляемый/Неконтролируемый компонент */}
            <MyInput
                // ref={bodyInputRef}
                type="text"
                placeholder="Название поста"
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />

            <MyButton onClick={addNewPost}>Добавить пост</MyButton>
        </form>
    )
}

export default PostForm
