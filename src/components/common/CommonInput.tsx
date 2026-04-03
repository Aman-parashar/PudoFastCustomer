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
  Platform,
} from 'react-native';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Controller, useFormState } from 'react-hook-form';

import { FONTS } from '../../utils/fonts';
import { COLORS } from '../../utils/colors';
import { Images } from '../../utils/images';
import { dimensions } from '../../utils/constant';

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
  errorStyle?: StyleProp<TextStyle>;
  isLeftImage?: boolean;
  leftImage?: ImageSourcePropType;
  flag?: string;
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
      onRightImagePress,
      isLeftImage = false,
      rightImageStyle,
      onFocus,
      onBlur,
      isMobileNumber = false,
      onPressCountryCode,
      countryCode = ' +1',
      formatText,
      maxLength = undefined,
      errorStyle,
      labelStyle,
      flag = 'https://pudo-app.s3.amazonaws.com/flag/united-states.png',
    },
    ref,
  ) => {
    const { errors }: any = useFormState({ control });
    const [secureEntry, setSecureEntry] = useState<boolean>(secureTextEntry);
    const inputRef = useRef<TextInput | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    useImperativeHandle(ref, () => inputRef.current!);

    useEffect(() => {
      const keyboardHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          inputRef.current?.blur();
        },
      );

      const touchListener = Keyboard.addListener('keyboardDidShow', () => {});

      return () => {
        keyboardHideListener.remove();
        touchListener.remove();
      };
    }, []);

    const handlePressOutside = () => {
      setIsFocused(false);
      Keyboard.dismiss();
    };

    return (
      <Pressable
        style={[styles.inputContainer, containerStyle]}
        onPress={handlePressOutside}
      >
        {label !== '' && (
          <View style={styles.labelContainer}>
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
                  isFocused && styles.focusedBorder,
                  customStyle,
                ]}
              >
                {isLeftImage && (
                  <Image
                    source={leftImage}
                    style={styles.leftImageStyle}
                    resizeMode="contain"
                  />
                )}
                {isMobileNumber && (
                  <Pressable
                    onPress={onPressCountryCode}
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      alignItems: 'center',
                    }}
                    hitSlop={15}
                  >
                    {flag && (
                      <Image
                        source={{ uri: flag }}
                        style={styles.flagStyle}
                        resizeMode="contain"
                      />
                    )}
                    <Text>{countryCode}</Text>
                    <Image
                      source={Images.arrowRight}
                      style={{
                        width: 10,
                        height: 10,
                        transform: [{ rotate: '90deg' }],
                      }}
                      resizeMode="contain"
                      tintColor={COLORS.BLACK}
                    />
                  </Pressable>
                )}
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
                    secureTextEntry && styles.passwordWidth,
                  ]}
                  editable={editable}
                  onFocus={() => {
                    setIsFocused(true);

                    onFocus?.();
                  }}
                  onBlur={() => {
                    setIsFocused(false);
                    onBlur?.();
                  }}
                  pointerEvents={
                    isRightImage && !secureTextEntry ? 'none' : 'auto'
                  }
                />
                {isRightImage && !secureTextEntry && (
                  <Image
                    source={rightImage ? rightImage : Images.calender}
                    style={styles.rightCalendarIcon}
                  />
                )}
                {secureTextEntry && isRightImage && (
                  <Pressable
                    style={[styles.rightImageStyle, rightImageStyle]}
                    onPress={() => setSecureEntry(!secureEntry)}
                  >
                    <Image
                      source={secureEntry ? Images.eye : Images.eyeOff}
                      style={styles.leftImageStyle}
                      resizeMode="contain"
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
                    <View style={[styles.errorContainer, errorStyle]}>
                      <Text style={styles.errorText}>
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
    marginVertical: 10,
    gap: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,

    paddingHorizontal: 2,
  },
  leftImageStyle: {
    height: dimensions.width * 0.05,
    width: dimensions.width * 0.05,
    resizeMode: 'contain',
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
    height: dimensions.width * 0.14,
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

    height: '100%',
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.PRIMARY_BLACK,
    textAlignVertical: 'center',

    flex: 1,
  },
  passwordInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightImageStyle: { position: 'absolute', right: 10 },
  passwordWidth: { width: '90%' },
  rightCalendarIcon: {
    height: 24,
    width: 24,
    position: 'absolute',
    right: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  focusedBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorContainer: {
    justifyContent: 'flex-end',

    marginTop: 8,
  },
  errorText: {
    color: COLORS.PRIMARY_RED,
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    textAlign: 'left',
  },
  flagStyle: {
    width: 24,
    height: 16,
    borderRadius: 2,
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
