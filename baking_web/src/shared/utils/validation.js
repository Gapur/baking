export const required = value => 
  (value && value.trim() ? undefined : 'Field must not be empty');
