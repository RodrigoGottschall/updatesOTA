const configs = {
  app: {
    expo: {
      extra: {
        eas: {
          projectId: " ",
        },
      },
      name: " ",
      slug: " ",
      scheme: " ",
      owner: " ",
      version: " ",
      orientation: "portrait",
      currentFullName: " ",
      originalFullName: " ",
      icon: "./assets/icon.png",
      splash: {
        resizeMode: "cover",
        image: "./assets/splash.png",
      },
      runtimeVersion: " ",
      platforms: ["ios", "android", "web"],
      assetBundlePatterns: ["**/*"],
      updates: {
        url: " ",
        enabled: true,
        fallbackToCacheTimeout: 30000,
        codeSigningCertificate: "./code-signing/certificate.pem",
        codeSigningMetadata: {
          keyid: "main",
          alg: "rsa-v1_5-sha256",
        },
      },
      androidStatusBar: {        
      },
      androidNavigationBar: {
      },
      ios: {
        supportsTablet: true,
        buildNumber: " ",
        infoPlist: {
          CFBundleAllowMixedLocalizations: true,
        },
        bundleIdentifier: " ",
      },
      android: {
        versionCode: " ",
        permissions: [
          
        ],
        package: " ",
        googleServicesFile: " ",
      },
      locales: {
        pt: "./configs/locales/pt.json",
        en: "./configs/locales/en.json",
      },
      plugins: [
      ],
      hooks: {
        postPublish: [
          // SENTRY CONFIGURATION
        ],
      },
    },
  },
};

