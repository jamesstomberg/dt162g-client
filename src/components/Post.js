import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Post = ({ _id, postTitle, postContent, postAuthor, postImage }) => {
    return (
        <Container className="rounded-3 border p-4 my-4">
            <h3 className="my-2">{postTitle}</h3>
            <p className="mb-4 text-xs">Skriven av: {postAuthor.authorName}</p>
            <img src={postImage} className="img-fluid img-thumbnail mb-2"></img>
            <p className="my-2">{postContent.slice(0,100) + "..."}</p>
            <Link to={`/show/${_id}`}>
                <div className="d-flex justify-content-end mt-4">
                    <Button variant="primary" className="text-right">Läs mer</Button>
                </div>
            </Link>
        </Container>
    );
}

export default Post;