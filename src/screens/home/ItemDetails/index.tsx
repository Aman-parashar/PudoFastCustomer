import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Modal,
} from 'react-native';
import { FONTS } from '../../../utils/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  useItemDetailsViewModel,
  ITEM_TYPES,

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
    serviceData
  } = useItemDetailsViewModel();
  const [visible, setVisible] = React.useState(false);
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<{ id: number, name: string }>();
  useEffect(() => {
    setSelectedService(serviceData?.[0])

  }, [])

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
                height: 150,
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
              {ITEM_TYPES.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.itemTypeCard,
                    { backgroundColor: item.bgColor },
                    selectedItemType === item.title && {
                      borderColor: item.color,
                    },
                  ]}
                  onPress={() => {
                    setSelectedItemType(item.title);
                    if (item.id === '3') {
                      setVisible(true);
                    }
                  }}
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

            </View>

            {fields.map((field, index) => (
              <View key={field.id} style={styles.itemInputRow}>
                <View style={styles.inputWrapper}>
                  <Image source={Images.box} style={styles.basketIcon} />
                  <CommonInput
                    control={control}
                    name={`items.${index}.name`}
                    inputlabel={'Item Name'}
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
                  {(
                    <TouchableOpacity
                      onPress={() => removeItemField(index)}
                      style={styles.deleteButton}
                    >
                      <Image
                        source={Images.delete}
                        style={styles.deleteIcon}
                      />
                    </TouchableOpacity>
                  )}
                </View>

              </View>
            ))}
            <Pressable onPress={addItemField} hitSlop={10} style={{ alignItems: 'flex-end', padding: 5, marginTop: 5 }}>
              <Text style={styles.addMoreText}>+ Add more items</Text>
            </Pressable>
            <View style={styles.centerView}>
              <Modal
                visible={visible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => { setVisible(false), setPickerVisible(false) }}
              >
                <View style={styles.centerView}>
                  <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                      <Text style={styles.modalTitle}>Service Select</Text>
                    </View>
                    <View style={styles.modalBody}>
                      <Text style={styles.modalLabel}>Service</Text>
                      <Pressable
                        style={styles.serviceButton}
                        onPress={() => setPickerVisible(true)}
                      >
                        <Text style={[
                          styles.serviceButtonText,
                          selectedService?.name !== '' && styles.serviceSelectedText
                        ]}>
                          {selectedService?.name || 'Select service'}
                        </Text>
                        <Image
                          source={Images.arrowRight}
                          style={styles.dropdownArrow}
                        />
                      </Pressable>
                      {pickerVisible && serviceData?.map((item) => (
                        <Pressable
                          key={item?.id}
                          style={[
                            styles.pickerItem,
                            selectedService === item && styles.pickerItemSelected
                          ]}
                          onPress={() => {
                            setSelectedService(item);
                            setPickerVisible(false);
                          }}
                        >
                          <Text style={[
                            styles.pickerItemText,
                            selectedService?.id === item.id && styles.pickerItemSelectedText
                          ]}>
                            {item.name}
                          </Text>
                        </Pressable>
                      ))}
                      <View style={styles.modalFooter}>
                        <Pressable
                          style={styles.noButton}
                          onPress={() => { setVisible(false), setPickerVisible(false) }}
                        >
                          <Text style={styles.noButtonText}>NO</Text>
                        </Pressable>
                        <Pressable
                          style={styles.yesButton}
                          onPress={() => {
                            setVisible(false);
                            /* TODO: Set selected service name to form */
                          }}
                        >
                          <Text style={styles.yesButtonText}>YES</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>

            </View>
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
