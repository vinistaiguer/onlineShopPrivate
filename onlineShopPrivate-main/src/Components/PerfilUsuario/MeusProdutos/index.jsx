import React from "react";
import "../styles.css";

function MeusProdutos() {
    return(
            <div class="col-9 overflow-auto altura">
                <div class=" d-flex justify-content-center align-content-center m-5 border-bottom">
                    <h1 class="pb-3 link-secondary">Meus Produtos</h1>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <div class="col-11 overflow-auto">
                        <div class="d-flex border-bottom pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="link-secondary me-3 bi bi-emoji-frown" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                              </svg>
                              <h6>Voçê não publicou nenhum produto ainda.</h6>
                        </div>
                        <div class=" d-flex justify-content-center mt-5 pb-5 ">
                            <button class="btn btn-primary w-25 radius-0">Publicar Produto</button>
                        </div>

                    <div class="d-flex justify-content-center link-secondary pt-4 border-bottom"> 
                        <h2 class="pb-3">Minhas Vendas</h2>
                    </div>
                    <div class="d-flex border-bottom pb-3 pt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="link-secondary me-3 bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                          </svg>
                          <h6>Voçê não vendeu nenhum produto ainda.</h6>
                    </div>
                        
                    </div>
                </div>

            </div>
    )
}

export default MeusProdutos;