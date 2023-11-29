import PostSingle from './PostSingle';
import useGetPosts from '../hooks/useGetPosts';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

const Show = () => {
    const { id } = useParams();
    const { posts, isPending, error } = useGetPosts(`http://localhost:3001/api/posts/${id}`);

    return (
        <Container className="p-3">
            <h2>Enskilt inlägg</h2>
            {isPending && <p>Laddar...</p>}
            {error && <p>{error}</p>}
            {posts && <PostSingle {...posts} />}
        </Container>
    );
}

export default Show;