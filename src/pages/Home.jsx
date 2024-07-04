import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Home/Navbar'
import MainContent from '../components/Home/MainContent';

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/test');
  };
  return (
    <>
    <Navbar />
    <MainContent />
    </>
  );
}
