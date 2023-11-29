import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const PostSingle = ({ _id, postTitle, postAuthor, postImage, postContent }) => {
    return (
        <Container>
            <div className="d-flex justify-content-start">
                <Link to="/">
                    <Button variant="link">Till startsida</Button>
                </Link>
            </div>
            <Container className="rounded-3 border p-4 my-4">
                <h3 className="my-2">{postTitle}</h3>
                <p className="mb-4 text-xs">Skriven av: {postAuthor.authorName}</p>
                <img src={postImage} className="img-fluid mb-2"></img>
                <p className="my-2">{postContent}</p>
                {/*<Link to={`/show/${_id}`}>
                <div className="d-flex justify-content-end mt-4">
                    <Button variant="primary" className="text-right">Läs mer</Button>
                </div>
    </Link>*/}
            </Container>
        </Container>
    );
}

export default PostSingle;