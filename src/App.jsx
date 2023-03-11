import Button from "./components/Button";
import { Input } from "./components/Input";
import { Container, Content, Row } from "./styles/styles";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstnumber] = useState("0");
  const [operation, setOperation] = useState('')

  const handleClearNumber = () => {
    setCurrentNumber("0");
    setFirstnumber("0");
    setOperation('')
  };

  const handleAddNumber = (number) => {
    console.log(number);
    setCurrentNumber((prev) => `${prev == "0" ? "" : prev}${number}`);
  };

  const handleSum = () => {
    if (firstNumber == "0") {
      setFirstnumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  };

  const handleSubtract = () => {
    if (firstNumber == "0") {
      setFirstnumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  };

  const handleMultiple = () => {
    if (firstNumber == "0") {
      setFirstnumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  };
  
  const handleDivision = () => {
    if (firstNumber == "0") {
      setFirstnumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  };

  const handleEquals = () => {
    if (firstNumber != "0" && operation != '' && currentNumber != '0') {
      switch (operation) {
        case '+':
          handleSum()
          break;

        case '-':
          handleSubtract()
          break;

        case '*':
          handleMultiple()
          break;

        case '/':
          handleDivision()
          break;
      
        default:
          break;
      }
  
    }
  };

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button onClick={() => handleAddNumber("0")}>0</Button>
          <Button onClick={handleDivision}>/</Button>
          <Button onClick={handleClearNumber}>C</Button>
          <Button onClick={handleMultiple}>x</Button>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber("7")}>7</Button>
          <Button onClick={() => handleAddNumber("8")}>8</Button>
          <Button onClick={() => handleAddNumber("9")}>9</Button>
          <Button onClick={handleSubtract}>-</Button>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber("4")}>4</Button>
          <Button onClick={() => handleAddNumber("5")}>5</Button>
          <Button onClick={() => handleAddNumber("6")}>6</Button>
          <Button onClick={handleSum}>+</Button>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber("1")}>1</Button>
          <Button onClick={() => handleAddNumber("2")}>2</Button>
          <Button onClick={() => handleAddNumber("3")}>3</Button>
          <Button onClick={handleEquals}>=</Button>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
