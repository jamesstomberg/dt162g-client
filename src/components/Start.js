import Container from 'react-bootstrap/Container';
import PostList from './PostList';

const Start = () => {
    return (
        <Container>
            <h1>Startsida</h1>
            <Container className="p-3">
                <Container className="p-5 mb-4 bg-light rounded-3">
                    <div className="home">
                        {<PostList />}
                    </div>
                </Container>
            </Container>
        </Container>
    );
}

export default Start;