import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function DataSelect(props) {
    return (
        <FormControl
            className="addressSection__form"
            sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">{props.label}</InputLabel>
            <Select
                className="addressSection__select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={props.label}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
        </FormControl>
    )
}