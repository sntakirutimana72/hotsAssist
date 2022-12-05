import { actionTrigger } from "../props";

const ActionTrigger = ({ action }) => (
  <button type="button" className="p-8">
    {action.name}
    <br />
    {action.cmd}
  </button>
);

ActionTrigger.propTypes = actionTrigger;

export default ActionTrigger;
