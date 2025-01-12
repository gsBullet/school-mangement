import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            name: 'Shahin',
            class: 'Six',
            roll: '023',
            purpose: 'Class bunk',
            date: '23 Feb, 2024',
        },
        {
            id: 1,
            name: 'Tamim',
            class: 'Seven',
            roll: '055',
            purpose: 'Absence',
            date: '10 Feb, 2024',
        },
        {
            id: 1,
            name: 'Ramim',
            class: 'Six',
            roll: '101',
            purpose: 'Lately sleeping',
            date: '14 June, 2024',
        },
        {
            id: 1,
            name: 'Nayeem',
            class: 'Six',
            roll: '023',
            purpose: 'Smoking',
            date: '28 March, 2024',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <div>
                    <h3 className="table_heading">Information</h3>
                    <table className="table hostel_super_student text-nowra">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>:</td>
                                <td className="font-medium text-dark-medium">
                                    Nayeem Hossain
                                </td>
                            </tr>
                            <tr>
                                <td>Class</td>
                                <td>:</td>
                                <td className="font-medium text-dark-medium">
                                    Six
                                </td>
                            </tr>
                            <tr>
                                <td>Roll</td>
                                <td>:</td>
                                <td className="font-medium text-dark-medium">
                                    023
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td className="font-medium text-dark-medium">
                                    masud1@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Phone number</td>
                                <td>:</td>
                                <td className="font-medium text-dark-medium">
                                    01897867563
                                </td>
                            </tr>
                            <tr>
                                <td>Parent</td>
                                <td>:</td>
                                <td className="font-medium text-dark-medium">
                                    Abdur Rahman
                                </td>
                            </tr>
                            <tr>
                                <td>Parent number</td>
                                <td>:</td>
                                <td className="font-medium text-dark-medium">
                                    01897867563
                                </td>
                            </tr>
                            <tr>
                                <td>Stutas</td>
                                <td>:</td>
                                <td className="font-medium text-dark-medium">
                                    Active
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <h3>Details</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione quaerat fuga perferendis, placeat
                            nihil id asperiores? Excepturi mollitia amet
                            molestiae a earum iusto eum vel esse consectetur
                            quos doloribus cupiditate exercitationem,
                            dignissimos fuga facere nam eaque ipsum iure itaque
                            neque? Cupiditate quae quam dolorem. Nobis, et
                            laborum maxime nulla asperiores culpa eius
                            voluptatibus quo ratione. Sit neque eum mollitia
                            accusantium iusto assumenda, dolore numquam libero,
                            aspernatur ipsa facere soluta dolorum magnam at!
                            Quos, harum officia. Veritatis amet eaque quisquam
                            non minima dolor corrupti aut. Voluptate velit, amet
                            officiis perferendis dignissimos officia reiciendis.
                            Labore corporis minus, libero obcaecati
                            consequuntur, inventore facilis recusandae debitis
                            rem omnis ad. Eum, numquam corrupti sed repellat
                            doloremque sequi incidunt provident porro rem animi
                            quae voluptatem cum ratione ad ullam, eaque
                            accusantium ab blanditiis hic nostrum voluptate
                            itaque quibusdam? Asperiores quas ipsa quo, deserunt
                            fuga sequi repellendus. Ut quidem expedita velit,
                            soluta laudantium incidunt quae eum iusto?
                        </p>
                    </div>
                </div>
                {/* <Link
                    to="/complain/create"
                    className="btn btn-sm btn-outline-info mb-2"
                    type="submit"
                >
                    Make a Complain
                </Link>
                <form action="">
                    <div className="teacher_result">
                        <div>
                            <div>Month</div>
                            <div>
                                <input type="date" name="month" id="" />
                            </div>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-info "
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                </form> */}
                {/* <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Roll</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.class}</td>
                                            <td>{i.roll}</td>
                                            <td>{i.purpose}</td>
                                            <td>{i.date}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Index;
