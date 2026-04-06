import { Images } from '../../../utils/images';
import NavigationService from '../../../navigation/NavigationService';
import { useState } from 'react';

export interface Message {
    id: string;
    text: string;
    sender: 'driver' | 'customer';
    time: string;
    date: string;
    avatar?: any;
}

const initialMessages: Message[] = [
    {
        id: '1',
        text: 'Hey! I am on the way to pick up your order.',
        sender: 'driver',
        time: '02:54 Am',
        date: 'Today',
        avatar: Images.driver,
    },
    {
        id: '2',
        text: 'Great, thanks! Please be careful.',
        sender: 'customer',
        time: '02:55 Am',
        date: 'Today',
        avatar: Images.userPlaceholder,
    },
];

export const useChatViewModel = () => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (inputText.trim()) {
            const newMessage: Message = {
                id: Date.now().toString(),
                text: inputText.trim(),
                sender: 'customer',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                date: 'Today',
                avatar: Images.userPlaceholder,
            };
            setMessages([...messages, newMessage]);
            setInputText('');
        }
    };

    const handleBack = () => {
        NavigationService.goBack();
    };

    const groupedMessages = messages.reduce((groups: { [key: string]: Message[] }, message) => {
        const date = message.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(message);
        return groups;
    }, {});

    return {
        messages,
        inputText,
        groupedMessages,
        setInputText,
        handleSend,
        handleBack,
    };
};
