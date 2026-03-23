import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useDeliveryDetailsViewModel } from './DeliveryDetailsViewModel';
import { Images } from '../../../utils/images';

const DeliveryDetailsScreen = () => {
  const { orderDetails, goBack, goToHome, getServiceIcon } =
    useDeliveryDetailsViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image source={Images.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <TouchableOpacity onPress={goToHome}>
          <Image source={Images.homeSelected} style={styles.homeIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Status Section */}
        <View style={styles.card}>
          <Text style={styles.statusTitle}>Delivered Successfully</Text>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderLabel}>
              Delivery ID - {orderDetails.deliveryNo}
            </Text>
            <Text style={styles.amountText}>
              Amount - ${orderDetails.price.toFixed(2)}
            </Text>
          </View>

          {/* Timeline */}
          <View style={styles.timelineContainer}>
            <View style={styles.timelineItem}>
              <Image
                source={Images.confirmedImage}
                style={styles.timelineIcon}
              />
              <Text style={styles.timelineText}>Confirmed</Text>
            </View>
            <View style={styles.timelineLine} />
            <View style={styles.timelineItem}>
              <Image source={Images.wayToPickUp} style={styles.timelineIcon} />
              <Text style={styles.timelineText}>Way to Pickup</Text>
            </View>
            <View style={styles.timelineLine} />
            <View style={styles.timelineItem}>
              <Image
                source={Images.wayToDropOff}
                style={[styles.timelineIcon, styles.timelineIconGray]}
              />
              <Text style={styles.timelineText}>Way to Drop</Text>
            </View>
            <View style={styles.timelineLine} />
            <View style={styles.timelineItem}>
              <Image source={Images.delivered} style={styles.timelineIcon} />
              <Text style={styles.timelineText}>Delivered</Text>
            </View>
          </View>
        </View>

        {/* Driver Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Driver Details</Text>
          <View style={styles.driverRow}>
            <Image source={Images.user} style={styles.driverImage} />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>{orderDetails.driverName}</Text>
              <View style={styles.ratingRow}>
                <Image source={Images.fillRating} style={styles.starIcon} />
                <Text style={styles.ratingText}>
                  {orderDetails.driverRating}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chatButton}>
              <Image
                source={Images.chatUnSelected}
                style={[styles.chatIcon, styles.chatIconPrimary]}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Address Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Transit & Receiver Details</Text>
          <View style={styles.addressRow}>
            <View style={[styles.badge, styles.pickupBadge]}>
              <Text style={[styles.badgeText, styles.pickupBadgeText]}>
                PICKUP
              </Text>
            </View>
            <Text style={styles.addressText}>{orderDetails.pickupAddress}</Text>
          </View>
          <View style={styles.addressRow}>
            <View style={[styles.badge, styles.dropoffBadge]}>
              <Text style={[styles.badgeText, styles.dropoffBadgeText]}>
                DROP OFF
              </Text>
            </View>
            <Text style={styles.addressText}>{orderDetails.dropAddress}</Text>
          </View>

          <View style={styles.receiverInfoSection}>
            <Text style={styles.infoLabel}>Receiver Name</Text>
            <Text style={styles.infoValue}>{orderDetails.receiverName}</Text>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{orderDetails.receiverEmail}</Text>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{orderDetails.receiverPhone}</Text>
          </View>
        </View>

        {/* Item Details */}
        <View style={styles.card}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Delivery Details</Text>
            <Image source={getServiceIcon()} style={styles.serviceIcon} />
          </View>
          <Text style={styles.itemTypeText}>
            Item Type -{' '}
            <Text style={styles.itemTypeHighlight}>
              {orderDetails.itemType}
            </Text>
          </Text>
          <View style={styles.descriptionRow}>
            <Image
              source={Images.notificationSelected}
              style={styles.infoIcon}
            />
            <Text style={styles.descriptionText}>
              {orderDetails.description}
            </Text>
          </View>
        </View>

        {/* Payment Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Payment Information</Text>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Cardholder Name</Text>
            <Text style={styles.paymentValue}>{orderDetails.receiverName}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Payment Details</Text>
            <Text style={styles.paymentValue}>
              {orderDetails.paymentMethod}
            </Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Card Number</Text>
            <Text style={styles.paymentValue}>
              **** {orderDetails.cardNumber}
            </Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentTotalLabel}>Total Amount</Text>
            <Text style={styles.paymentTotalValue}>
              ${orderDetails.price.toFixed(2)}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportText}>REPORT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryDetailsScreen;
