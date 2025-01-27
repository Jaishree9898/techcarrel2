import Header from "./Header";
import logo from './tc-logo.png'
import Footer from "./Footer";
import Signup from "./Signup";

function Register() {
  return (
    <>
      <Header logo={logo} />
      <Signup />
      <Footer />
          </>
  )
}

export default Register;