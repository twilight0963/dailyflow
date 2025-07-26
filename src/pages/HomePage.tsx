import Navbar from '../components/Logobar';
import NewUser from '../components/NewUser';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <NewUser />
      </main>
    </div>
  );
}
