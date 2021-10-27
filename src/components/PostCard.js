import React from "react";


export const PostCard = (props) =>{
    const post = props.post
    const dateCreated = new Date(post.date_created)
    const fullname = post.user.first_name + ' ' + post.user.last_name
    return (
        <div key={post.id} className="card mb-4">
            <div className="card-header">
                {post.title}
            </div>
            <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>{post.body}</p>
                <footer className="blockquote-footer">{fullname} <cite title="Source Title">{dateCreated.toLocaleString()}</cite></footer>
            </blockquote>
            </div>
        </div>
    )
}