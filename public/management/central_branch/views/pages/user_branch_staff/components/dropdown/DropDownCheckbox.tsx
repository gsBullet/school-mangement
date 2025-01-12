import React from 'react';
import { anyObject } from '../../../../../common_types/object';
export interface Props {
    item: anyObject;
    selectedList: anyObject[];
    setSelectedList: React.Dispatch<React.SetStateAction<anyObject[]>>;
}

const DropDownCheckbox: React.FC<Props> = ({
    item,
    selectedList,
    setSelectedList,
}) => {
    /** handlers */
    function select_item() {
        let temp = [...selectedList];
        let checkExist = temp.findIndex((i) => i.id === item.id);
        if (checkExist >= 0) {
            temp.splice(checkExist, 1);
        } else {
            temp.push(item);
        }
        setSelectedList(temp);
    }

    function is_checked(): boolean {
        return selectedList.find((i) => i.id === item.id) ? true : false;
    }

    return (
        <input
            onChange={select_item}
            defaultChecked={is_checked()}
            type="checkbox"
            id={`drop_item_${item.id}`}
            className="form_checkbox"
        />
    );
};

export default DropDownCheckbox;
