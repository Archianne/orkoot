import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { SocialAreaBoxWrapper } from "../src/components/socialArea";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/commons";

const ProfileSidebar = (prop) => {
  return (
    <Box>
      <img
        src={`https://github.com/${prop.githubUser}.png`}
        alt="Profile Picture"
        style={{ borderRadius: "8px" }}
      />
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
        <div className="profileArea" style={{ gridArea: "profileArea" }}></div>
        <ProfileSidebar githubUser={githubUser} />
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
          <h1 className="title">Bem Vindo</h1>
          <OrkutNostalgicIconSet />
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
