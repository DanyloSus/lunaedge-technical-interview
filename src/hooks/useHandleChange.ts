const useHandleChange = (
  set: React.Dispatch<React.SetStateAction<string | undefined>>,
  value: string
) => {
  console.log(value);

  set(value);
};

export default useHandleChange;
