export default function FooterComponent() {
  return (
    <footer className="bg-white text-purple-600 border-t border-purple-300 p-4 text-center">
      <div>
        <p>&copy; {new Date().getFullYear()} Gathr. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="#" className="text-purple-800 hover:text-purple-500 ml-2">
            Facebook
          </a>
          ,
          <a href="#" className="text-purple-800 hover:text-purple-500 ml-1">
            Twitter
          </a>
          , and
          <a href="#" className="text-purple-800 hover:text-purple-500 ml-1">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}
