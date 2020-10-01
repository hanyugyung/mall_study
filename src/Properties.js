import * as GlobalVar from "./GlobalVar";

export function getBackendUrl(api) { //ex http://localhost:8080/v1/api/user
  return "http://localhost:" + GlobalVar.PORT + "/" + GlobalVar.VER + "/api/" + api;
}
