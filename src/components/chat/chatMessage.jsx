export default function ChatMessage({ message, isUser }) {
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start max-w-[70%]`}>
          {!isUser && (
            <img src={message.avatar} alt="" className="w-8 h-8 rounded-full mr-3" />
          )}
          <div
            className={`rounded-lg p-3 ${
              isUser
                ? 'bg-[#f4a7a7] text-black ml-3'
                : 'bg-[#2a2a2a] text-white'
            }`}
          >
            <p>{message.text}</p>
            <span className="text-xs opacity-70 mt-1 block">
              {message.timestamp}
            </span>
          </div>
        </div>
      </div>
    )
  }
  
  