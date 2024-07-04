import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Home/Navbar'
import HeadAndInfo from '../components/About/HeadAndInfo'
import Scooter from '../assets/images/scooter.png';
import ImageAndHead from '../components/Home/ImageAndHead'
import Footer from '../components/About/Footer'


export default function Header() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="main-content">
    <ImageAndHead
      headStart="Introducing Prayana: The Electric Bike by "
      headSpan="VIT-AP"
      headEnd=" University"
      para="Embrace the future of transportation with the power and efficiency of electric bikes, where each ride is a step towards a greener planet."
      link="https://dummy.com"
      imageSrc={Scooter}
    />
    <HeadAndInfo
    head="Our Roots"
    para="VIT-AP University"
    />
    <HeadAndInfo
    head="Our Mission"
    para="VIT-AP University"
    />

    <Footer />
      </div>
    </>
  );
}
