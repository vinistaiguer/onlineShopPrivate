import React from "react";
import "../styles.css";

function DadosPerfil(){
    return(
        <div className="col-9 pb-2 overflow-auto altura">
            <div className=" d-flex justify-content-center align-content-center m-5 border-bottom">
                <h1 className="pb-3 link-secondary">Bem vindo, Matheus Orozimbo</h1>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="col-11 overflow-auto">
                    <h5 className="link-secondary">Nome</h5>
                    <p className="border-bottom"><input type="text" placeholder="First name" className="input_dados_perfil" disabled/></p>
                    <h5 className="link-secondary">Sobrenome</h5>
                    <p className="border-bottom"><input type="text" value="Usuário Usuário" className="input_dados_perfil" disabled/></p>
                    <h5 className="link-secondary">Celular</h5>
                    <p className="border-bottom"><input type="text" value="(XX)X XXXX-XXXX" className="input_dados_perfil" disabled/></p>
                    <h5 className="link-secondary">CEP</h5>
                    <p className="border-bottom"><input type="text" value="00.000-000" className="input_dados_perfil" disabled/></p> 
                    <div className="d-flex">
                        <div className="col-9">
                            <h5 className="link-secondary">Rua</h5>
                            <p className="border-bottom"><input type="text" value="R: 7 de Setembro" className="input_dados_perfil" disabled/></p>
                        </div>
                        <div className="col-3">
                            <h5 className="link-secondary">Número</h5>
                            <p className="border-bottom"><input type="text" value="00" className="input_dados_perfil" disabled/></p>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-end pt-3">
                        <button className=" btn btn-danger m-1 w-25 ">Alterar</button>
                        <button className="btn btn-success m-1 w-25 ">Salvar</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DadosPerfil;