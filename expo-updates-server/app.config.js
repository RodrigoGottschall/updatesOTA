const configs = {
  touchpay: {
    expo: {
      extra: {
        eas: {
          projectId: "58b1abd5-7f3e-4c66-8c93-0612f140dec9",
        },
      },
      name: "TouchPay",
      slug: "touchpay",
      scheme: "touchpay",
      owner: "marcello.oliveira",
      version: "1.26.5",
      orientation: "portrait",
      currentFullName: "marcello.oliveira/touchpay",
      originalFullName: "marcello.oliveira/touchpay",
      icon: "./assets/touchpay/icon.png",
      splash: {
        resizeMode: "cover",
        image: "./assets/touchpay/splash.png",
        backgroundColor: "#1A70AD",
      },
      runtimeVersion: "1",
      platforms: ["ios", "android", "web"],
      assetBundlePatterns: ["**/*"],
      updates: {
        url: "http://18.231.138.197/api/manifest",
        enabled: true,
        fallbackToCacheTimeout: 30000,
        // codeSigningCertificate: "./code-signing/certificate.pem",
        // codeSigningMetadata: {
        //   keyid: "main",
        //   alg: "rsa-v1_5-sha256",
        // },
      },
      androidStatusBar: {
        barStyle: "light-content",
        backgroundColor: "#1A70AD",
      },
      androidNavigationBar: {
        barStyle: "light-content",
        backgroundColor: "#1A70AD",
      },
      ios: {
        supportsTablet: true,
        buildNumber: "1",
        infoPlist: {
          CFBundleAllowMixedLocalizations: true,
        },
        bundleIdentifier: "amlabs.touchpay",
        // appID: "1524354780",
      },
      android: {
        versionCode: 35,
        permissions: [
          "CAMERA",
          "BLUETOOTH",
          "BLUETOOTH_ADMIN",
          "BLUETOOTH_CONNECT",
          "BLUETOOTH_SCAN",
          "INTERNET",
          "SYSTEM_ALERT_WINDOW",
          "VIBRATE",
          "ACCESS_FINE_LOCATION",
        ],
        adaptiveIcon: {
          backgroundColor: "#1A70AD",
          foregroundImage: "./assets/touchpay/icon.png",
        },
        package: "amlabs.touchpay",
        googleServicesFile: "./configs/google-services/touchpay.json",
      },
      locales: {
        pt: "./configs/locales/pt.json",
        en: "./configs/locales/en.json",
      },
      plugins: [
        "sentry-expo",
        [
          "@config-plugins/react-native-ble-plx",
          {
            isBackgroundEnabled: true,
            modes: ["peripheral", "central"],
            bluetoothAlwaysPermission:
              "Allow $(PRODUCT_NAME) to connect to bluetooth devices",
          },
        ],
      ],
      hooks: {
        postPublish: [
          {
            file: "sentry-expo/upload-sourcemaps",
            config: {
              organization: "amlabs-z0",
              authToken:
                "ba956a9da31f4188803cd5a53a07e666ca77e7423c224ab99c1681cca6d9598d",
              project: "touchpay",
            },
          },
        ],
      },
    },
  },
};

