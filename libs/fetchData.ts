import { Dispatch, SetStateAction } from "react";
import { IData } from "../constants/data";
import { C_URL } from "../constants/url";

interface IFetchData {
  setData: Dispatch<SetStateAction<IData[]>>;
}

export async function fetchAllData(props: IFetchData) {
  try {
    // Fetch data from the server.
    // Whenever data is available,
    // push them to the defined state.
    const req = await fetch(`${C_URL.BACKEND_URL}/ext`);
    const res = await req.json();
    props.setData(res);
  } catch (error: any) {
    console.error(error.message);
  }
}

interface IFetchSpecific extends IFetchData {
  searchText: string;
  setNotFound: Dispatch<SetStateAction<boolean>>;
}

export async function fetchSpecific(props: IFetchSpecific) {
  try {
    // Fetch data from the server.
    // Whenever data is available,
    // push them to the defined state.
    const req = await fetch(`${C_URL.BACKEND_URL}/ext/${props.searchText}`);
    const res: IData = await req.json();

    if (res.statusCode === 404) {
      props.setNotFound(true);
      return props.setData([]);
    }

    props.setData([res]);
  } catch (error: any) {
    console.error(error.message);
  }
}
