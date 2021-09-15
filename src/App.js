import { Row, Col } from 'antd'

import Header from "./Components/Header";
import _Table from "./Components/Table";

function App() {
  return (
    <>    
      <Header /> 
      <Row>
      <Col xs={24} md={{span: 12, offset: 6}}>
        <_Table /> 
      </Col> 
       </Row> 
    </>
  );
}

export default App;
