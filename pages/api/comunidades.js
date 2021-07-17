import { SiteClient } from "datocms-client";

export default async (request, response) => {
  if (request.method === "POST") {
    const TOKEN = "8266ed55b439e42feb112f215ad120";
    const client = new SiteClient(TOKEN);
    const registerCreated = await client.items.create({
      itemType: "975939",
      ...request.body,
    });

    response.json({
      registerCreated: registerCreated,
    });
    return;
  }
};
