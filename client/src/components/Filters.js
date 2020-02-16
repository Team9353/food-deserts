import React, {useState} from "react";
import { Dropdown, Form, Radio } from "semantic-ui-react";
import "./css/filters.css";

function Filters(props) {
    const [value, setValue] = useState(null);
    const handleChange = (event, {value}) => setValue(value);

    const priceOptions = [
        {
            key: "$",
            text: "$",
            value: 1,
        },
        {
            key: "$$",
            text: "$$",
            value: 2,
        },
        {
            key: "$$$",
            text: "$$$",
            value: 3,
        },
    ];

    const travelOptions = [
        {
            key: "10",
            text: "10 minutes",
            value: 10,
        },
        {
            key: "20",
            text: "20 minutes",
            value: 20,
        },
        {
            key: "25",
            text: "25 minutes",
            value: 25,
        },
        {
            key: "30",
            text: "30 minutes",
            value: 30,
        },
        {
            key: "40",
            text: "40 minutes",
            value: 40,
        },
        {
            key: "+50",
            text: "+50 minutes",
            value: 50,
        },
    ];

    const transportOptions = [
        {
            key: "walking",
            text: "Walking",
            value: 2,
        },
        {
            key: "car",
            text: "Car",
            value: 35,
        },
        {
            key: "public_transportation",
            text: "Public Transportation",
            value: 15,
        },
        {
            key: "biking",
            text: "Biking",
            value: 6,
        },
    ];

    return (
        <div>
            <Form id = "filter">
                <Form.Field>
                    How much money are you looking to spend?
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="$"
                        name="radioGroup"
                        value="this"
                        checked={value === "this"}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="$$"
                        name="radioGroup"
                        value="that"
                        checked={value === "that"}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="$$$"
                        name="radioGroup"
                        value="that2"
                        checked={value === "that2"}
                        onChange={handleChange}
                    />
                </Form.Field>
            </Form>

            <div id="filter">
                <p> Select time amount of time you would be willing to travel up to: </p>
                <Dropdown
                    placeholder="Select Time"
                    fluid
                    selection
                    options={travelOptions}
                />
            </div>
            <div id="filter">
                <p> Select your preferred mode of transportation: </p>
                <Dropdown
                    placeholder="Select Transportation"
                    fluid
                    selection
                    options={transportOptions}
                />
            </div>
        </div>
    );

}

export default Filters;