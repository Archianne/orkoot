import React, { useState, useEffect } from "react";
import NavBar from "../src/components/NavBar";
import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";
import { ProfileSidebar } from "../src/components/ProfileSidebar";
import NostalgicIconSet from "../src/NostalgicIconSet";
import ComunidadeForm from "../src/components/ComunidadeForm";
import {
  SocialAreaBox,
  FollowersBox,
  ComunidadesBox,
} from "../src/components/SocialAreaBox";

export default function Home() {
  const [comunidades, setComunidades] = useState([
    {
      id: "1",
      title: "Eu odeio acordar cedo",
      image:
        "https://pbs.twimg.com/profile_images/143696361/avatar_400x400.jpg",
    },
  ]);
  // const githubUser = "Archianne";
  const gitFavourites = [
    "inesperez",
    "Jordaneddielinton93",
    "JHannah30",
    "Anna-MarieMoss",
    "danitacodes",
    "isacoper",
  ];
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
        console.log(data);
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
        console.log(data);
      });
  }, []);

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
          />
        </div>

        <div className="socialArea" style={{ gridArea: "socialArea" }}>
          <FollowersBox title="followers" items={followers} />
          <SocialAreaBox title="friends" items={gitFavourites} />
          <ComunidadesBox comunidades={comunidades} />
        </div>
      </MainGrid>
    </>
  );
}
