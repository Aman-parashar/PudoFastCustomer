export const Rules = {
  Email: {
    required: `Email field is required!`,
    minLength: {value: 5, message: 'Email contain minimum 5 characters.'},
    maxLength: {
      value: 50,
      message: 'Email contain maximum 50 characters.',
    },
    pattern: {
      value:
        /^[a-zA-Z0-9](?!.*\.\.)[a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/i,
      message: 'Please enter valid email',
    },
  },
  Phone: {
    required: 'Phone number is required!',
    pattern: {
      value: /^[6-9]\d{9}$/,
      message: 'Please enter a valid 10-digit phone number',
    },
  },
  Address: {
    required: 'Address is required!',
    minLength: {value: 5, message: 'Address too short'},
  },
  EmailPhone: {
    required: 'This field is required!',
    validate: (value: string) => {
      const emailRegex =
        /^[a-zA-Z0-9](?!.*\.\.)[a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9-]+\.(com|net|org|edu|gov|io|co|in|us|uk|au|ca)$/i;

      const phoneRegex = /^[0-9]{10,15}$/; // Adjust based on allowed digits
      if (emailRegex.test(value) || phoneRegex.test(value)) {
        return true;
      }
      return 'Enter a valid email or phone number';
    },
  },

  Password: {
    required: 'Password is required!',
    pattern: {
      value:
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\])[A-Za-z\d!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\]{12,}$/,
      message:
        'Use at least 12 characters long and include at least one letter, one number, and one special character (e.g. !@#$%^&*). Only letters, numbers, and symbols like !@#$%^&*()_+ are allowed.',
    },
  },
  OldPassword: {
    required: 'Old Password is required!',
    pattern: {
      value:
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\])[A-Za-z\d!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\]{12,}$/,
      message:
        'Use at least 12 characters long and include at least one letter, one number, and one special character (e.g. !@#$%^&*). Only letters, numbers, and symbols like !@#$%^&*()_+ are allowed.',
    },
  },
  NewPassword: {
    required: 'New Password is required!',
    pattern: {
      value:
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\])[A-Za-z\d!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\]{12,}$/,
      message:
        'Use at least 12 characters long and include at least one letter, one number, and one special character (e.g. !@#$%^&*). Only letters, numbers, and symbols like !@#$%^&*()_+ are allowed.',
    },
  },
  ConfirmPassword: {
    required: 'Confirm password is required!',
    validate: (value: string, formValues: any) => {
      if (value !== formValues.newPassword) {
        return 'Passwords do not match';
      }
      return true;
    },
  },

  Name: {
    required: 'Name is required!',
  },
  Country: {
    required: 'Please select Country',
  },
  City: {
    required: 'Please select City',
  },
  PostCode: {
    required: 'Post Code is required!',
    // pattern: {
    //   value: /^\d+$/,
    //   message: 'Post Code must contain only numbers',
    // },
    minLength: {
      value: 4,
      message: 'Post Code must be at least 4 digits',
    },
    maxLength: {
      value: 10,
      message: 'Post Code must be at most 10 digits',
    },
  },
  DOB: {
    required: 'Please select DOB',
    pattern: {
      value: /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/,
      message: 'DOB must be in dd-mm-yyyy format',
    },
  },
  CurrentPassword: {
    required: 'Current Password is required!',
  },
  UserName: {
    required: 'User name is required!',
    validate: {
      noSpaces: (value: any) =>
        !/\s/.test(value) || 'Username should not contain spaces',
    },
    maxLength: {
      value: 20,
      message: 'Username contain maximum 20 characters.',
    },
  },
  Required: {
    required: 'This field is required!',
  },
  RequiredWithMax: {
    required: 'This field is required!',
    maxLength: {
      value: 50,
      message: 'maximum 50 characters.',
    },
  },
  RequiredWithMax1: {
    required: 'This field is required!',
    maxLength: {
      value: 60,
      message: 'maximum 60 characters.',
    },
  },
  required: {
    required: 'Required!',
  },

  tribeCode: {
    required: 'Please enter the tribe code',
  },
  BankAccountHolder: {
    required: 'Account holder name is required!',
    pattern: {
      value: /^[a-zA-Z\s]{2,50}$/,
      message:
        'Please enter a valid account holder name (2-50 characters, letters only)',
    },
  },

  BankAccountNumber: {
    required: 'Bank account number is required!',
    pattern: {
      value: /^\d{8,17}$/,
      message: 'Please enter a valid bank account number (8-17 digits)',
    },
  },

  BSB: {
    required: 'BSB number is required!',
    pattern: {
      value: /^\d{6}$/,
      message: 'BSB must be 6 digits',
    },
  },

  BankName: {
    required: 'Bank name is required!',
    pattern: {
      value: /^[a-zA-Z\s]{2,50}$/,
      message: 'Please enter a valid bank name (2-50 characters, letters only)',
    },
  },

  BankAddress: {
    pattern: {
      value: /^[a-zA-Z0-9\s,.-]{0,100}$/,
      message: 'Please enter a valid bank address (max 100 characters)',
    },
  },

  SwiftBic: {
    required: 'SWIFT/BIC code is required!',
    pattern: {
      value: /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
      message: 'Please enter a valid SWIFT/BIC code',
    },
  },
};
