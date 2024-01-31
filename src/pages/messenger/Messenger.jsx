import "./Messenger.css";
import Topbar from "../../components/topbar/Topbar";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import {
    ChatContainer,
    ConversationHeader,
    ConversationList,
    MainContainer,
    MessageInput,
    Sidebar,
    MessageList,
    Message,
    Conversation,
    VoiceCallButton,
    VideoCallButton,
    EllipsisButton,
    TypingIndicator,
    MessageSeparator, Avatar, Search
} from "@chatscope/chat-ui-kit-react";
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState("");
  const [newReceiver, setNewReceiver] = useState("");
  const { user } = useContext(Context);
  const [messageInputValue, setMessageInputValue] = useState("");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;



  return (
    <>
      <Topbar />
        <div style={{
            height: "calc(100vh - 50px)",
            position: "relative"
        }}>
            <MainContainer responsive>
                <Sidebar position="left" scrollable={false}>
                    <Search placeholder="Search..." />
                    <ConversationList>
                        <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
                            <Avatar src={ PF + "person/noAvatar.png"} name="Lilly" status="available" />
                        </Conversation>

                        <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
                            <Avatar src={ PF + "person/noAvatar.png"} name="Joe" status="dnd" />
                        </Conversation>

                        <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you" unreadCnt={3}>
                            <Avatar src={ PF + "person/noAvatar.png"} name="Emily" status="available" />
                        </Conversation>

                        <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you" unreadDot>
                            <Avatar src={ PF + "person/noAvatar.png"} name="Kai" status="unavailable" />
                        </Conversation>

                        <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
                            <Avatar src={ PF + "person/noAvatar.png"} name="Akane" status="eager" />
                        </Conversation>

                        <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
                            <Avatar src={ PF + "person/noAvatar.png"} name="Eliot" status="away" />
                        </Conversation>

                        <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
                            <Avatar src={ PF + "person/noAvatar.png"} name="Zoe" status="dnd" />
                        </Conversation>

                        <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
                            <Avatar src={ PF + "person/noAvatar.png"} name="Patrik" status="invisible" />
                        </Conversation>
                    </ConversationList>
                </Sidebar>

                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Back />
                        <Avatar src={ PF + "person/noAvatar.png"} name="Zoe" />
                        <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
                        <ConversationHeader.Actions>
                            <VoiceCallButton />
                            <VideoCallButton />
                            <EllipsisButton orientation="vertical" />
                        </ConversationHeader.Actions>
                    </ConversationHeader>
                    <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
                        <MessageSeparator content="Saturday, 30 November 2023" />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "single"
                        }}>
                            <Avatar src={ PF + "person/noAvatar.png"} name="Zoe" />
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "single"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={ PF + "person/noAvatar.png"} name="Zoe" />
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "first"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "last"
                        }} />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={ PF + "person/noAvatar.png"} name="Zoe" />
                        </Message>
                    </MessageList>
                    <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} />
                </ChatContainer>
            </MainContainer>
        </div>
    </>
  );
}