export const required = (value) => value.trim() !== "";

export const length = (config) => (value) => {
  let valid = true;
  if (config.min) {
    valid = valid && value.trim().length >= config.min;
  }
  if (config.max) {
    valid = valid && value.trim().length <= config.max;
  }
  return valid;
};

export const isEmail = (value) =>
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    value
  );
