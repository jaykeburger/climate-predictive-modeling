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
	const [message, setMessage] = useState('');
	const [response, setResponse] = useState('');

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

	const handleSubmit = async event => {
		event.preventDefault();
		console.log('hit');

		if (msgRef.current.value) {
			const mess = msgRef.current.value;
			const messageObj = { sender: userId.current, message };
			appendLog({
				type: 'message',
				message: mess,
				isOutgoing: true,
				timestamp: new Date().toLocaleTimeString(),
			});

			await fetch('http://localhost:5001', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ mess }),
			})
				.then(res => res.json())
				.then(data => {
					appendLog({
						type: 'message',
						message: data.message,
						isOutgoing: false,
						timestamp: new Date().toLocaleTimeString(),
					});
					setResponse(data.message)
				});

		
			msgRef.current.value = '';
		}
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
