import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LoginContext } from "../../../providers/loginProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { LinkRegister, StyledFormLogin } from "./styled";
interface ILoginForm {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const { loginRequest } = useContext(LoginContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledFormLogin onSubmit={handleSubmit(loginRequest)}>
      <h2>Bem vindo</h2>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email")} id="email" placeholder="Email"/>
        <span>{errors.email?.message}</span>
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha:</label>
        <input type="password" {...register("password")} id="password" placeholder="Senha"/>
        <span>{errors.password?.message}</span>
      </fieldset>
      <fieldset className="loginBtn">
        <button type="submit">Entrar</button>
      </fieldset>
      <LinkRegister to="/register">Cadastre-se</LinkRegister>
    </StyledFormLogin>
  );
};
