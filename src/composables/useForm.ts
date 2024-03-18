import { useAppState } from "utils/useAppState";

import type { FormError } from "components/ui/form";

const [getFormErrors, setFormErrors] = useAppState<FormError | null>(
  "form-errors",
  () => null,
);

export { getFormErrors, setFormErrors };
