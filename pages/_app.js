import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans bg-gray-50">
      <Component {...pageProps} />
    </div>
  );
}
