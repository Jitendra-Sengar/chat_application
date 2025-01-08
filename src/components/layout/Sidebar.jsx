export default function Sidebar({ chats, onChatSelect, selectedChatId }) {
    return (
      <div className="w-80 bg-[#1a1a1a] border-r border-gray-800 h-screen">
        <div className="p-4">
          <h2 className="text-gray-200 font-semibold mb-4">ALL YOUR CHATS</h2>
          
          <div className="bg-[#2a2a2a] p-3 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Chat images: ON</span>
              <div className="w-10 h-6 bg-[#f4a7a7] rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              
            </p>
          </div>
  
          <div className="space-y-2">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onChatSelect(chat.id)}
                className={`w-full text-left p-3 rounded-lg hover:bg-[#2a2a2a] ${
                  selectedChatId === chat.id ? 'bg-[#2a2a2a]' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={chat.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-gray-200">{chat.name}</div>
                    <div className="text-gray-400 text-sm">{chat.lastMessage}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
  
          <button className="w-full mt-4 p-3 rounded-lg border border-[#f4a7a7] text-[#f4a7a7] hover:bg-[#f4a7a7]/10 flex items-center justify-center">
            <span className="mr-2">+</span>
            Create new chat
          </button>
        </div>
      </div>
    )
  }
  
  