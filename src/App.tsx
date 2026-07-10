import { useState } from 'react'
import MediaAlbum from './components/MediaAlbum'
import MediaArtist from './components/MediaArtist'

function App() {
  const [currentView, setCurrentView] = useState<'album' | 'artist'>('album')

  return (
    <div className="w-full h-screen bg-black">
      <div className="flex gap-4 p-4 mb-4">
        <button
          onClick={() => setCurrentView('album')}
          className={`px-4 py-2 rounded ${
            currentView === 'album'
              ? 'bg-blue-marin text-white'
              : 'bg-gray-700 text-gray-200'
          }`}
        >
          Albums
        </button>
        <button
          onClick={() => setCurrentView('artist')}
          className={`px-4 py-2 rounded ${
            currentView === 'artist'
              ? 'bg-blue-marin text-white'
              : 'bg-gray-700 text-gray-200'
          }`}
        >
          Artists
        </button>
      </div>

      {currentView === 'album' && <MediaAlbum />}
      {currentView === 'artist' && <MediaArtist />}
    </div>
  )
}

export default App
