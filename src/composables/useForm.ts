import { useAppState } from "utils/useAppState";

import type { IError } from "components/ui/form";

const [getFormErrors, setFormErrors] = useAppState<IError | null>(
  "form-errors",
  () => null,
);

export { getFormErrors, setFormErrors };
