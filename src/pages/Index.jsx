import { useState } from "react";
import { Box, Container, VStack, HStack, Input, Button, Text, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const messagesData = [
  { id: 1, user: "Alice", text: "Hello!", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGF2YXRhcnxlbnwwfHx8fDE3MTgwNjYyMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, user: "Bob", text: "Hi there!", avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBhdmF0YXJ8ZW58MHx8fHwxNzE4MDY2MjM1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [messages, setMessages] = useState(messagesData);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      user: "You",
      text: inputValue,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3VyJTIwYXZhdGFyfGVufDB8fHx8MTcxODA2NjIzNnww&ixlib=rb-4.0.3&q=80&w=1080",
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="70vh" overflowY="auto" border="1px solid #ccc" borderRadius="md" p={4}>
          {messages.map((message) => (
            <HStack key={message.id} spacing={4} alignItems="flex-start" mb={4}>
              <Avatar src={message.avatar} />
              <VStack alignItems="flex-start">
                <Text fontWeight="bold">{message.user}</Text>
                <Text>{message.text}</Text>
              </VStack>
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
