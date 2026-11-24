
import { getStore } from "@netlify/blobs";

export default async function (request) {
  const store = getStore("arcade-roms");

  const jogo = await store.get("jogo-teste-autorizado.sfc", {
    type: "stream"
  });

  if (!jogo) {
    return new Response("O jogo de teste ainda não foi enviado.", {
      status: 404
    });
  }

  return new Response(jogo, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
