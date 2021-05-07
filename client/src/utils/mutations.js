const { gql } = require('apollo-server-express');

import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

import gql from 'graphql-tag';

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: bookInput) {
    saveBook(bookData: bookInput) {
        user {
            _id
            username
            email
            password
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: ID!) {
        _id
        username
        email
        password
        savedBooks{
            bookId
            authors
            description
            title
            image
            link
      }
    }
  }
`;