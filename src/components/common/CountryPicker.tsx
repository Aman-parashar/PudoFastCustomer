import { StyleSheet, Text, FlatList, TextInput, Pressable, View } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import BottomSheetModalComponent from './BottomSheetModal'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { getCountryByCode } from '../../hooks/useCountry'
import { FONTS } from '../../utils/fonts'
import { COLORS } from '../../utils/colors'

type Props = {
    showPicker: boolean,
    setShowPicker: React.Dispatch<React.SetStateAction<boolean>>
    onSelectCountry: (country: string) => void
}

const CountryPicker = ({ showPicker, setShowPicker, onSelectCountry }: Props) => {
    const [searchCountry, setSearchCountry] = useState('')
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    useEffect(() => {
        const modalRef = bottomSheetModalRef?.current;
        if (showPicker) {
            modalRef?.present()
        }
        return () => {
            modalRef?.close()
        }
    }, [showPicker])
    return (
        <BottomSheetModalComponent
            bottomSheetModalRef={bottomSheetModalRef}
            snapPointsProp={['70%', '80%', '90%']}
            close={() => {
                setShowPicker(false)
            }}>
            <FlatList
                data={getCountryByCode(searchCountry)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ListEmptyComponent={<View style={styles.emptyContainer}><Text>No Country Found</Text></View>}
                ListHeaderComponent={<TextInput
                    placeholder='Search Country'
                    value={searchCountry}
                    onChangeText={(text) => setSearchCountry(text)}
                    style={styles.searchField}
                />}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.countryItem}
                        onPress={() => {
                            onSelectCountry(item?.phonecode)
                            bottomSheetModalRef?.current?.close()
                        }}>
                        <Text>{item?.flag}</Text>
                        <Text>{item?.phonecode}</Text>
                    </Pressable>
                )}
            />
        </BottomSheetModalComponent>
    )
}

export default CountryPicker

const styles = StyleSheet.create({
    contentContainer: {
        padding: 16,
        flexGrow: 1
    },
    searchField: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc' // Added default border color for better visibility
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
        height: 40,
    },
    emptyContainer: {
        flex: 1,
        marginTop: 100,

        alignItems: 'center'
    },
    emptyText: {
        color: COLORS.GRAY_TEXT,
        fontFamily: FONTS.SANTRAL_MEDIUM,
    }
})