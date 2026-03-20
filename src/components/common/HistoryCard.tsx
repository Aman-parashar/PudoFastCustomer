import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/colors';
import { FONTS } from '../../utils/fonts';
import CustomButton from './CustomButton';

export type OrderStatus =
  | 'confirmed'
  | 'way_to_pickup'
  | 'pending'
  | 'delivered'
  | 'cancelled';

export interface OrderData {
  id: string;
  orderId: string;
  price: string;
  status: OrderStatus;
  statusLabel: string;
}

interface HistoryCardProps {
  order: OrderData;
  onTrack?: (id: string) => void;
  onDetails?: (id: string) => void;
  onCancel?: (id: string) => void;
  onReview?: (id: string) => void;
  onReport?: (id: string) => void;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  order,
  onTrack,
  onDetails,
  onCancel,
  onReview,
  onReport,
}) => {
  const isUpcoming =
    order.status === 'confirmed' ||
    order.status === 'way_to_pickup' ||
    order.status === 'pending';
  const isCompleted = order.status === 'delivered';
  const isCancelled = order.status === 'cancelled';

  const renderButtons = () => {
    if (isUpcoming) {
      if (order.status === 'pending') {
        return (
          <View style={styles.buttonRow}>
            <CustomButton
              title="Cancel"
              onPress={() => onCancel?.(order.id)}
              variant="solid"
              backgroundColor={COLORS.PRIMARY_RED}
              style={styles.button}
              textStyle={styles.buttonText}
            />
            <CustomButton
              title="Details"
              onPress={() => onDetails?.(order.id)}
              variant="outline"
              borderColor={COLORS.BUTTON_GRADIENT_PURPLE_START}
              style={styles.button}
              textStyle={styles.outlineButtonText}
            />
          </View>
        );
      }

      return (
        <View style={styles.buttonRow}>
          <CustomButton
            title="Track"
            onPress={() => onTrack?.(order.id)}
            variant="gradient"
            style={styles.button}
            textStyle={styles.buttonText}
          />
          <CustomButton
            title="Details"
            onPress={() => onDetails?.(order.id)}
            variant="outline"
            borderColor={COLORS.BUTTON_GRADIENT_PURPLE_START}
            style={styles.button}
            textStyle={styles.outlineButtonText}
          />
        </View>
      );
    }

    if (isCompleted) {
      return (
        <View style={styles.buttonRow}>
          <CustomButton
            title="Review"
            onPress={() => onReview?.(order.id)}
            variant="gradient"
            style={styles.button}
            textStyle={styles.buttonText}
          />
          <CustomButton
            title="Details"
            onPress={() => onDetails?.(order.id)}
            variant="outline"
            borderColor={COLORS.BUTTON_GRADIENT_PURPLE_START}
            style={styles.button}
            textStyle={styles.outlineButtonText}
          />
        </View>
      );
    }

    if (isCancelled) {
      return (
        <View style={styles.buttonRow}>
          <CustomButton
            title="Report"
            onPress={() => onReport?.(order.id)}
            variant="outline"
            borderColor={COLORS.SECONDARY_ORANGE}
            style={styles.button}
            textStyle={styles.reportButtonText}
          />
          <CustomButton
            title="Details"
            onPress={() => onDetails?.(order.id)}
            variant="outline"
            borderColor={COLORS.BUTTON_GRADIENT_PURPLE_START}
            style={styles.button}
            textStyle={styles.outlineButtonText}
          />
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.card}>
      {/* Text block — pushed toward left with its own padding */}
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>
          {isUpcoming ? 'Delivery ID' : 'Order ID'} - {order.orderId}
        </Text>
        <Text style={styles.infoText}>Price - {order.price}</Text>
        <Text style={[styles.infoText, styles.statusText]}>
          Status - {order.statusLabel}
        </Text>
      </View>

      {/* Buttons — centered */}
      <View style={styles.buttonWrapper}>{renderButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  /* ── Card ── */
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 18,
    marginHorizontal: 4,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  textContainer: {
    paddingLeft: 16,
  },

  /* ── Info rows ── */
  infoText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#1A1A1A',
    marginBottom: 6,
    lineHeight: 22,
  },
  statusText: {
    marginBottom: 16, // extra spacing before buttons
  },
  buttonWrapper: {
    paddingHorizontal: 18,
    alignItems: 'center', // centers the row
  },

  /* ── Button row ── */
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },

  /* ── Passed into CustomButton via `style` prop ── */
  button: {
    flex: 1, // equal width for both buttons
    height: 60, // overrides CustomButton's default 57px
    borderRadius: 8, // overrides default
  },

  /* ── Passed into CustomButton via `textStyle` prop ── */
  buttonText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.WHITE,
  },
  outlineButtonText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
  reportButtonText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.SECONDARY_ORANGE,
  },
});

export default HistoryCard;
