import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import path from 'path';

const env = config({ path: path.join(path.resolve(), '.env') });
expand(env);

const {
   NODE_ENV,
   JWT_SECRET,
   GOOGLE_AUTH_CLIENT_ID,
   AWS_ACCESS_KEY_ID,
   AWS_SECRET_ACCESS_KEY,
   VERBOSE,
} = process.env;

const Environment = Object.freeze({
   NODE_ENV: NODE_ENV ?? 'dev',
   IS_PROD: NODE_ENV === 'production',
   JWT_SECRET,
   GOOGLE_AUTH_CLIENT_ID,
   AWS_ACCESS_KEY_ID,
   AWS_SECRET_ACCESS_KEY,
   VERBOSE,
});

export default Environment;
