export function trackEvent(eventName, payload = {}) {
  return {
    eventName,
    payload,
    timestamp: new Date().toISOString(),
  };
}
