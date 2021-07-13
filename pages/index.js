import React, { useState } from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { SocialAreaBoxWrapper } from "../src/components/socialArea";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/commons";

const ProfileSidebar = (prop) => {
  return (
    <Box>
      <img
        src={`https://github.com/${prop.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <a href={`https://github.com/${prop.githubUser}`} className="boxLink">
        @{prop.githubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
};

export default function Home() {
  const [comunidades, setComunidades] = useState([
    {
      id: "1",
      title: "Eu odeio acordar cedo",
      image:
        "https://pbs.twimg.com/profile_images/143696361/avatar_400x400.jpg",
    },
  ]);
  const githubUser = "Archianne";
  const gitFavourites = [
    "inesperez",
    "Jordaneddielinton93",
    "JHannah30",
    "Anna-MarieMoss",
    "danitacodes",
    "isacoper",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div
          className="profileArea"
          style={{ gridArea: "profileArea", backgroundColor: "blue" }}
        ></div>
        <ProfileSidebar githubUser={githubUser} />

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2>O que você deseja fazer?</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const dataForm = new FormData(e.target);

                const comunidade = {
                  id: new Date(),
                  title: dataForm.get("title"),
                  image: dataForm.get("image"),
                };
                const comunidadesAtt = [...comunidades, comunidade];
                setComunidades(comunidadesAtt);
                console.log(comunidades);
              }}
            >
              <input
                placeholder="Qual vai ser o nome da sua comunidade?"
                type="text"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
              />
              <input
                placeholder="Coloque uma URL para usarmos de capa"
                type="text"
                name="image"
                aria-label="Coloque uma URL para usarmos de capa"
              />
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>

        <div className="socialArea" style={{ gridArea: "socialArea" }}>
          <SocialAreaBoxWrapper>
            <h2 className="smallTitle">amigos ({gitFavourites.length})</h2>
            <ul>
              {gitFavourites.map((friend) => {
                return (
                  <li key={friend}>
                    <a href={`/users/${friend}`} key={friend}>
                      <img
                        src={`https://github.com/${friend}.png`}
                        alt="Friends Picture"
                      />
                      <span>{friend}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </SocialAreaBoxWrapper>
          <SocialAreaBoxWrapper>
            <h2 className="smallTitle">comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((comunidade) => {
                return (
                  <li key={comunidade.id}>
                    <a
                      href={`/users/${comunidade.title}`}
                      key={comunidade.title}
                    >
                      <img
                        src={`${comunidade.image}`}
                        alt="Comunidade Picture"
                      />
                      <span>{comunidade.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </SocialAreaBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
