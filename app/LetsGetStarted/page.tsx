import Header from '../../components/Header';
import LetsGetStarted from '../../components/LetsGetStarted';
import Footer from '@/components/Footer';

export default function LetsGetStartedPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto">
        <LetsGetStarted />
      </main>
    </div>
  );
}