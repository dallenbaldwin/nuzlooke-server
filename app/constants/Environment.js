import dotenv from 'dotenv';

dotenv.config();

const {
   NODE_ENV,
   JWT_SECRET,
   GOOGLE_AUTH_CLIENT_ID,
   AWS_ACCESS_KEY_ID,
   AWS_SECRET_ACCESS_KEY,
} = process.env;

const Environment = Object.freeze({
   NODE_ENV,
   IS_PROD: NODE_ENV === 'production',
   JWT_SECRET,
   GOOGLE_AUTH_CLIENT_ID,
   AWS_ACCESS_KEY_ID,
   AWS_SECRET_ACCESS_KEY,
});

export default Environment;
