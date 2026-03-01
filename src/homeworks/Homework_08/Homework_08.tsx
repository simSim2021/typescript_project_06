import {PageWrapper} from "./styles";
import Button from "components/Button/Button";

import Input from "components/Input/Input";

function Homework_08 (){

    return (
    <PageWrapper>
        <Button name="Simple Button" />
        <Button isRed = {true} name="Delete Button" />
        <Button disabled  name="Disabled Button" />
        <Input id="first_input" name="simple_input" label="first_input"/>
        <Input id="second_input" name="simple_input" label="second_input"/>
    </PageWrapper>
    )
};

export default Homework_08;