document.addEventListener("keyup", e => {
  if (!wantsTracking || wantsTracking === "yes") {
    console.log("key", e.code);
    if (e.code === "KeyA") {
      analytics.track("Key Pressed", {
        key: e.code
      });
      analytics.identify("this user pressed 'a'", {
        userName: userName
      });
    }
  } else {
    console.log("tracking disabled");
  }
});
