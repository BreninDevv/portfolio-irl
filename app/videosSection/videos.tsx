export default function Edits() {
  const minecraftEdits = [
    {
      mention: "@Kai cenat live",
      title: "I GIVE UP (PORTFOLIO)",
      category: "Shorts",
      type: "vertical",
      // Use o link direto do YouTube ou o formato embed
      video: "https://youtube.com/shorts/JwH1OawsxPk",
    },
    {
      mention: "@RayLivee",
      title: "RAY U DID IT (PORTFOLIO)",
      category: "Shorts",
      type: "vertical",
      video: "https://www.youtube.com/shorts/jk5R-tZOzME", // Adicione links reais aqui
    },
    {
      mention: 3,
      title: "The End Dimension",
      category: "Long Form",
      type: "horizontal",
      video: "",
    },
  ];

  const robloxEdits = [
    {
      mention: "@TheTylilShowLivee",
      title: "RIGGIE 😂 (PORTFOLIO)",
      category: "Shorts",
      type: "vertical",
      video: "https://youtube.com/shorts/MBQXE4VzrWg?feature=share",
    },
    {
      mention: "@RayLivee",
      title: "RAY CLIP (PORTFOLIO)",
      category: "Shorts",
      type: "vertical",
      video: "https://www.youtube.com/shorts/PWW59RCgrMA",
    },
    {
      mention: 6,
      title: "Brookhaven Story",
      category: "Long Form",
      type: "horizontal",
      video: "",
    },
  ];

  return (
    <section
      id="edits"
      className="w-full bg-white py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-[#181922] mb-16 text-center">
        My Best Edits
      </h2>

      {/* Minecraft Section */}
      <div className="w-full max-w-6xl mb-20">
        <div className="flex items-center gap-4 mb-10 border-b-4 border-[#181922] pb-4">
          <h3 className="text-3xl font-bold text-[#181922]">In Real Life</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {minecraftEdits.map((item) => (
            <VideoCard key={item.mention} item={item} />
          ))}
        </div>
      </div>

      {/* Roblox Section */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {robloxEdits.map((item) => (
            <VideoCard key={item.mention} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ item }: { item: any }) {
  const formatYoutubeUrl = (url: string) => {
    if (!url) return "";
    return url
      .replace("watch?v=", "embed/")
      .replace("shorts/", "embed/")
      .split("?")[0];
  };

  return (
    <div className="flex flex-col gap-4 group">
      <div
        className={`
          relative w-full bg-[#181922] rounded-[2rem] border-[3px] border-[#181922] overflow-hidden 
          shadow-[8px_8px_0px_0px_rgba(24,25,34,1)] transition-all 
          group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none
          ${item.type === "vertical" ? "aspect-[9/16]" : "aspect-video"}
        `}
      >
        {/* AJUSTE 1: Removido qualquer padding da div pai.
            AJUSTE 2: Definido o bg como a mesma cor da borda (#181922) para que, se sobrar 1px, ele seja invisível.
        */}
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          {item.video ? (
            <iframe
              src={formatYoutubeUrl(item.video)}
              title={item.title}
              /* AJUSTE 3: Classes scale-105 e rounded-[1.8rem].
                 O 'scale-105' garante que o vídeo "vaze" um pouco para dentro das bordas, eliminando listras.
                 O 'rounded' interno acompanha a moldura do celular.
              */
              className="w-full h-full border-none object-cover scale-[1.02] rounded-[1.8rem]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-gray-400">Vídeo em breve</p>
          )}
        </div>

        <div className="absolute top-5 left-5 bg-[#181922] text-white text-[10px] font-bold font-sans px-3 py-1 rounded-lg uppercase pointer-events-none">
          {item.category}
        </div>
      </div>

      <div className="px-2">
        <h4 className="text-2xl font-bold text-[#181922]">{item.title}</h4>
        <p className="text-xs font-sans text-gray-500 font-bold uppercase tracking-widest">
          {item.mention}
        </p>
      </div>
    </div>
  );
}
