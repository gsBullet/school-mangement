import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment/moment';

export interface Props {
    value: string | null;
    name: string;
    handler: (data: { [key: string]: any }) => void;
}

interface TargetWithPicker {
    showPicker?: () => void;
}

export function formated_date(value) {
    if (value) {
        return moment(value).format('DD MMMM YYYY');
    } else {
        return moment().format('DD MMMM YYYY');
    }
}

const DateEl: React.FC<Props> = ({ value, name, handler }: Props) => {
    const date_input = useRef<HTMLInputElement>(null);
    const [input_value, setInput_value] = useState<string | null>(null);

    useEffect(() => {
        setInput_value(value);

        return () => {
            setInput_value(null);
        };
    }, []);

    function date_handler() {
        if (date_input.current) {
            const input_value = date_input.current.value;
            setInput_value(input_value);
            handler({
                [name]: input_value,
                key: name,
                value: input_value,
            });
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as TargetWithPicker | null;
        if (target?.showPicker) {
            target.showPicker();
        }
    };

    return (
        <label
            htmlFor={name}
            className="text-capitalize d-block date_custom_control"
        >
            <input
                type="date"
                ref={date_input}
                onClick={(e) => handleClick(e)}
                id={name}
                name={name}
                onChange={date_handler}
                className="form-control"
            />
            <div className="form-control preview">
                {input_value && formated_date(input_value)}
            </div>
        </label>
    );
};

export default DateEl;
