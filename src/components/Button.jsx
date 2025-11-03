import { Link } from "react-router-dom";

export default function Button({ title, link }) {
  return (
    <Link
      to={link}
      className="font-varela uppercase border text-body-color border-white py-2.5 px-6 text-white inline-block text-center hover:bg-white hover:border-white hover:text-orange-dark transition-all duration-800"
    >
      {title}
    </Link>
  );
}
