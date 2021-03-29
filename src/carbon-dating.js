const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    sampleActivity = parseFloat(sampleActivity)
    if (sampleActivity < 15 && sampleActivity > 0) {
      return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693);
    }
    else
     return false;
  }
  else
   return false;
};
