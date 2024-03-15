import { type Ref } from "vue";
export const useAppState = <T = any>(
  key: string,
  initialValue: () => T
): [() => Ref<T>, (_: T) => void] => {
  const getState = () => useState<T>(key, initialValue);

  const setState = (value: T) => {
    const state = getState();
    state.value = value;
  };

  return [getState, setState];
};
