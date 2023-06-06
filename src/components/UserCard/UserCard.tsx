import { Button, Image } from "react-bootstrap";
import { Container, Content } from "./UserCard.styles";
import { User } from "../../models/UserModel";

interface Props {
    user: User;
    onClickEdit: ()=> void;
}

export function UserCard({user, onClickEdit}: Props): JSX.Element {
  return (
        <Container>
            <Image roundedCircle src={user.avatar} />
            <Content>
                <h3>{user.name}</h3>
                <Button
                    onClick={onClickEdit}
                    style={{width: "100px"}}
                    variant="primary"
                >Editar</Button>
            </Content>
        </Container>
  )
}
