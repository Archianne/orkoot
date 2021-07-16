import React, { useState, useEffect } from "react";
import NavBar from "../src/components/NavBar";
import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";
import { ProfileSidebar } from "../src/components/ProfileSidebar";
import NostalgicIconSet from "../src/NostalgicIconSet";
import ComunidadeForm from "../src/components/ComunidadeForm";
import {
  FollowersBox,
  ComunidadesBox,
} from "../src/components/SocialAreaBox";

const HomePage = () => {
  const [comunidades, setComunidades] = useState([]); 
  const [followers, setFollowers] = useState([]);
  const [githubUser, setGithubUser] = useState([]);

  useEffect(() => {
    const URL = "https://api.github.com/users/Archianne/followers";
    const followers = fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFollowers(data);
      });
  }, []);

  useEffect(() => {
    const URL = "https://api.github.com/users/Archianne";
    const githubUser = fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGithubUser(data);
      });
  }, []);

  //API GRAPHQL
  const TOKEN = "25acca2b4d69b8028d5c4269bc2946";
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
}

export default HomePage;