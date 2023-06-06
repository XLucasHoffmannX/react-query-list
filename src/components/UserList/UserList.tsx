import { Container } from "./UserList.styles";
import { api } from "../../api/api";
import { UserCard } from "../UserCard/UserCard";
import { useQuery } from "@tanstack/react-query";
import { EditModal } from "../EditModal/EditModal";
import { useState } from "react";
import { User } from "../../models/UserModel";

export function UserList(): JSX.Element {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const {data, isError, isLoading} = useQuery(["user-list"], api.getUsers);

  return (
    <Container>
      <h1>Lista de Usuários</h1>
      {isLoading && <h4>Carregando...</h4>}
      {isError && <h4>Ocorreu um problema...</h4>}
      {data?.map((user) => (
        <UserCard user={user} onClickEdit={()=> setSelectedUser(user)} />
      ))}

      {selectedUser && <EditModal user={selectedUser} show={!!selectedUser} handleClose={()=> setSelectedUser(null)}/> }
    </Container>
  );
}
