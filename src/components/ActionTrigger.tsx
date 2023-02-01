import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { actionInterface } from '../constants/actions';

type Props = { action: actionInterface };

const ActionTrigger = ({ action }: Props) => {
  const onExecute = () => {
    // Call the api endpoints to complete the transition
  };

  return (
    <button
      className="trigger-btn trigger-dark"
      onClick={onExecute}
      type="button"
    >
      <FontAwesomeIcon
        className="h-6 w-6 text-slate-700 dark:text-lime-100"
        icon={action.icon}
      />

      <span className="text-lg dark:text-lime-100">{action.name}</span>
    </button>
  );
};

export default ActionTrigger;
