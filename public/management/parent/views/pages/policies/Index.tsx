import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/policies/all');
            setData(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    return (
        <div className="admin_dashboard">
            {data?.length &&
                data.map((i: { [key: string]: any }, index) => {
                    return (
                        <div>
                            <h6>Policy {index + 1}</h6>
                            <p>{i.title}</p>
                            <p>{i.description}</p>
                        </div>
                    );
                })}
        </div>
    );
};

export default Index;
