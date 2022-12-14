import uid from '../helpers/unique';
import actions from '../constants/actions';
import ActionTrigger from './ActionTrigger';

const ActionsPanel = () => (
  <div>
    <div className="grid grid-cols-2 gap-[10px] px-[85px]">
      {actions.map((action) => (
        <ActionTrigger key={uid()} action={action} />
      ))}
    </div>
  </div>
);

export default ActionsPanel;
