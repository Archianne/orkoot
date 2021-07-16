import { SiteClient } from "datocms-client";

export default async (request, response) => {
  if (request.method === "POST") {
    const TOKEN = "25acca2b4d69b8028d5c4269bc2946";
    const client = new SiteClient(TOKEN);
    const registerCreated = await client.items.create({
      itemType: "966842",
      ...request.body,
      // title: "Comunidade de Teste",
      // imageUrl: "https://github.com/omariosouto.png",
      // creatorId: "omariosouto",
    });

    response.json({
      registerCreated: registerCreated,
    });
    return;
  }
};