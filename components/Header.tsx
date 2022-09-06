import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href={'/'}>
          <a>
            <h2>Next Blog</h2>
          </a>
        </Link>
      </div>
    </header>
  );
}
