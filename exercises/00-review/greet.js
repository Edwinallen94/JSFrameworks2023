<<<<<<< HEAD
// export { greet };

export const greet = (name) => {
  // I am exporting the 'greet' function from this file so thst it would be assessible to all files
=======
export { greet as default };

const greet = (name) => {
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
  return `Hello ${name}!`;
};
