// Asset URLs from Figma
const imgMenu = "https://www.figma.com/api/mcp/asset/102ed609-8eb4-4dea-8a09-e94c8d2138ea";
const imgArt1 = "https://www.figma.com/api/mcp/asset/eb1600c9-c411-4325-bd8e-5f4a07096d82";
const imgArt2 = "https://www.figma.com/api/mcp/asset/5fed82fb-1489-42bf-bb64-0e5a29289620";
const imgArt3 = "https://www.figma.com/api/mcp/asset/462306c4-8511-4f6b-97f1-e8667a93aff4";
const imgArt4 = "https://www.figma.com/api/mcp/asset/e7a1ced2-b743-4669-9668-254ebfd0e19b";
const imgArt5 = "https://www.figma.com/api/mcp/asset/91d6e0c6-ead4-4746-ade4-d242039854f3";
const imgArt6 = "https://www.figma.com/api/mcp/asset/00a576d8-b38a-4e37-93bc-e4d933a1cff6";
const imgArt7 = "https://www.figma.com/api/mcp/asset/74ab33cc-c75e-4a24-a376-3dae4e2192be";
const imgArt8 = "https://www.figma.com/api/mcp/asset/21ab27ba-23fd-4192-81be-8473f662f4f5";

const artists = [
  { name: "The Weeknd", image: imgArt1 },
  { name: "Tyga", image: imgArt2 },
  { name: "Beyonce", image: imgArt3 },
  { name: "Taylor Swift", image: imgArt4 },
  { name: "Miley Cyrus", image: imgArt5 },
  { name: "Adele", image: imgArt6 },
  { name: "Rema", image: imgArt7 },
  { name: "Metro Boomin", image: imgArt8 },
];

export default function MediaArtist() {
  return (
    <div className="bg-black w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold text-white">Artists</div>
        <div className="text-sm text-gray-400">USB</div>
      </div>

      {/* Left Sidebar */}
      <div className="flex">
        <div className="w-32 flex flex-col gap-4 px-4 py-8 border-r border-gray-700">
          <div className="flex justify-center p-3">
            <img src={imgMenu} alt="Menu" className="w-12 h-12" />
          </div>
          <div className="h-1 bg-gray-600 w-full"></div>
          <div className="flex justify-center p-3 border-l-2 border-blue-marin">
            <img src={imgMenu} alt="Menu" className="w-12 h-12" />
          </div>
          <div className="flex justify-center p-3">
            <img src={imgMenu} alt="Menu" className="w-12 h-12" />
          </div>
          <div className="flex justify-center p-3">
            <img src={imgMenu} alt="Menu" className="w-12 h-12" />
          </div>
          <div className="flex justify-center p-3">
            <img src={imgMenu} alt="Menu" className="w-12 h-12" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-x-auto px-8 py-8">
          <div className="flex gap-16 min-w-max">
            {artists.map((artist, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-gray-700">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg text-center">
                  {artist.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
