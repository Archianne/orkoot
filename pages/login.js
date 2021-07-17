import LoginFooter from "../src/components/LoginFooter";
import LoginForm from "../src/components/LoginForm";
import LoginLogoArea from "../src/components/LoginLogoArea";

const Login = () => {
  return (
    <main
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="loginScreen">
        <LoginLogoArea />
        <LoginForm />
        <LoginFooter />
      </div>
    </main>
  );
};

export default Login;
