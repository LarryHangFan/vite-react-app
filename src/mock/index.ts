import { MockRequest } from './type';
import userApi from './user'
const mocks = [...userApi];
import Mock from "mockjs";

export default function mock() {
  let i: MockRequest;
  for (i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || "get", i.response);
  }
}