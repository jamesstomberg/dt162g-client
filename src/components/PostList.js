import Paginate from './Paginate';
import Post from './Post';
import useGetPosts from '../hooks/useGetPosts';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PostList = () => {
    const [url, setUrl] = useState();
    const location = useLocation();
    const page = new URLSearchParams(location.search).get('page');

    useEffect(() => {
        setUrl(`http://localhost:3001/api/posts?page=${page}`);
    }, [page])

    const { posts, pagination, isPending, error } = useGetPosts(url);

    return (
        <Container className="p-3">
            <h2>Alla inlägg</h2>
            {isPending && <p>Laddar...</p>}
            {error && <p>{error}</p>}
            {posts && posts.map((post) => (
                <Post key={post._id} {...post} />
            ))}

            {pagination && <Paginate {...pagination} />}
        </Container>
    );
}

export default PostList;