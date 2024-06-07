const Post = ({ post } : any) => (
    <div className="post" id={post.id.toString()}>
        <h2>{post.title}</h2>
        <small>By {post.author.name}</small>
        <br />
        <p>{post.content}</p>
    </div>
);

export default Post;
