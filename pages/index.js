import React, { useState, useEffect } from "react";
import nookies from "nookies";
import jwt from "jsonwebtoken";
import NavBar from "../src/components/NavBar";
import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";
import { ProfileSidebar } from "../src/components/ProfileSidebar";
import NostalgicIconSet from "../src/components/NostalgicIconSet";
import ComunidadeForm from "../src/components/ComunidadeForm";
import { FollowersBox, ComunidadesBox } from "../src/components/SocialAreaBox";


const HomePage = (props) => {
  const user = props.githubUser;
  const [comunidades, setComunidades] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [githubUser, setGithubUser] = useState([]);

  useEffect(() => {
    const URL = `https://api.github.com/users/${user}/followers`;
    const followers = fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFollowers(data);
      });
  }, []);

  useEffect(() => {
    const URL = `https://api.github.com/users/${user}`;
    const githubUser = fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGithubUser(data);
      });
  }, []);

  //API GRAPHQL
  const TOKEN = "fc4d4558e7f8f7979209609b36261d";
  const URL = "https://graphql.datocms.com/";

  useEffect(() => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        query: `query {
        allCommunities {
          title
          imageUrl
          creatorId
        }
      }`,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setComunidades(response.data.allCommunities);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <NavBar />
      <MainGrid>
        <div
          className="profileArea"
          style={{ gridArea: "profileArea", backgroundColor: "blue" }}
        ></div>
        <ProfileSidebar githubUser={githubUser} />

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem Vindo(a)</h1>
            <NostalgicIconSet />
          </Box>

          <ComunidadeForm
            comunidades={comunidades}
            setComunidades={setComunidades}
            githubUser={githubUser}
          />
        </div>

        <div className="socialArea" style={{ gridArea: "socialArea" }}>
          <FollowersBox title="friends" items={followers} />
          <ComunidadesBox comunidades={comunidades} />
        </div>
      </MainGrid>
    </>
  );
};

export default HomePage;

export async function getServerSideProps(context) {
  const URL = "https://alurakut.vercel.app/api/auth";
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch(URL, {
    headers: {
      Authorization: token,
    },
  }).then((response) => response.json());

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser,
    },
  };
}
