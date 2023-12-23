const useValidation = (
  value: string | undefined,
  regularExpression: RegExp = /^[A-Za-z]{2,12}$/
) => {
  if (value !== undefined) return regularExpression.test(value);
};

export default useValidation;
