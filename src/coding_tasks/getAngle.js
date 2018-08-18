function getAngle(hours, minutes) {
  let angleInOneHours =
      hours * (360 / 12) > 360 ? hours * (360 / 12) - 360 : hours * (360 / 12),
      angleInOneMinutes = minutes * (360 / 60);

  let preRes = angleInOneHours + ((360 / 12) * 1) / (360 / angleInOneMinutes) - angleInOneMinutes;
  let preRes = angleInOneHours + 360 / 12 / (360 / angleInOneMinutes) - angleInOneMinutes;
  return Math.abs(preRes);
}

getAngle(9, 15);
