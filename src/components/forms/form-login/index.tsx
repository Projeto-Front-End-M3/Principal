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
        <input type="email" {...register("email")} />
        <span>{errors.email?.message}</span>
      </fieldset>
      <fieldset>
        <input type="password" {...register("password")} />
        <span>{errors.password?.message}</span>
      </fieldset>
      <fieldset>
        <button type="submit">Entrar</button>
      </fieldset>
      <LinkRegister to="/register">Cadastre-se</LinkRegister>
    </StyledFormLogin>
  );
};
