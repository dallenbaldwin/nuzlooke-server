export const thirtyTimeout = processId =>
   setTimeout(() => {
      process.send(`timed out`);
      process.kill(processId);
   }, 30 * 1000);

export const sixtyTimeout = processId =>
   setTimeout(() => {
      process.send(`timed out`);
      process.kill(processId);
   }, 60 * 1000);
