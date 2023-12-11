import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useGetPosts from '../hooks/useGetPosts';

const DashboardList = () => {
    const { posts, isPending, error } = useGetPosts('http://localhost:3001/api/allposts');

    return (
        <Table striped bordered hover className="mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Redigera</th>
                    <th>Radera</th>
                </tr>
            </thead>
            <tbody>
                {isPending && <tr><td>Laddar...</td></tr>}
                {error && <tr><td>{error}</td></tr>}
                {posts && posts.map((post) => (
                    <tr key={post._id}>
                        <td>{post._id}</td>
                        <td>{post.postTitle}</td>
                        <td>
                            <Link to="edit-post" state={{ post: post}}>
                                <Button variant="success">Redigera</Button>
                            </Link>
                        </td>
                        <td>
                            <Link to="delete-post" state={{ postId: post._id}}>
                                <Button variant="danger">Radera</Button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default DashboardList;