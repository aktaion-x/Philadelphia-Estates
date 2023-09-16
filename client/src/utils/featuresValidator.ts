type formattedFeaturesType = {
  key: string,
  value: string
}[]
export const featuresValidator = (featuresString: string): boolean => {
  const featuresArray = featuresString.split(";");
  let isValid = true;
  featuresArray.forEach((feature) => {
    if (feature.split("=").length !== 2) {
      isValid = false;
    }
  })
  return isValid;
}
export const featuresFormatter = (featuresString: string) => {
  const featuresArray = featuresString.split(";");
  const formattedFeatures: formattedFeaturesType = [];
  featuresArray.forEach((feature) => {
    const element = feature.split("=")
    formattedFeatures.push({
      key: element[0],
      value: element[1]
    })
  })
  return JSON.stringify(formattedFeatures);
}
export const featuresParser = (featuresString: string): formattedFeaturesType => {
  return JSON.parse(featuresString);
}