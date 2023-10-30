// Fake a delay between 1-2 seconds
export const fakeDelay = async () => {
  const randomDelay = 1000 + Math.random() * 1000;

  return new Promise(r => setTimeout(r, randomDelay));
};
