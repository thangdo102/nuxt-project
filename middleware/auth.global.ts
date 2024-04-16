import { useLoginUser } from "~/composables/user";
import { auth } from "~/plugins/src/firebase";

export default defineNuxtRouteMiddleware(async (to, from) => {
  let unsubscribe;

  if (!unsubscribe) {
    unsubscribe = auth.onAuthStateChanged(async (u) => {
      if (u) {
        useLoginUser().update({ ...u });
        if (to.name === "login") {
          window.location = "/";
        }
      } else {
        console.log("unauthorized");
        useLoginUser().update(null);
      }
    });
  }
});
