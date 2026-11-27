import { NextResponse } from "next/server";

const allowlist = new Set([
  "https://lasalvaja.es/", "https://lasalvaja.es/nuestra-carta/", "https://lasalvaja.es/contacto/", "https://lasalvaja.es/galeria/",
  "https://www.instagram.com/lasalvaja/", "https://www.just-eat.es/restaurants-lasalvaja-sevilla/menu", "https://www.ubereats.com/"
]);
export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!allowlist.has(url)) return NextResponse.json({ ok:false, state:"blocked", message:"URL fuera de la lista permitida." }, { status:400 });
    const controller = new AbortController(); const timeout = setTimeout(()=>controller.abort(), 7000);
    const response = await fetch(url, { signal:controller.signal, headers:{"User-Agent":"LAsalvajaDemoSourceChecker/1.0"}, cache:"no-store" }); clearTimeout(timeout);
    const html = await response.text(); const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g," ").trim() || "Sin título detectable";
    const links = (html.match(/<a\b/gi)||[]).length; const images = (html.match(/<img\b/gi)||[]).length;
    return NextResponse.json({ ok:response.ok, state:response.ok?"accessible":"partial", status:response.status, title, elements:{links,images}, checkedAt:new Date().toISOString() });
  } catch { return NextResponse.json({ok:false,state:"blocked",message:"La fuente no respondió a tiempo o bloqueó la consulta."},{status:502}); }
}
