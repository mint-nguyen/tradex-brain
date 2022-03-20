import { gql } from "@apollo/client";
export const GET_ALL_ITEMS = gql`
  query getAllItemsSortID {
    todoItems(paging: { first: 110 }, sorting: { direction: DESC, field: id }) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation deleteOneItem($id: ID!) {
    deleteOneTodoItem(input: { id: $id }) {
      id
      title
    }
  }
`;

export const EDIT_ITEM = gql`
  mutation editItem($id: ID!, $title: String!) {
    updateOneTodoItem(input: { id: $id, update: { title: $title } }) {
      id
      title
    }
  }
`;
