import {
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  Pressable,
  View,
  Platform,
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import BottomSheetModalComponent from './BottomSheetModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { getCountryByCode } from '../../hooks/useCountry';
import { FONTS } from '../../utils/fonts';
import { COLORS } from '../../utils/colors';

type Props = {
  showPicker: boolean;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
  onSelectCountry: (country: string) => void;
};

const CountryPicker = ({
  showPicker,
  setShowPicker,
  onSelectCountry,
}: Props) => {
  const [searchCountry, setSearchCountry] = useState('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    const modalRef = bottomSheetModalRef?.current;
    if (showPicker) {
      modalRef?.present();
    }
    return () => {
      modalRef?.close();
    };
  }, [showPicker]);
  return (
    <BottomSheetModalComponent
      bottomSheetModalRef={bottomSheetModalRef}
      snapPointsProp={['70%', '80%', '90%']}
      close={() => {
        setShowPicker(false);
      }}
    >
      <FlatList
        data={getCountryByCode(searchCountry)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text>No Country Found</Text>
          </View>
        }
        ListHeaderComponent={
          <TextInput
            placeholder="Search Country"
            value={searchCountry}
            onChangeText={text => setSearchCountry(text)}
            style={styles.searchField}
          />
        }
        renderItem={({ item }) => (
          <Pressable
            style={styles.countryItem}
            onPress={() => {
              onSelectCountry(item?.phonecode);
              bottomSheetModalRef?.current?.close();
            }}
          >
            <Text style={styles.flagText}>{item?.flag || '🚩'}</Text>
            <Text style={styles.countryName}>{item?.name}</Text>
            <Text style={styles.phoneCode}>{item?.phonecode}</Text>
          </Pressable>
        )}
      />
    </BottomSheetModalComponent>
  );
};

export default CountryPicker;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    flexGrow: 1,
  },
  searchField: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Added default border color for better visibility
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  flagText: {
    fontSize: 24,
    fontFamily: Platform.select({ ios: 'System', android: 'serif' }),
    color: COLORS.BLACK,
    marginRight: 4,
  },
  countryName: {
    flex: 1,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  phoneCode: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.GRAY_TEXT,
  },
  emptyContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  emptyText: {
    color: COLORS.GRAY_TEXT,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
});
