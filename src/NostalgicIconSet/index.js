import styled from "styled-components";

const NostalgicIconSet = (props) => {
  return (
    <NostalgicIconSetWrapper>
      {[
        { name: "Recados", slug: "recados", icon: "book" },
        { name: "Fotos", slug: "fotos", icon: "camera" },
        { name: "Videos", slug: "videos", icon: "video-camera" },
        { name: "Fãs", slug: "fas", icon: "star" },
        { name: "Mensagens", slug: "mensagens", icon: "email" },
      ].map(({ name, slug, icon }) => (
        <li key={`IconSetKey__${slug}`}>
          <span style={{ gridArea: "title" }} className="IconSet__Title">
            {name}
          </span>
          <span className="IconSet__Number" style={{ gridArea: "number" }}>
            <img
              key={`IconSetKey__${slug}_img`}
              className="IconSet__Icon"
              src={`https://alurakut.vercel.app/icons/${icon}.svg`}
            />
            {props[slug] ? props[slug] : 0}
          </span>
        </li>
      ))}
      {[
        { name: "Confiável", slug: "confiavel", icon: "smile" },
        { name: "Legal", slug: "legal", icon: "cool" },
        { name: "Sexy", slug: "sexy", icon: "heart" },
      ].map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;
        return (
          <li key={`IconSetKey__${slug}`}>
            <span className="IconSet__Title">{name}</span>
            <span
              className="OrkutNostalgicIconSet__iconComplex"
              className="IconSet__Number"
              style={{ gridArea: "number" }}
            >
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= total - 1;
                return (
                  <img
                    key={`IconSetKey__${slug}_img_${index}`}
                    src={`https://alurakut.vercel.app/icons/${icon}.svg`}
                    style={{
                      marginRight: "2px",
                      opacity: isHeartActive ? 1 : "0.5",
                    }}
                  />
                );
              })}
            </span>
          </li>
        );
      })}
    </NostalgicIconSetWrapper>
  );
};

const NostalgicIconSetWrapper = styled.ul`
  margin-top: 32px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    font-size: 12px;
    color: #5a5a5a;
    display: grid;
    grid-template-areas:
      "title title"
      "number number";

    &:not(:last-child) {
      margin-right: 5px;
    }
    .IconSet__Title {
      display: block;
      font-style: italic;
    }
    .IconSet__Number {
      min-width: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .IconSet__Icon {
        margin-right: 7px;
      }
    }
  }
`;

export default NostalgicIconSet;
