import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function DataSelect(props) {

    const onChange = (e) => {
        props.handleChange(e.target.value);
    }

    return (
        <FormControl
            className="addressSection__form"
            disabled={props.isEnable}
        >
            <InputLabel id="demo-simple-select-autowidth-label">{props.label}</InputLabel>
            <Select
                className="addressSection__select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={props.label}
                onChange={onChange}
            >
                {
                    props.list.map(item => (
                        <MenuItem
                            key={item.id}
                            value={item.id}
                        >
                            {item.name}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}