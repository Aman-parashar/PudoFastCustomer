import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useItemDetailsViewModel, PICKUP_TYPES, ITEM_TYPES } from './ItemDetailsViewModel';
import { Images } from '../../../utils/images';

const ItemDetailsScreen = () => {
  const {
    selectedPickupType,
    setSelectedPickupType,
    selectedItemType,
    setSelectedItemType,
    itemsList,
    addItemField,
    removeItemField,
    updateItemName,
    description,
    setDescription,
    handleNext,
    goBack,
  } = useItemDetailsViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image source={Images.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Item Details</Text>
        <View style={styles.headerSpacer} />
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoid}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Pickup Type */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pickup Type</Text>
            <View style={styles.pickupTypeRow}>
              {PICKUP_TYPES.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.pickupTypeButton,
                    selectedPickupType === type && styles.pickupTypeButtonSelected
                  ]}
                  onPress={() => setSelectedPickupType(type)}
                >
                  <Text style={[
                    styles.pickupTypeText,
                    selectedPickupType === type && styles.pickupTypeTextSelected
                  ]}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Item Type */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Item Type</Text>
            <View style={styles.itemTypeRow}>
              {ITEM_TYPES.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.itemTypeCard,
                    { backgroundColor: item.bgColor },
                    selectedItemType === item.title && { borderColor: item.color }
                  ]}
                  onPress={() => setSelectedItemType(item.title)}
                >
                  <Image source={item.img} style={[styles.itemIcon, { tintColor: item.color }]} />
                  <Text style={[styles.itemTypeText, { color: item.color, fontFamily: selectedItemType === item.title ? FONTS.SANTRAL_BOLD : FONTS.SANTRAL_MEDIUM }]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Add Items List */}
          <View style={styles.section}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Add Items</Text>
              <TouchableOpacity onPress={addItemField}>
                <Text style={styles.addMoreText}>+ Add More Items</Text>
              </TouchableOpacity>
            </View>
            
            {itemsList.map((item, index) => (
              <View key={index} style={styles.itemInputRow}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.itemInput}
                    placeholder="Enter item name"
                    value={item}
                    onChangeText={(text) => updateItemName(text, index)}
                  />
                  <TouchableOpacity onPress={() => removeItemField(index)} style={styles.deleteButton}>
                    <Image source={Images.chatUnSelected} style={styles.deleteIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Add some details about the item..."
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <LinearGradient
              colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.nextText}>NEXT</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ItemDetailsScreen;
