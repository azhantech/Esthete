import * as Yup from 'yup'

export const LoginFormValidator = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
})

export const SignupFormValidator = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')], 'Both passwords do not match.'),
    phone_number: Yup.string().required('Phone Number is required'),
    d_o_b: Yup.string().required('Date Of Birth is required'),
    about: Yup.string().required('About is required'),
    age: Yup.number().required('Age is required'),
})

export const ContactUsFormValidator = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
})

export const ForgetPasswordFormValidator = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required'),
})

export const VerifyCodeFormValidator = Yup.object().shape({
    code: Yup.string().required('Code is required'),
})

export const SetPasswordFormValidator = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')], 'Both passwords do not match.'),
})

export const ChangePasswordFormValidator = Yup.object().shape({
    current_password: Yup.string().required('Current Password is required'),
    password: Yup.string().required('New Password is required'),
    confirm_password: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')], 'Both passwords do not match.'),
})

export const EditProfileFormValidator = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    d_o_b: Yup.string().required('Date Of Birth is required'),
    age: Yup.number().required('Age is required'),
    about: Yup.string().required('About is required'),
})

export const PaymentFormValidator = Yup.object().shape({
    card_holder_name: Yup.string().required('Card Holder name is required'),
    card_number: Yup.number().required('Card number is required'),
    cvv_number: Yup.number().required('CVV number is required'),
    expiry_date: Yup.string().required('Expiry Date is required'),
})

export const RequestThreadFormValidator = Yup.object().shape({
    title: Yup.string().required('Thread Title is required'),
    details: Yup.string().required('Post Details are required'),
})
