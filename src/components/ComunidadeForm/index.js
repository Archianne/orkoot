import Box from "../Box";

const ComunidadeForm = (prop) => {
  return (
    <Box>
      <h2 className="smallTitle">O que você deseja fazer?</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const dataForm = new FormData(e.target);

          const comunidade = {
            id: new Date(),
            title: dataForm.get("title"),
            image: dataForm.get("image"),
          };
          const comunidadesAtt = [...prop.comunidades, comunidade];
          prop.setComunidades(comunidadesAtt);
          console.log(prop.comunidades);
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
  );
};

export default ComunidadeForm;
