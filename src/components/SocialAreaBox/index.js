import styled from "styled-components";
import Box from "../Box";

export const SocialAreaBox = (prop) => {
  return (
    <SocialAreaBoxWrapper>
      <h2 className="smallTitle">
        {prop.title} ({prop.items.length})
      </h2>
      <ul>
        {prop.items.slice(0, 6).map((item) => {
          return (
            <li key={item}>
              <a href={`https://github.com/${item}`} key={item}>
                <img
                  src={`https://github.com/${item}.png`}
                  alt="Friends Picture"
                />
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </SocialAreaBoxWrapper>
  );
};

export const FollowersBox = (prop) => {
  return (
    <SocialAreaBoxWrapper>
      <h2 className="smallTitle">
        {prop.title} ({prop.items.length})
      </h2>
      <ul>
        {prop.items.slice(0, 6).map((item) => {
          return (
            <li key={item.login}>
              <a href={`https://github.com/${item.login}`} key={item.login}>
                <img
                  src={`https://github.com/${item.login}.png`}
                  alt="Friends Picture"
                />
                <span>{item.login}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </SocialAreaBoxWrapper>
  );
};

export const ComunidadesBox = (prop) => {
  return (
    <SocialAreaBoxWrapper>
      <h2 className="smallTitle">comunidades ({prop.comunidades.length})</h2>
      <ul>
        {prop.comunidades.slice(0, 6).map((comunidade) => {
          return (
            <li key={comunidade.id}>
              <a href={`/users/${comunidade.title}`}>
                <img
                  src={
                    `${comunidade.image}` ||
                    `https://img10.orkut.br.com/community/af2fb86433daea87670db780fa7c556b.jpeg`
                  }
                  alt="Comunidade Picture"
                />
                <span>{comunidade.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </SocialAreaBoxWrapper>
  );
};

const SocialAreaBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 220px;
    list-style: none;
  }

  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #ffffff;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-image: linear-gradient(0deg, #00000073, transparent);
    }
  }
`;
