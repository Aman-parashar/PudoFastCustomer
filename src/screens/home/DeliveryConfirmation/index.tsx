import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useDeliveryConfirmationViewModel } from './DeliveryConfirmationViewModel';
import { Images } from '../../../utils/images';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';
import Stepper from '../../../components/common/Stepper';
import CustomButton from '../../../components/common/CustomButton';
import { deliverySteps } from '../../../utils/enum';

import Header from '../../../components/common/Header';

const DeliveryConfirmationScreen = () => {
  const { fromHistory, orderData, comment, setComment, handleConfirm, goBack } =
    useDeliveryConfirmationViewModel();

  const renderStatusItem = (
    label: string,
    isActive: boolean,
    isLast: boolean,
  ) => (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}
      >
        <View
          style={{
            flex: 1,
            height: 2,
            backgroundColor: '#E0E0E0',
            opacity: isActive ? 0 : 1,
          }}
        />
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: isActive
              ? COLORS.BUTTON_GRADIENT_PURPLE_START
              : '#BDBDBD',
            borderWidth: 4,
            borderColor: isActive ? 'rgba(104, 19, 111, 0.2)' : 'transparent',
          }}
        />
        <View
          style={{
            flex: 1,
            height: 2,
            backgroundColor: '#E0E0E0',
            opacity: isLast ? 0 : 1,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 10,
          fontSize: 10,
          fontFamily: isActive ? FONTS.SANTRAL_BOLD : FONTS.SANTRAL_MEDIUM,
          color: isActive ? '#000' : '#888',
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header
          type="step"
          title={fromHistory ? 'Delivery Details' : 'Delivery Confirmations'}
          onBack={goBack}
        />
      </View>

      {!fromHistory && (
        <Stepper currentStep={deliverySteps.DeliveryConfirmation} />
      )}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {fromHistory && (
          <View style={styles.trackingHeaderCard}>
            <View style={styles.trackingRow}>
              <Image
                source={Images.useIcon}
                style={styles.trackingIcon}
                tintColor="#FB5184"
              />
              <Text style={styles.trackingText}>
                Delivery ID - {orderData?.orderId || '112515212'}
              </Text>
            </View>
            <View style={[styles.trackingRow, { marginBottom: 0 }]}>
              <Image
                source={Images.wallet}
                style={styles.trackingIcon}
                tintColor="#FB5184"
              />
              <Text style={styles.trackingText}>
                Amount - ${orderData?.totalPrice || '10'}
              </Text>
            </View>
          </View>
        )}

        {/* Transit and Receiver Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transit and Receiver Details</Text>

          <View style={[styles.addressCard, styles.pickupCard]}>
            <View style={[styles.dot, styles.pickupDot]} />
            <View style={styles.addressInfo}>
              <Text style={styles.addressLabel}>Pickup Address</Text>
              <Text style={styles.addressText}>
                {orderData?.pickupAddress ||
                  'B103/4, Abc com, AA Road, BB area, CA City, USA'}
              </Text>
            </View>
          </View>

          <View style={[styles.addressCard, styles.dropoffCard]}>
            <View style={[styles.dot, styles.dropoffDot]} />
            <View style={styles.addressInfo}>
              <Text style={styles.addressLabel}>Drop off Address</Text>
              <Text style={styles.addressText}>
                {orderData?.deliveryAddress || 'A201,1, XYS Apartment.'}
              </Text>
            </View>
          </View>

          <View style={styles.receiverDetails}>
            <View style={styles.receiverRow}>
              <Image source={Images.useIcon} style={styles.receiverIcon} />
              <Text style={styles.receiverText}>
                {orderData?.receiverName || 'John Doe'}
              </Text>
            </View>
            <View style={styles.receiverRow}>
              <Image source={Images.email} style={styles.receiverIcon} />
              <Text style={styles.receiverText}>
                {orderData?.receiverEmail || 'Samplemail@gmail.com'}
              </Text>
            </View>
            <View style={styles.receiverRow}>
              <Image source={Images.phone} style={styles.receiverIcon} />
              <Text style={styles.receiverText}>
                {orderData?.receiverPhone || '+1 2514251421'}
              </Text>
            </View>
          </View>
        </View>

        {/* Item Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Item Details</Text>
          <View style={styles.itemsList}>
            {(orderData?.items || ['Laptop', 'Screen', 'Bottle']).map(
              (item: string, index: number) => (
                <View key={index} style={styles.itemBox}>
                  <View style={styles.itemBadge}>
                    <Text style={styles.itemBadgeText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              ),
            )}
          </View>

          <View style={styles.itemTypeRow}>
            <Text style={styles.itemTypeLabel}>Item Type -</Text>
            <Text style={styles.itemTypeValue}>
              {orderData?.itemType || 'Box'}
            </Text>
            <Image source={Images.box} style={styles.itemTypeIcon} />
          </View>

          <View style={styles.descriptionRow}>
            <Image source={Images.document} style={styles.descIcon} />
            <Text style={styles.descriptionText}>
              {orderData?.description ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis urna quam. Donec sagittis'}
            </Text>
          </View>
        </View>

        {/* Delivery Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Details</Text>
          <View style={styles.deliveryCard}>
            <View style={styles.serviceRow}>
              <Image source={Images.walker} style={styles.serviceIcon} />
              <Text style={styles.serviceName}>
                {orderData?.service || 'Walker'}
              </Text>
            </View>
            <View style={styles.deliveryGrid}>
              <View style={styles.gridItem}>
                <Image source={Images.wayToDropOff} style={styles.gridIcon} />
                <Text style={styles.gridText}>
                  {orderData?.tripType === 'one_way' ? 'One Way' : 'Two Way'}
                </Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={Images.greenCalendar} style={styles.gridIcon} />
                <Text style={styles.gridText}>
                  {orderData?.scheduleDetails?.date || '10/July/2022'}
                </Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={Images.privacy} style={styles.gridIcon} />
                <Text style={styles.gridText}>General</Text>
              </View>
              <View style={styles.gridItem}>
                <Image
                  source={Images.historySelected}
                  style={styles.gridIcon}
                />
                <Text style={styles.gridText}>
                  {orderData?.scheduleDetails?.time || '10:00 AM'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Payment Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Information</Text>
          <View style={styles.paymentInfoCard}>
            <View style={styles.paymentGrid}>
              <View style={styles.paymentItem}>
                <Image source={Images.password} style={styles.paymentIcon} />
                <Text style={styles.paymentText}>6216120521</Text>
              </View>
              <View style={styles.paymentItem}>
                <Image source={Images.wallet} style={styles.paymentIcon} />
                <Text style={styles.paymentText}>**** 1421</Text>
              </View>
              <View style={styles.paymentItem}>
                <Image source={Images.star} style={styles.paymentIcon} />
                <Text style={styles.paymentText}>
                  ${orderData?.totalPrice || '15'}
                </Text>
              </View>
              <View style={styles.paymentItem}>
                <Image source={Images.wallet} style={styles.paymentIcon} />
                <Text style={styles.paymentText}>
                  {orderData?.paymentType === 'debit'
                    ? 'Debit Card'
                    : 'Credit Card'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {fromHistory ? (
          <>
            {/* Driver Details */}
            <View style={styles.driverSection}>
              <Text style={styles.sectionTitle}>Driver Details</Text>
              <View style={styles.driverCard}>
                <Image source={Images.user} style={styles.driverImage} />
                <View style={styles.driverInfo}>
                  <Text style={styles.driverName}>John Doe</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>4.0</Text>
                    <View style={styles.ratingStars}>
                      {[1, 2, 3, 4].map(i => (
                        <Image
                          key={i}
                          source={Images.fillRating}
                          style={{ width: 12, height: 12, marginRight: 2 }}
                        />
                      ))}
                      <Image
                        source={Images.fillRating}
                        style={{ width: 12, height: 12, tintColor: '#E0E0E0' }}
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.chatButton}>
                  <Image
                    source={Images.chatUnSelected}
                    style={styles.chatIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Status Section */}
            <View style={styles.statusSection}>
              <Text style={styles.sectionTitle}>Status</Text>
              <View style={styles.statusContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  {renderStatusItem('Confirmed', true, false)}
                  {renderStatusItem('Way to pickup', false, false)}
                  {renderStatusItem('Way to dropoff', false, false)}
                  {renderStatusItem('Delivered', false, true)}
                </View>
              </View>
            </View>

            <CustomButton
              title="TRACK"
              onPress={() => {}}
              style={styles.trackButtonLarge}
            />

            <TouchableOpacity style={styles.cancelOrderLink}>
              <Text style={styles.cancelOrderLinkText}>CANCEL ORDER</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* Add Comment for Driver */}
            <View style={styles.section}>
              <View style={styles.commentHeader}>
                <Text style={styles.sectionTitle}>Add Comment for Driver</Text>
                <Text style={styles.counterText}>{comment.length}/200</Text>
              </View>
              <TextInput
                style={styles.commentInput}
                placeholder="Type here"
                placeholderTextColor="#999999"
                multiline
                maxLength={200}
                value={comment}
                onChangeText={setComment}
              />
            </View>
            <View style={styles.bottomContainer}>
              <CustomButton
                title="CONFIRM"
                onPress={handleConfirm}
                style={styles.confirmButton}
              />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryConfirmationScreen;
