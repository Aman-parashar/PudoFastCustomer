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

      containerStyle,
      textInputStyle,
      addInfo = false,
      onRightImagePress,

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
                {isMobileNumber && (
                  <Pressable
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: COLORS.TRIBE_BACKGROUND,
                      borderRadius: 12,
                      paddingHorizontal: 20,
                      paddingVertical: 5,
                      height: 55,
                    }}
                    onPress={onPressCountryCode}>
                    <Text style={styles.labelTextStyle}>{countryCode}</Text>
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
                {/* {isRightImage && !secureTextEntry && (
                  <Image
                    source={rightImage ? rightImage : Images.calendar}
                    style={{
                      height: 24,
                      width: 24,
                      position: 'absolute',
                      right: 10,
                    }}
                  />
                )} */}
                {/* {secureTextEntry && isRightImage && (
                  <Pressable
                    style={[styles.rightImageStyle, rightImageStyle]}
                    onPress={() => setSecureEntry(!secureEntry)}>
                    <Image
                      source={secureEntry ? Images.eye : Images.eyeOff}
                      style={{ height: 24, width: 24 }}
                    />
                  </Pressable>
                )} */}
              </View>
            );

            return (
              <>
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
                    <Text
                      style={{
                        color: COLORS.PRIMARY_RED,
                        fontSize: 14,
                        marginTop: -4,
                      }}>
                      {errors[name]?.message}
                    </Text>
                  )}
              </>
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
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    height: 57,
    zIndex: -1,
    borderColor: COLORS.BORDER_COLOR,
    borderWidth: 1,
  },
  font: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.PRIMARY_BLACK,
    textAlignVertical: 'center',
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
