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
  const githubUser = "Archianne";
  const gitFavourites = ["juunegreiros", "a", "b", "g", "d", "e"];

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
            <h1 className="title">Bem Vindo</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2>O que você deseja fazer?</h2>

            <form>
              <input
                placeholder="Qual vai ser o nome da sua comunidade?"
                type="text"
                name="title"
                ariaLabel="Qual vai ser o nome da sua comunidade?"
              />
              <input
                placeholder="Coloque uma URL para usarmos de capa"
                type="text"
                name="image"
                ariaLabel="Coloque uma URL para usarmos de capa"
              />
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="socialArea" style={{ gridArea: "socialArea" }}>
          <SocialAreaBoxWrapper>
            <h2 className="smallTitle">Friends ({gitFavourites.length})</h2>
            <ul>
              {gitFavourites.map((friend) => {
                return (
                  <li>
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
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
