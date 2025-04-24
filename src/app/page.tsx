import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Main content with Delphiy Logo */}
      <main className="min-h-screen bg-black flex items-center justify-center">
        <a
          href="https://chat.openai.com/g/g-680a1f0eb4888191804cd878e88a6767-delphiy"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/delphiy1.png"
            alt="Delphiy Logo"
            width={560}
            height={168}
            priority
            className="object-contain"
          />
        </a>
      </main>

      {/* HBAR logo with enhanced visibility */}
      <div 
        style={{ 
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99,
          boxShadow: '0 0 10px rgba(255,255,255,0.1)',
          borderRadius: '50%',
          padding: '3px',
          background: '#111'
        }}
      >
        <a
          href="https://hbar.blog"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/hbar_main_400x400.jpeg"
            alt="HBAR Logo"
            width={70}
            height={70}
            className="rounded-full"
            unoptimized
          />
        </a>
      </div>
    </>
  );
}
