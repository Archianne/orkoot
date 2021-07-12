import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu } from "../src/lib/commons"

const ProfileSidebar = (prop) => {
  return (
    <Box>
      <img
        src={`https://github.com/archianne.png`}
        alt="Profile Picture"
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
};

export default function Home() {
  const githubUser = "Archianne";
  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: "profileArea" }}></div>
      <ProfileSidebar githubUser={githubUser} />
      <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
        <Box>Bem vindo</Box>
      </div>
      <div className="socialArea" style={{ gridArea: "socialArea" }}>
        <Box>Amigos</Box>
        <Box>Comunidades</Box>
      </div>
    </MainGrid>
  </>
  );
}
