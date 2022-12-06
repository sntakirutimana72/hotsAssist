import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import actionTrigger from '../props/actionTrigger';

const ActionTrigger = ({ action }) => (
  <button type="button" className="flex flex-wrap justify-center items-center gap-3 rounded-md border border-transparent py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    <FontAwesomeIcon icon={action.icon} className="h-5 w-5" />
    <span className="text-lg">{action.name}</span>
  </button>
);

ActionTrigger.propTypes = actionTrigger;

export default ActionTrigger;
