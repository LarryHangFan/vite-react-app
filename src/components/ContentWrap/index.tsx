import { Card } from "antd";
import { ReactNode } from "react";

interface Props {
  children?: any
}

const Wrap: React.FC<Props> = (props) => {
  return <>
    <Card style={{ margin: '24px' }}>
      {props.children}
    </Card>
  </>
}
export default Wrap;