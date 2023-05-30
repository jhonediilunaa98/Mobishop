// 



import './Home.module.css';
import airpod from '../assets/AirPod 2nd Gen.jpg';
import ipad from '../assets/ipad-pro.jpg';
import iphone14 from '../assets/iphone_14.webp';
import smart from '../assets/smart_1.png';
import applew from '../assets/apple-watch-pcq.jpg';



const Home = () => {
  return (
    <main>
      <h2 id='tit'>Lo que deseas aca lo encuentras </h2>
      <div className="card">
    <p className='p'><span className='span'><img src={ipad}/></span></p>
    <p className='p'><span className='span'><img src={applew} /></span></p>
    <p className='p'><span className='span'><img src= {airpod} /></span></p>
    </div>
    
    </main>
  );
};

export default Home;
