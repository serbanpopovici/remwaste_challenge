import React from 'react';
import { Option } from '../types/options';

interface Props {
    option: Option;
    selectedOption: Option;
    setSelectedOption: Function;
}

const OptionCard: React.FC<Props> = (props: Props) => {
    const handleOptionSelection = () => {
        if (props.option.forbidden)
            return;

        props.setSelectedOption(props.option);
    }

    return (
        <div onClick={() => handleOptionSelection()}>
            {props.option.id}
        </div>
    );
}

export default OptionCard;