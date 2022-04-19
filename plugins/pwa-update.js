// https://dev.to/alejandroakbal/how-to-detect-and-update-to-the-latest-version-with-nuxt-pwa-1845
export default async (context) => {
  const workbox = await window.$workbox;

  if (!workbox) {
    console.debug("Workbox couldn't be loaded.");
    return;
  }

  workbox.addEventListener('installed', (event) => {
    if (!event.isUpdate) {
      console.debug('The PWA is on the latest version.');
      return;
    }

    console.debug('There is an update for the PWA, reloading...');
    window.location.reload();
  });
};
