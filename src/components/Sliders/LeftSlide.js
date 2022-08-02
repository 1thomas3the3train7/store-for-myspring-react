import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState([200, 370]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={"leftmenu-slide-wrap"}>
            <h5 className={"leftmenu-h5"}>Цена</h5>
            <div className={"leftmenu-brd"}>
                <p className={"leftmenu-brd-p"}>
                    От : <p className="leftmenu-brd-p-p">{value[0]}</p>
                </p>
                <p className={"leftmenu-brd-p"}>
                    До : <p className={"leftmenu-brd-p-p"} >{value[1]}</p>
                </p>
            </div>
            <div>
                <Box sx={{ width: 335 }}>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={1000}
                    />
                </Box>
            </div>
        </div>

    );
}
