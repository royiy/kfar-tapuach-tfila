// קוד מינימלי חובה כדי שהדפדפן יכיר בזה כאפליקציה
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // השארת הפונקציה ריקה מספיקה כדי לעקוף את הבדיקה
});