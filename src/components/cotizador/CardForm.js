import React from 'react'
import { TitlePart } from './TitleForm'

export const CardForm = () => {
    return (
        <div className="__card_content_form ">
            <div className="container ">
                <div className="container__row mb-35"> 

                    <div className="container__col-6">

                        <div className="__card_form_control">
                                <label  >MODELO</label>
                                <select >
                                    <option>SELECCIONA</option>
                                </select>
                        </div>
                    </div>
                    <div className="container__col-6">
                        <div className="__card_form_control">
                            <label >VERSIÓN</label>
                            <select>
                                <option>SELECCIONA</option>
                            </select>
                        </div>
                    </div>
                    <div className="container__col-6">
                        <div className="__card_form_control">

                        <label >ESTADO</label>
                        <select>
                            <option>SELECCIONA</option>
                        </select>
                        </div>
                    </div>
                    <div className="container__col-6">
                        <div className="__card_form_control">

                        <label >DISTRIBUIDOR</label>
                        <select>
                            <option>SELECCIONA</option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>

            <TitlePart header="Datos personales" subtitle="ESCRIBE TUS DATOS PERSONALES"/>
            <div className="container">
                <div className="container__row mt-25"> 

                    <div className="container__col-4">

                    <div className="__card_form_control">
                            <label >NOMBRE (S)</label>
                            <input type="text" placeholder="ESCRIBE TU NOMBRE"/>
                        </div>
                    </div>
                    <div className="container__col-4">
                        <div className="__card_form_control">
                            <label >APELLIDO PATERNO</label>
                            <input type="text"  placeholder="ESCRIBE TU APELLIDO"/>
                        </div>
                    </div>
                    <div className="container__col-4">
                        <div className="__card_form_control">

                        <label >APELLIDO MATERNO</label>
                            <input type="text"  placeholder="ESCRIBE TU APELLIDO"/>
                        </div>
                    </div>
                    <div className="container__col-4">
                        <div className="__card_form_control">

                            <label htmlFor="email" >EMAIL</label>
                            <input type="text" placeholder="TUEMAIL@EMAIL.COM"/>
                        </div>
                    
                    </div>
                    <div className="container__col-4">
                        <div className="__card_form_control">

                        <label >TELÉFONO</label>
                        <input type="text"  placeholder="0184443906"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ">
        
                    <div className="container__col-12 mt-35 mb-35">
                        <div className="__card_form_control">
                            <label >DESEO SER CONTACTADO POR</label>
                            <div className="__card_form_radios">
                                <div className="__form_radio">
                                    <input type="radio"  id="telefono" name="contacto" />
                                    <label htmlFor="telefono" >
                                        <i class="fas fa-phone-alt"></i>
                                        <span>TELÉFONO  </span>
                                    </label>
                                </div>

                                <div className="__form_radio"  >
                                    <input type="radio" id="email" name="contacto" />
                                    <label htmlFor="email"  >
                                        <i className="fas fa-envelope"></i>
                                        <span>EMAIL</span>
                                    </label>
                                </div>

                                <div className="__form_radio">
                                    <input type="radio"  id="ambos" name="contacto" />
                                    <label htmlFor="ambos">
                                        
                                        <span>AMBOS</span>
                                    </label>

                                </div>

                            </div>
                        </div>
                    </div>
            </div>
<div className="__form_middle">
    <div className="__form_middle_pay">

            <TitlePart header="Forma de pago" subtitle="PERZONALIZA TU COTIZACIÓN" />
    </div>

            <div className="container  __form_middle_separation">
            <div className="container__col-12 mt-35 mb-35">
                        <div className="__card_form_control">
                            <label >ELIJE TU TIPO DE PAGO</label>
                            <div className="__card_form_radios">
                                <div className="__form_radio">
                                    <input  type="radio" id="contado" name="pay" />
                                    <label htmlFor="contado"  >
                                        <span>CRÉDITO</span>
                                    </label>
                                </div>

                                <div className="__form_radio"  >
                                    <input  type="radio" id="credit" name="pay"  />
                                    <label htmlFor="credit"  >
                                        <span>CRÉDITO</span>
                                    </label>
                                </div>


                            </div>
                        </div>
                    </div>
            </div>


            <div className="container __form_middle_separation">
                <div className="container__row mt-35 mb-35">
                    <div className="container__col-6">
                        <div className="__card_form_control">
                        <label  >CANTIDAD DE ENGANCHE</label>
                        <input  type="number" value="80000.00" step="0.01" min="0.0"/>
                              
                        </div>
                    </div>
                    <div className="container__col-6">
                    <div className="__card_form_control">
                        <label  >PLAZO</label>
                                <select >
                                    <option>SELECCIONA</option>
                                    <option>La segunda opción</option>
                                    <option>La tercera opción</option>
                                </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <TitlePart header="Comentarios" subtitle="NOS IMPORTAN TUS COMENTARIOS"/>
            </div>

            <div className="container">
                <div className="container__row  mt-35 mb-35">

                    <div className="container__col-12">

                <div className="__card_form_control">
                            <label  >¿DUDAS? ¿COMENTARIOS?</label>
                                <textarea placeholder="ESCRÍBENOS" className="outline-primary" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                </div>
            </div>


            <div className="__card_form_footer">
                    <div className="__form_footer_item">
                        <div className="__form_checkbox">

                            <label htmlFor="condition1" >
                                He leído y acepto el <span>aviso de privacidad</span>
                                <input type="checkbox" id="condition1" name="condition1"/>
                                <span className="checkbox_item"></span>
                            </label>

                        </div>
                         

                            <div className="__form_checkbox">

                            <label htmlFor="condition2" >
                                No deseo recibir promociones
                                <input type="checkbox" id="condition2" name="condition1"/>
                                <span className="checkbox_item"></span>
                            </label>
                            </div>
                        
                            
                  
                    </div>
                    <div className="__form_footer_item end-button">
                         <button>ENVIAR</button>   
                    </div>
             
            </div>
          

        </div>
    )
}
