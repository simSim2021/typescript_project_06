// import LoginForm from "components/LoginForm/LoginForm";
import { PageWrapper, ContainerFacts, Card, Text } from "./styles";
import Button from "components/Button/Button";

function Lesson_09() {
  return (
    <PageWrapper>
      {/* <LoginForm /> */}
      <Card>
        <ContainerFacts>
          <Text></Text>
        </ContainerFacts>
        <Button name="Get cat fact"/>
      </Card>
    </PageWrapper>
  );
}
export default Lesson_09;