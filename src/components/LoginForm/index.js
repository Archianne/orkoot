import React, { useState } from "react";
import { useRouter } from "next/router"; //NextJS Hook
import nookies from "nookies";

const LoginForm = () => {
  const router = useRouter();
  const [githubUser, setGithubUser] = useState([]);
  return (
    <section className="formArea">
      <form
        className="box"
        onSubmit={(e) => {
          e.preventDefault();

          fetch("https://alurakut.vercel.app/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ githubUser: githubUser }),
          }).then(async (response) => {
            const data = await response.json();
            const token = data.token;
            nookies.set(null, "USER_TOKEN", token, {
              path: "/",
              maxAge: 86400 * 7,
            });
            router.push("/");
          });
        }}
      >
        <p>
          Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
        </p>
        <input
          placeholder="Usuário"
          value={githubUser}
          onChange={(e) => {
            setGithubUser(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>

      <footer className="box">
        <p>
          Ainda não é membro? <br />
          <a href="/login">
            <strong>ENTRAR JÁ</strong>
          </a>
        </p>
      </footer>
    </section>
  );
};

export default LoginForm;
