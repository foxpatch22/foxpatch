import Header from '@/components/layout/Header';
import LetsGetStarted from '@/components/sections/Common/GetStarted';

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