import { useState } from 'react'

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="w-full bg-[#2a2a2a] text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#f4a7a7]"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#f4a7a7] hover:text-[#f4a7a7]/80"
        >
          <span className="text-xl">→</span>
        </button>
      </div>
    </form>
  )
}

