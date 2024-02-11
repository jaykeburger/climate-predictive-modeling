import React, { useState, useEffect, useRef } from 'react';
import scss from '../styles/chat.scss';

const Chatbox = ({ msg, isOutgoing, timestamp }) => {
	const bubbleClass = isOutgoing ? 'chatbox-outgoing' : 'chatbox-incoming';
	return (
		<div className={`chatbox ${bubbleClass}`}>
			{!isOutgoing && 'You'}
			<div className="message">
				<div className="text">{msg}</div>
				<div className="time">{timestamp}</div>
			</div>
		</div>
	);
};

const Chat = () => {
	const [conn, setConn] = useState(null);
	const [log, setLog] = useState([]);
	const msgRef = useRef(null);
	const userId = useRef(Math.random().toString(36).substring(7));
	const chatPanelRef = useRef(null);

	const scrollToBottom = () => {
		chatPanelRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
		});
	};

	const appendLog = item => {
		setLog(prevLog => [...prevLog, item]);
	};

	//   useEffect(() => {
	//     const socket = new WebSocket("ws://localhost:8000/chat");

	//  socket.onopen = () => {
	//    appendLog({ type: 'status', message: 'You have connected to the chat.' });
	//  };

	//  socket.onclose = () => {
	//    appendLog({ type: 'status', message: 'A user disconnected from the chat.' });
	//  };

	//     socket.onmessage = (evt) => {
	//       const message = JSON.parse(evt.data);
	//       const isOutgoing = message.sender === userId.current;
	//       appendLog({ type: 'message', message: message.message, isOutgoing, timestamp: new Date().toLocaleTimeString() });
	//     };

	//     setConn(socket);

	//     return () => {
	//       socket.close();
	//     };
	//   }, []);

	useEffect(scrollToBottom, [log]);

	const handleSubmit = event => {
		event.preventDefault();

		if (msgRef.current.value) {
			const message = msgRef.current.value;
			const messageObj = { sender: userId.current, message };
			appendLog({
				type: 'message',
				message: message,
				timestamp: new Date().toLocaleTimeString(),
			});
			console.log(message);
		}
		msgRef.current.value = '';
	};

	return (
		<div className="chat">
			<div className="chat-panel">
				{log.map((item, index) => (
					<Chatbox
						key={index}
						msg={item.message}
						isOutgoing={item.isOutgoing}
						timestamp={item.timestamp}
					/>
				))}
				<div ref={chatPanelRef} />
			</div>
			<form onSubmit={handleSubmit} className="input-form">
				<input
					type="text"
					ref={msgRef}
					className="form-control"
					placeholder="Write your message..."
					aria-label="Write your message"
					autoFocus
				/>
				<button type="submit" className="btn btn-primary">
					Send
				</button>
			</form>
		</div>
	);
};

export default Chat;
