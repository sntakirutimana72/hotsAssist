import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid4 } from 'uuid';

import { actions } from '../constants/actions';
import ActionTrigger from './ActionTrigger';

function ActionsPanel() {
  const [keyword, setKeyword] = useState('');
  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value.trim().toLocaleLowerCase());
  };
  const commands = keyword
    ? actions.filter(({ name }) => name.toLocaleLowerCase().includes(keyword))
    : actions;
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="pb-8 px-4">
          <div className="relative rounded-lg bg-slate-200 shadow-gravy">
            <input
              className="w-full rounded-lg py-2.5 pl-3.5 pr-10 bg-transparent focus:outline-none"
              name="keyword"
              onChange={onKeywordChange}
              placeholder="Search Command"
              value={keyword}
            />

            <span className="absolute top-1 right-1 p-2">
              <FontAwesomeIcon
                className="h-5 w-5 text-indigo-700"
                icon={faMagnifyingGlass}
              />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-flow-row gap-[35px] px-[30px] pb-6 pt-3 dark:text-white">
          {commands.map((action) => (
            <ActionTrigger key={uuid4()} action={action} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActionsPanel;
