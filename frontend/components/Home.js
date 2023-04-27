import Trends from './Trends';
import Link from 'next/link';
function Home() {
  return (
    <div className="container">
      <div>
        <Link href="/"><img src="./logo.png" alt = "logo" width="50px" className='logo'/></Link>
      </div>
      <div>
        <h2>Home</h2>
      </div>
      <div>
        <h2>Trends</h2>
        <Trends/>
      </div>
    </div>
  );
}

export default Home;
