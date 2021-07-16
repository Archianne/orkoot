import Box from "../Box";

const ComunidadeForm = (prop) => {
  const user = "archianne";
  return (
    <Box>
      <h2 className="smallTitle">O que você deseja fazer?</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const dataForm = new FormData(e.target);

          const comunidade = {
            // id: new Date(),
            title: dataForm.get("title"),
            imageUrl: dataForm.get("imageUrl"),
            creatorId: user,
          };

          fetch("/api/comunidades", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(comunidade),
          }).then(async (response) => {
            const data = await response.json();
            const comunidade = data.registerCreated;
            const comunidadesAtt = [comunidade, ...prop.comunidades];
            prop.setComunidades(comunidadesAtt);
            console.log(data);
          });
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
          name="imageUrl"
          aria-label="Coloque uma URL para usarmos de capa"
        />
        <button>Criar comunidade</button>
      </form>
    </Box>
  );
};

export default ComunidadeForm;
