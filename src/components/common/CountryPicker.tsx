import { StyleSheet, Text, FlatList, TextInput, Pressable, View, ActivityIndicator, Image } from 'react-native'
import React, { useRef, useState, useEffect, useMemo } from 'react'
import BottomSheetModalComponent from './BottomSheetModal'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useQuery } from '@tanstack/react-query'
import { AuthService } from '../../services/AuthService'
import { Country } from '../../types/api'
import { FONTS } from '../../utils/fonts'
import { COLORS } from '../../utils/colors'

type Props = {
    showPicker: boolean,
    setShowPicker: React.Dispatch<React.SetStateAction<boolean>>
    onSelectCountry: (country: Country) => void
}

const CountryPicker = ({ showPicker, setShowPicker, onSelectCountry }: Props) => {
    const [searchCountry, setSearchCountry] = useState('')
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const { data: countries, isLoading } = useQuery({
        queryKey: ['countries'],
        queryFn: AuthService.getCountries,
        select: (response) => response.data,
    });

    const filteredCountries = useMemo(() => {
        if (!countries) return [];
        if (!searchCountry.trim()) return countries;
        return countries.filter(c =>
            c.country.toLowerCase().includes(searchCountry.toLowerCase()) ||
            c.country_code.includes(searchCountry)
        );
    }, [countries, searchCountry]);

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
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.BUTTON_GRADIENT_PURPLE_START} />
                </View>
            ) : (
                <FlatList
                    data={filteredCountries}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    ListEmptyComponent={<View style={styles.emptyContainer}><Text>No Country Found</Text></View>}
                    ListHeaderComponent={<TextInput
                        placeholder='Search Country'
                        value={searchCountry}
                        onChangeText={(text) => setSearchCountry(text)}
                        style={styles.searchField}
                        placeholderTextColor={COLORS.GRAY_TEXT}
                    />}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.countryItem}
                            onPress={() => {
                                onSelectCountry(item)
                                bottomSheetModalRef?.current?.close()
                                setShowPicker(false)
                            }}>
                            <Image 
                                source={{ uri: item?.flag }} 
                                style={styles.flagImage}
                                resizeMode="contain"
                            />
                            <Text style={styles.countryNameText}>{item?.country}</Text>
                            <Text style={styles.codeText}>{item?.country_code}</Text>
                        </Pressable>
                    )}
                />
            )}
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
        borderColor: '#ccc',
        color: COLORS.BLACK,
        marginBottom: 10
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GRAY,
    },
    flagImage: {
        width: 30,
        height: 20,
        borderRadius: 2,
    },
    countryNameText: {
        flex: 1,
        fontSize: 16,
        fontFamily: FONTS.SANTRAL_BOOK,
        color: COLORS.BLACK,
    },
    codeText: {
        fontSize: 16,
        fontFamily: FONTS.SANTRAL_MEDIUM,
        color: COLORS.GRAY_TEXT,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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