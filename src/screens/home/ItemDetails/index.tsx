import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  useItemDetailsViewModel,
  ITEM_TYPES,
  PickupType,
} from './ItemDetailsViewModel';
import { Images } from '../../../utils/images';
import Stepper from '../../../components/common/Stepper';
import { CommonInput } from '../../../components/common/CommonInput';
import CustomButton from '../../../components/common/CustomButton';
import { deliverySteps } from '../../../utils/enum';
import Header from '../../../components/common/Header';
import CommonToggle from '../../../components/common/CommonToggle';
import { PickUpType } from '../../../utils/data';

const ItemDetailsScreen = () => {
  const {
    control,
    handleSubmit,
    fields,
    addItemField,
    removeItemField,
    selectedPickupType,
    setSelectedPickupType,
    selectedItemType,
    setSelectedItemType,
    handleNext,
    goBack,
  } = useItemDetailsViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header type="step" title="Item Details" onBack={goBack} />
      </View>

      <Stepper currentStep={deliverySteps.ItemDetails} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Description */}
          <View style={styles.descriptionContainer}>
            <CommonInput
              control={control}
              name="description"
              inputlabel="Description"
              isLeftImage
              leftImage={Images.descriptionBlue}
              multiline
              customStyle={{
                height: 100,
                alignItems: 'flex-start',
                paddingTop: 10,
              }}
            />
          </View>

          {/* Pickup Type */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pick up type</Text>
            <CommonToggle
              options={PickUpType}
              activeValue={selectedPickupType}
              onSelect={setSelectedPickupType}
              activeColor="#4CAF50"
            />
          </View>

          {/* Item Type */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Item Type</Text>
            <View style={styles.itemTypeRow}>
              {ITEM_TYPES.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.itemTypeCard,
                    { backgroundColor: item.bgColor },
                    selectedItemType === item.title && {
                      borderColor: item.color,
                    },
                  ]}
                  onPress={() => setSelectedItemType(item.title)}
                >
                  <Image
                    source={item.img}
                    style={[styles.itemIcon, { tintColor: item.color }]}
                  />
                  <Text
                    style={[
                      styles.itemTypeText,
                      {
                        color: item.color,
                        fontFamily:
                          selectedItemType === item.title
                            ? FONTS.SANTRAL_BOLD
                            : FONTS.SANTRAL_MEDIUM,
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Add Items List */}
          <View style={styles.section}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Add items</Text>
              <TouchableOpacity onPress={addItemField}>
                <Text style={styles.addMoreText}>+ Add more items</Text>
              </TouchableOpacity>
            </View>

            {fields.map((field, index) => (
              <View key={field.id} style={styles.itemInputRow}>
                <View style={styles.inputWrapper}>
                  <Image source={Images.box} style={styles.basketIcon} />
                  <CommonInput
                    control={control}
                    name={`items.${index}.name`}
                    inputlabel={index === 0 ? 'Certificates' : 'Item Name'}
                    containerStyle={{
                      marginVertical: 0,
                      flex: 1,
                      backgroundColor: 'transparent',
                    }}
                    customStyle={{
                      borderWidth: 0,
                      elevation: 0,
                      shadowOpacity: 0,
                      height: 48,
                      backgroundColor: 'transparent',
                    }}
                  />
                  {fields.length > 1 && (
                    <TouchableOpacity
                      onPress={() => removeItemField(index)}
                      style={styles.deleteButton}
                    >
                      <Image
                        source={Images.chatUnSelected}
                        style={styles.deleteIcon}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>

          <CustomButton
            title="NEXT"
            onPress={handleSubmit(handleNext)}
            style={styles.nextButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ItemDetailsScreen;
