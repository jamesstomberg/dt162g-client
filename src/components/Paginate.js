import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const Paginate = ({ page, pageCount, source }) => {
    const navigate = useNavigate();
    let active = page;
    let items = [];

    const handleClick = (number) => {
        navigate('/?page=' + number);

        // Scroll to top of page.
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => handleClick(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Pagination size="md">{items}</Pagination>
            </div>
        </Container>

    );
}

export default Paginate;