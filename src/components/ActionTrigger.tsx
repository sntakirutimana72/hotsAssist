import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { actionInterface } from '../constants/actions';

type Props = { action: actionInterface };

const ActionTrigger = ({ action }: Props) => {
  const onExecute = () => {};

  return (
    <button type="button" onClick={onExecute} className="trigger-btn trigger-dark">
      <FontAwesomeIcon icon={action.icon} className="h-6 w-6 text-slate-700 dark:text-lime-100" />
      <span className="text-lg dark:text-lime-100">{action.name}</span>
    </button>
  );
};

export default ActionTrigger;
