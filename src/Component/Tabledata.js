import React from 'react';
import PropTypes from 'prop-types';

function Tabledata({offset, speed_in, speed_out, speed_total}){
    return(
            <tr>
                <td>{offset}</td>
                <td>{speed_in}</td>
                <td>{speed_out}</td>
                <td>{speed_total}</td>
            </tr>
    );
}

Tabledata.propTypes = {
    offset: PropTypes.number.isRequired,
    speed_in: PropTypes.number.isRequired,
    speed_out: PropTypes.number.isRequired,
    speed_total: PropTypes.number.isRequired,
}

export default Tabledata;