import { Cat } from "../models/cat.model";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function fetchCats(): Promise<Cat[]> {
  return await axios.get("https://api.thecatapi.com/v1/breeds");
}
