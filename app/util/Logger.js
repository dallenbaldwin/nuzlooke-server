import Environment from '../constants/Environment.js';

const mapLogs = (err, items) =>
   items.map(item => (err ? console.error(item) : console.log(item)));

const where = () => {
   const fakeError = new Error('fake error');
   return fakeError.stack
      .split('\n')
      .filter(s => !s.includes('fake error') && !s.includes('Logger.js'))[0]
      .trim();
};

const errorLogger = (...items) => {
   console.group(`Error ${where()}`);
   mapLogs(true, items);
   console.groupEnd();
};

const devLogger = (...items) => {
   if (!Environment.VERBOSE) return;
   console.group(`Logger ${where()}`);
   mapLogs(false, items);
   console.groupEnd();
};

export { errorLogger, devLogger };
