import { Label } from "semantic-ui-react";

const SelectedOptions = ({ company, panel }) => {
    return (
        <>
            <Label color='teal'>
                { company }
            </Label>
            <Label color='yellow'>
                { panel }
            </Label>
        </>
    );
}

export default SelectedOptions;