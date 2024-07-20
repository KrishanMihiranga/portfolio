import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[93%]">
      <h1>Home Page</h1>
      <Link to='/about' className='text-blue-500'>about</Link> <br />
      <Button onClick={() => navigate('/about')}>About Button</Button>
    </div>
  )
}

export default Home;