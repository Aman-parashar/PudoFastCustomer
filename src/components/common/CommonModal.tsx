import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { COLORS } from '../../utils/colors';
import { FONTS } from '../../utils/fonts';

const { width } = Dimensions.get('window');

interface CommonModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  image?: any;
  message?: string;
  showButtons?: boolean;
  onYes?: () => void;
  onNo?: () => void;
  yesText?: string;
  noText?: string;
  animationType?: 'none' | 'slide' | 'fade';
  tapToClose?: boolean;
}

const CommonModal: React.FC<CommonModalProps> = ({
  visible,
  onClose,
  title,
  children,
  image,
  message,
  showButtons = false,
  onYes,
  onNo,
  yesText = 'YES',
  noText = 'NO',
  animationType = 'fade',
  tapToClose = false,
}) => {
  const renderContent = () => {
    if (children) {
      return children;
    }

    return (
      <View style={styles.standardBody}>
        {image && <Image source={image} style={styles.modalImage} />}
        {message && <Text style={styles.modalText}>{message}</Text>}
      </View>
    );
  };

  const ModalContent = (
    <View style={styles.modalContent}>
      {title && (
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{title}</Text>
        </View>
      )}
      <View style={[styles.modalBody, !title && { paddingTop: 40 }]}>
        {renderContent()}

        {showButtons && (
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={[styles.modalBtn, styles.modalBtnNo]}
              onPress={onNo || onClose}
            >
              <Text style={[styles.modalBtnText, styles.modalBtnTextNo]}>
                {noText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalBtn, styles.modalBtnYes]}
              onPress={onYes}
            >
              <Text style={[styles.modalBtnText, styles.modalBtnTextYes]}>
                {yesText}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <Modal
      transparent
      visible={visible}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        {tapToClose ? (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalOverlayTap}
            onPress={onClose}
          >
            {ModalContent}
          </TouchableOpacity>
        ) : (
          ModalContent
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlayTap: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  modalHeader: {
    width: '100%',
    paddingVertical: 18,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#000',
  },
  modalBody: {
    padding: 24,
    width: '100%',
    alignItems: 'center',
  },
  standardBody: {
    width: '100%',
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#000',
    textAlign: 'center',
    lineHeight: 24,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
  },
  modalBtn: {
    flex: 0.48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  modalBtnNo: {
    backgroundColor: '#FFFFFF',
    borderColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
  modalBtnYes: {
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
    borderColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
  modalBtnText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  modalBtnTextNo: {
    color: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
  modalBtnTextYes: {
    color: '#FFFFFF',
  },
});

export default CommonModal;
