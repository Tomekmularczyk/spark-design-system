// Import all Spark components
import { hugeInput } from './base/inputs/hugeInput';
import { ssnInput } from './base/inputs/ssnInput';
import passwordInput from './base/inputs/passwordInput';
import { monetaryInput } from './base/inputs/monetaryInput';
import { phoneInput } from './base/inputs/phoneInput';
import { dateInput } from './base/inputs/dateInput';
import { datePicker } from './base/inputs/datePicker';
import { modals } from './components/modals';
import { requiredTextInput } from './base/inputs/requiredTextInput';
import { requiredTick } from './base/inputs/requiredTick';
import { requiredSelect } from './base/inputs/requiredSelect';
import { pagination } from './components/pagination';
import { tabs } from './components/tabs';
import { toggle } from './components/toggle';
import { spinners } from './components/spinners';
import { masthead } from './components/masthead';
import { alerts } from './components/alerts';
import { dropdowns } from './components/dropdown';
import { stepper } from './components/stepper';
import { highlightBoard } from './components/highlight-board';
import versionCheck from './utilities/versionCheck';

const Spark = ({ datePickerConfig = {} } = {}) => {
  requiredSelect();
  requiredTick();
  requiredTextInput();
  ssnInput();
  passwordInput();
  monetaryInput();
  phoneInput();
  dateInput();
  datePicker(datePickerConfig);
  modals();
  pagination();
  tabs();
  toggle();
  spinners();
  masthead();
  alerts();
  dropdowns();
  stepper();
  highlightBoard();
  hugeInput();
  versionCheck();
};

export { Spark as default };
