// Asset URLs from Figma
const imgArt = "https://www.figma.com/api/mcp/asset/e3c715a8-ffe9-467b-838c-49219ff4e29b";
const imgMenu = "https://www.figma.com/api/mcp/asset/c79c118b-1415-4187-b5d1-62fb25d723e2";
const imgStateMenu = "https://www.figma.com/api/mcp/asset/800ecf90-efde-4004-b5ff-c051aa14f027";
const imgRectangle5237 = "https://www.figma.com/api/mcp/asset/e636c779-3b6b-48a3-be31-03c1bcaf4a5b";
const imgArt1 = "https://www.figma.com/api/mcp/asset/f561e67e-51a4-4b1f-83a4-a4ab8b521b4f";
const imgArt2 = "https://www.figma.com/api/mcp/asset/ba60a8b8-a2f4-48ed-8f1b-286c50057ed1";
const imgArt3 = "https://www.figma.com/api/mcp/asset/3d39828b-1910-4ce7-acc3-d612d157277c";
const imgArt4 = "https://www.figma.com/api/mcp/asset/dfda8a79-6749-4779-b0c0-7c74d3c5a4be";
const imgArt5 = "https://www.figma.com/api/mcp/asset/c00756e6-9794-4ed6-9371-ab459b9ce732";
const imgArt6 = "https://www.figma.com/api/mcp/asset/75ffb044-0a4c-446d-b803-4ecec8b9ed97";

const albums = [
  { title: "Dance The Night (From Barbie The Album)", artist: "Dua Lipa", image: imgRectangle5237 },
  { title: "Popular (with Playboi Carti & Madonna)", artist: "The Weeknd", image: imgArt1 },
  { title: "All My Life (feat. J. Cole)", artist: "Lil Durk", image: imgArt2 },
  { title: "Calm Down (with Selena Gomez)", artist: "Rema", image: imgArt3 },
  { title: "Reputation", artist: "Taylor Swift", image: imgArt4 },
  { title: "Flowers", artist: "Miley Cyrus", image: imgArt },
  { title: "Calling (Spider-Man)", artist: "Metro Boomin", image: imgArt5 },
  { title: "Kill Bill", artist: "SZA", image: imgArt6 },
];

export default function MediaAlbum() {
  return (
    <div className="bg-black w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex gap-8 text-lg">
          <button className="text-white hover:text-blue-marin">Albums</button>
          <button className="text-gray-400 hover:text-white">Artists</button>
          <button className="text-gray-400 hover:text-white">Songs</button>
          <button className="text-gray-400 hover:text-white">Search</button>
        </div>
        <div className="flex items-center gap-2 border-2 border-blue-marin rounded-full px-4 py-2">
          <img src={imgArt} alt="Playing" className="w-8 h-8 rounded-full" />
          <span className="text-white">Playing</span>
        </div>
      </div>

      {/* Left Sidebar */}
      <div className="flex">
        <div className="w-32 flex flex-col gap-4 px-4 py-8 border-r border-gray-700">
          <div className="flex justify-center p-3">
            <img src={imgMenu} alt="Menu" className="w-12 h-12" />
          </div>
          <div className="h-1 bg-gray-600 w-full"></div>
          <div className="flex justify-center p-3">
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
          <div className="flex gap-20 min-w-max">
            {albums.map((album, index) => (
              <div key={index} className="flex flex-col gap-3 w-48">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm line-clamp-2">
                    {album.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {album.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
