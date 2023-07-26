export const getTotalCarStops = (
  totalDistance: number,
  tankCapacity: number,
  stops: number[],
): number => {
  let totalStops = 0;
  let maxRange = tankCapacity; // We assume we start with the tank full
  for (let i = 0; i < stops.length; i++) {
    const stop = stops[i];
    if (maxRange < stop && i === 0) {
      return -1; // We can't reach the first stop
    }
    if (maxRange < stop) {
      const prevStop = stops[i - 1];
      maxRange = prevStop + tankCapacity;
      totalStops++;
    }
    if (maxRange < stop && maxRange < totalDistance) {
      return -1; // We can't reach the current stop
    }
    if (i === stops.length - 1 && maxRange < totalDistance) {
      maxRange = stop + tankCapacity;
      totalStops++;
    }
    if (maxRange >= totalDistance) {
      return totalStops; // We have reached the last city
    }
  }

  return -1;
};
