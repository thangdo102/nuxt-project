export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      //added to the context the next functions
      hello: (msg: string) => console.log(`Hello ${msg}`),
    },
  };
});
