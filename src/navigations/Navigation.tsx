import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Navigation() {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <nav>
        {isAuth ? (
          <>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          </>
        ) : (
          <>
        <Link to="/login">Login</Link>
          </>
        )}
    </nav>
  );
}
