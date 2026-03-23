import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  KeyboardType,
  Image,
  Pressable,
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageSourcePropType,
  Dimensions,
  Platform
} from 'react-native';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Controller, useFormState } from 'react-hook-form';

import { FONTS } from '../../utils/fonts';
import { COLORS } from '../../utils/colors';
import { Images } from '../../utils/images';

interface inputProps {
  inputlabel: string;
  name: string;
  control: any;
  multiline?: boolean;
  isMandatory?: boolean;
  label?: string;
  rules?: any;
  customStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  onAddInfoPress?: () => void;
  addInfo?: boolean;
  editable?: boolean;
  defaultValue?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  isRightImage?: boolean;
  onRightImagePress?: () => void;
  rightImage?: ImageSourcePropType;
  rightImageStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
  isMobileNumber?: boolean;
  onPressCountryCode?: () => void;
  countryCode?: string;
  formatText?: (text: string) => string;
  maxLength?: number;
  labelStyle?: StyleProp<TextStyle>;
  isLeftImage?: boolean;
  leftImage?: ImageSourcePropType;

}

export const CommonInput = React.forwardRef<TextInput, inputProps>(
  (
    {
      multiline = false,
      label = '',
      inputlabel = '',
      name,
      control,
      rules,
      customStyle,
      keyboardType = 'default',
      secureTextEntry = false,
      isMandatory = false,
      editable = true,
      isRightImage = false,
      rightImage,
      leftImage,
      containerStyle,
      textInputStyle,
      addInfo = false,
      onRightImagePress,
      isLeftImage = false,
      rightImageStyle,
      onFocus,
      onBlur,
      isMobileNumber = false,
      onPressCountryCode,
      countryCode = '🇦🇺 +61',
      formatText,
      maxLength = undefined,
      labelStyle,
    },
    ref,
  ) => {
    const { errors }: any = useFormState({ control });
    const [secureEntry, setSecureEntry] = useState<boolean>(secureTextEntry);
    const inputRef = useRef<TextInput | null>(null);
    const [showInfo, setShowInfo] = useState(false);

    useImperativeHandle(ref, () => inputRef.current!);

    useEffect(() => {
      const keyboardHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          inputRef.current?.blur();
          setShowInfo(false);
        },
      );

      const touchListener = Keyboard.addListener('keyboardDidShow', () => {
        setShowInfo(false);
      });

      return () => {
        keyboardHideListener.remove();
        touchListener.remove();
      };
    }, []);

    const handlePressOutside = () => {
      setShowInfo(false);
      Keyboard.dismiss();
    };

    return (
      <Pressable
        style={[styles.inputContainer, containerStyle]}
        onPress={handlePressOutside}>
        {label !== '' && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.labelTextStyle, labelStyle]}>
              {`${label}${isMandatory ? '*' : ''}`}
            </Text>

          </View>
        )}

        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field }: any) => {
            const inputContent = (
              <View
                style={[

                  styles.commonContainerStyle,
                  !editable && { backgroundColor: COLORS.TRIBE_BACKGROUND },
                  secureTextEntry && styles.passwordInputStyle,
                  customStyle,

                ]}>

                {isLeftImage && <Image
                  source={leftImage}
                  style={styles.leftImageStyle}
                  resizeMode='center'
                />}
                {isMobileNumber && <Pressable onPress={onPressCountryCode}>
                  <Text >{countryCode}</Text>
                </Pressable>}
                <TextInput
                  ref={inputRef}
                  allowFontScaling={false}
                  placeholder={`${inputlabel}`}
                  placeholderTextColor={COLORS.PLACEHOLDER_TEXTCOLOR}
                  maxLength={maxLength}
                  onChangeText={text =>
                    field.onChange(formatText ? formatText(text) : text)
                  }
                  multiline={multiline}
                  secureTextEntry={secureEntry}
                  value={field.value}
                  keyboardType={keyboardType}
                  style={[
                    styles.font,
                    textInputStyle,
                    secureTextEntry && { width: '90%' },
                  ]}
                  editable={editable}
                  onFocus={() => {
                    setShowInfo(false);
                    onFocus?.();
                  }}
                  onBlur={() => {
                    onBlur?.();
                  }}
                  pointerEvents={
                    isRightImage && !secureTextEntry ? 'none' : 'auto'
                  }
                />
                {isRightImage && !secureTextEntry && (
                  <Image
                    source={rightImage ? rightImage : Images.calendar}
                    style={{
                      height: 24,
                      width: 24,
                      position: 'absolute',
                      right: 10,
                    }}
                  />
                )}
                {secureTextEntry && isRightImage && (
                  <Pressable
                    style={[styles.rightImageStyle, rightImageStyle]}
                    onPress={() => setSecureEntry(!secureEntry)}>
                    <Image
                      source={secureEntry ? Images.eye : Images.eyeOff}
                      style={styles.leftImageStyle}
                      resizeMode='center'
                    />
                  </Pressable>
                )}
              </View>
            );

            return (
              <View>
                {isRightImage && !secureTextEntry ? (
                  <Pressable onPress={onRightImagePress}>
                    {inputContent}
                  </Pressable>
                ) : (
                  inputContent
                )}
                {errors &&
                  errors[name]?.message !== '' &&
                  errors[name]?.message !== undefined && (
                    <View style={{ justifyContent: 'flex-end', position: 'absolute', bottom: -20 }}>
                      <Text
                        style={{
                          color: COLORS.PRIMARY_RED,
                          fontSize: 14,

                          fontFamily: FONTS.SANTRAL_MEDIUM,
                          textAlign: 'left',
                          width: '100%',




                        }}>
                        {errors[name]?.message}
                      </Text>
                    </View>
                  )}
              </View>
            );
          }}
        />
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    marginBottom: 15,
    gap: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,

    paddingHorizontal: 2
  },
  leftImageStyle: {
    height: 24,
    width: 24,
  },
  labelTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  commonContainerStyle: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    gap: 5,
    borderColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
    height: 57,
    overflow: 'visible',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  font: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.PRIMARY_BLACK,
    textAlignVertical: 'center',

    flex: 1
  },
  passwordInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightImageStyle: { position: 'absolute', right: 10 },
  addInfoImage: {
    height: 16,
    width: 16,
    marginLeft: 5,
  },
  messageInfoImage: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.5,
  },
});

export const CheckBoxInput = ({
  isSelected,
  setIsSelected,
}: {
  isSelected: boolean;
  setIsSelected: (value: boolean) => any;
}) => {
  return (
    <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
      {/* {isSelected ? <CheckedIcon /> : <UncheckedIcon />} */}
    </TouchableOpacity>
  );
};
