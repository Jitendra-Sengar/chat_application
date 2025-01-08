import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
import ChatHeader from './components/chat/ChatHeader'
import ChatMessage from './components/chat/ChatMessage'
import ChatInput from './components/chat/ChatInput'

// Dummy data
const initialChats = [
  {
    id: 1,
    name: 'Caressa Jessalin',
    avatar: '/placeholder.svg?height=40&width=40',
    lastMessage: 'Lorem ipsum dolor sit am...',
  },
  {
    id: 2,
    name: 'Lazy Bride',
    avatar: '/placeholder.svg?height=40&width=40',
    lastMessage: 'Lorem ipsum dolor sit am...',
  },
]

const initialMessages = [
  {
    id: 1,
    text: 'Hello!👋',
    timestamp: '2:39 PM',
    avatar: '/placeholder.svg?height=32&width=32',
    isUser: false,
  },
  {
    id: 2,
    text: 'Hello user ! How can i help you',
    timestamp: '2:40 PM',
    isUser: true,
  },
]

export default function App() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [messages, setMessages] = useState(initialMessages)

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          chats={initialChats}
          selectedChatId={selectedChat?.id}
          onChatSelect={(id) => setSelectedChat(initialChats.find(chat => chat.id === id))}
        />
        <main className="flex-1 flex flex-col">
          {selectedChat ? (
            <>
              <ChatHeader
                chat={selectedChat}
                onBack={() => setSelectedChat(null)}
                onDelete={() => {
                  setSelectedChat(null)
                  // Handle delete logic here
                }}
              />
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} isUser={message.isUser} />
                ))}
              </div>
              <ChatInput onSendMessage={handleSendMessage} />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Select a chat to start messaging
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}