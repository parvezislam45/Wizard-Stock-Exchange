import { useEffect, useState } from "react";

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [autoReplies] = useState([
    "This is an auto-reply from customer support 1.",
    "This is an auto-reply from customer support 2.",
    "This is an auto-reply from customer support 3.",
    "This is an auto-reply from customer support 4."
  ]);

  const openChatModal = () => {
    setIsOpen(true);
  };

  const closeChatModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      // Save the client's message in the chat history
      const clientMessage = { sender: 'You', message };
      setChatHistory((prevHistory) => [...prevHistory, clientMessage]);
      setMessage('');

      // Send auto-replies one by one
      if (autoReplies.length > 0) {
        const autoReply = autoReplies.shift();
        const supportMessage = { sender: 'Support', message: autoReply };
        setChatHistory((prevHistory) => [...prevHistory, supportMessage]);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Simulate a welcome message when the chat modal is opened
      setChatHistory([
        { sender: 'Support', message: 'Welcome to our customer support chat!' },
      ]);
    }
  }, [isOpen]);
  
  return (
    <div>
      <button onClick={openChatModal}>
        <a className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <img
            className="object-cover object-center w-full h-full rounded-full"
            src="https://png.pngtree.com/png-vector/20220818/ourlarge/pngtree-rounded-vector-icon-of-a-blue-colored-help-desk-vector-png-image_19578304.jpg"
          />
        </a>
      </button>

      {isOpen && (
        <div className="fixed right-4 bottom-4 w-72 h-2/5 bg-red-600 p-4 rounded shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Customer Support</h2>
            <button
              onClick={closeChatModal}
              className="text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
          <div className="mt-4 h-3/5">
            <div className="h-4/5 border p-2 overflow-y-auto">
              {chatHistory.map((entry, index) => (
                <div key={index}>
                  <p className="text-end">{entry.message}</p>
                </div>
              ))}
            </div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <button onClick={sendMessage} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatModal;