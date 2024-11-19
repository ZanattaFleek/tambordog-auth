import { DataSource } from "typeorm";
import Usuario from "./sistema/Usuario";
import UsuarioSessao from "./sistema/UsuarioSessao";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "66.94.105.135",
  port: 3306,
  username: "fsd0043",
  password: "FleekPass@2023a",
  database: "producao_tambordog",
  synchronize: true,
  logging: false,
  entities: [
    Usuario,
    UsuarioSessao
  ],
  subscribers: [],
  migrations: [],
});
