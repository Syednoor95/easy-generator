import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";

const Layout = () => {
  const { LOGIN, SIGN_UP } = PathConstants;
  return (
    <section className="flex items-center justify-end gap-6 p-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-lg text-white font-bold">
      <Link to={LOGIN}>Login</Link>
      <Link to={SIGN_UP}>Sign Up</Link>
    </section>
  );
};

export default Layout;
