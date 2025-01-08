export default function ChatHeader({ chat, onBack, onDelete }) {
    return (
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <button onClick={onBack} className="text-gray-300 hover:text-white">
            ← Back
          </button>
          <img src={chat.avatar} alt="" className="w-8 h-8 rounded-full" />
          <span className="text-gray-200">{chat.name}</span>
        </div>
        <button
          onClick={onDelete}
          className="text-gray-300 hover:text-white"
        >
          Delete
        </button>
      </div>
    )
  }
  
  