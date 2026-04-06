import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useChatViewModel, Message } from './ChatViewModel';
import { Images } from '../../../utils/images';
import styles from './styles';
import Container from '../../../components/common/Container';

const ChatScreen = () => {
  const { inputText, groupedMessages, setInputText, handleSend, handleBack } =
    useChatViewModel();

  const renderMessage = (item: Message) => {
    const isCustomer = item.sender === 'customer';

    return (
      <View
        key={item.id}
        style={[
          styles.messageRow,
          isCustomer ? styles.customerRow : styles.driverRow,
        ]}
      >
        {!isCustomer && (
          <Image source={item.avatar || Images.driver} style={styles.avatar} />
        )}
        <View
          style={[
            styles.bubbleContainer,
            isCustomer ? styles.customerContainer : styles.driverContainer,
          ]}
        >
          <View
            style={[
              styles.bubble,
              isCustomer ? styles.customerBubble : styles.driverBubble,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                isCustomer ? styles.customerText : styles.driverText,
              ]}
            >
              {item.text}
            </Text>
            <Text
              style={[
                styles.timeText,
                isCustomer ? styles.customerTime : styles.driverTime,
              ]}
            >
              {item.time}
            </Text>
          </View>
        </View>
        {isCustomer && (
          <Image
            source={item.avatar || Images.userPlaceholder}
            style={styles.avatar}
          />
        )}
      </View>
    );
  };

  const renderDateSection = (date: string, messages: Message[]) => (
    <View key={date} style={styles.sectionContainer}>
      <Text style={styles.dateHeader}>{date}</Text>
      {messages.map(item => renderMessage(item))}
    </View>
  );

  return (
    <Container container={{ alignItems: 'stretch' }}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.headerAction}>
          <Image source={Images.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Driver</Text>
        <View style={styles.headerAction} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {Object.keys(groupedMessages).map(date =>
            renderDateSection(date, groupedMessages[date]),
          )}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.emojiBtn}>
            <Image
              source={Images.star} // Using star as placeholder for emoji if not available
              style={styles.emojiIcon}
            />
          </TouchableOpacity>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Type your message"
              placeholderTextColor="#CCCCCC"
              value={inputText}
              onChangeText={setInputText}
            />
          </View>
          <TouchableOpacity onPress={handleSend} style={styles.sendBtn}>
            <Image
              source={Images.arrowRight} // Using arrowRight as placeholder for send
              style={[styles.sendIcon, { tintColor: '#68136F' }]}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default ChatScreen;
