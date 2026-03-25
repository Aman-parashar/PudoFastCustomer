import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';
import { deliverySteps } from '../../../utils/enum';

interface StepperProps {
  currentStep: number;
  totalSteps?: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps = 5 }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <View
            style={[
              styles.stepCircle,
              currentStep === step && styles.activeStepCircle,
              currentStep > step && styles.completedStepCircle,
            ]}
          >
            <Text
              style={[
                styles.stepText,
                currentStep === step && styles.activeStepText,
                currentStep > step && styles.completedStepText,
              ]}
            >
              {step}
            </Text>
          </View>
          {index < steps.length - 1 && (
            <View
              style={[styles.line, currentStep > step && styles.completedLine]}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 60,
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  activeStepCircle: {
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
  completedStepCircle: {
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
  stepText: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#999999',
  },
  activeStepText: {
    color: COLORS.WHITE,
  },
  completedStepText: {
    color: COLORS.WHITE,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: -2, // Slight overlap to ensure connection
  },
  completedLine: {
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
});

export default Stepper;
