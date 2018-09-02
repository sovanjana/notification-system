let notificationSystem;
export const setNotificationSystem = system => {
  notificationSystem = system;
};

export const createNotification = (message, level) => {
  notificationSystem.addNotification(message, level);
};
