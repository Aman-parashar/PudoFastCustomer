import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import BottomSheetModalComponent from '../../common/BottomSheetModal';
import { COLORS } from '../../../utils/colors';
import KeyboardContainer from '../../layout/KeyboardContainer';
import { Images } from '../../../utils/images';

interface AddressBottomSheetProps {
  bottomSheetModalRef: React.RefObject<any>;
  onSave?: (address: any) => void;
  onCancel?: () => void;
  onChooseFromMap?: () => void;
}

const AddressBottomSheet: React.FC<AddressBottomSheetProps> = ({
  bottomSheetModalRef,
  onSave,
  onCancel,
  onChooseFromMap,
}) => {
  const [address, setAddress] = React.useState('');

  const handleSave = React.useCallback(() => {
    onSave?.(address);
    bottomSheetModalRef.current?.dismiss();
  }, [address, onSave, bottomSheetModalRef]);

  const handleCancel = React.useCallback(() => {
    onCancel?.();
    bottomSheetModalRef.current?.dismiss();
  }, [onCancel, bottomSheetModalRef]);

  const handleChooseFromMap = React.useCallback(() => {
    onChooseFromMap?.();
    bottomSheetModalRef.current?.dismiss();
  }, [onChooseFromMap, bottomSheetModalRef]);

  return (
    <BottomSheetModalComponent
      bottomSheetModalRef={bottomSheetModalRef}
      snapPointsProp={['60%', '90%']}
      height="60%"
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
    >
      <KeyboardContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Enter Complete Address</Text>
          </View>

          <TouchableOpacity
            style={styles.mapButton}
            onPress={handleChooseFromMap}
          >
            <Image source={Images.mapPinRed} style={styles.mapIcon} />
            <Text style={styles.mapButtonText}>Choose address from map</Text>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              placeholderTextColor={COLORS.PLACEHOLDER_TEXTCOLOR}
              value={address}
              onChangeText={setAddress}
              multiline
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>SAVE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </KeyboardContainer>
    </BottomSheetModalComponent>
  );
};

export default AddressBottomSheet;
