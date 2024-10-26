import AnimationWrapper from './AnimationWrapper';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EventSchedule = () => {

  const [tercerS, settercerS] = useState(false);
  const tercerHid = () => settercerS(false);
  const tercerShow = () => settercerS(true);


  const [quartoS, setquartoS] = useState(false);
  const quartoHid = () => setquartoS(false);
  const quartoShow = () => setquartoS(true);

  const [sestoS, setsestoS] = useState(false);
  const sestoHid = () => setsestoS(false);
  const sestoShow = () => setsestoS(true);

  const [septS, setseptS] = useState(false);
  const septHid = () => setseptS(false);
  const septShow = () => setseptS(true);

  const [octavoS, setoctavoS] = useState(false);
  const octavoHid = () => setoctavoS(false);
  const octavoShow = () => setoctavoS(true);

  const [diezS, setdiezS] = useState(false);
  const diezHid = () => setdiezS(false);
  const diezShow = () => setdiezS(true);

  const [onceS, setonceS] = useState(false);
  const onceHid = () => setonceS(false);
  const onceShow = () => setonceS(true);

  const [doceS, setdoceS] = useState(false);
  const doceHid = () => setdoceS(false);
  const doceShow = () => setdoceS(true);

  return (
    <section id="events" className="event-schedule-section">

      <AnimationWrapper animation="fade-up" duration={1500}>

      <h2 className="text-center margin-top">Horario del Evento</h2>
      <h2 className="text-center margin-top">Madrid; Viernes 22 de Noviembre de 2024</h2>
      <div className="container mt-5">
        <div className="row">

          {/* 1 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardBernabeu">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Registro:</span>Salon Actos</h5>
                <p className="card-text">9:00 AM - 60 min</p>
                <p>Registro de clientes y organización.</p>
              </div>
            </div>
          </div>

          {/* 2 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardBernabeuD">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Inicio:</span>Salon Actos</h5>
                <p className="card-text">10:00 AM - 30 min</p>
                <p>Establecer el tono del evento y dar la bienvenida a los asistentes.</p>
              </div>
            </div>
          </div>

          {/* 3 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardcuatroT">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">10:30 PM - 50 min</p>
                <p>Navegando por el caos: un enfoque holístico para la gestión de incidentes.</p>
                <p>Hila Fish</p>

                <button onClick={tercerShow} className="button menu-btn">Más Detalles</button>

                <Modal 
                    show={tercerS} 
                    onHide={tercerHid} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Navegando por el caos: un enfoque holístico para la gestión de incidentes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    La gestión de incidentes puede ser un desafío y generar problemas inesperados, lo que da como resultado la pérdida de datos, tiempos de inactividad y, en general, una pérdida de dinero y horas de sueño, pero hay cosas prácticas que puede hacer para que sea un proceso más fluido y gestionarlo mejor.
                    <br />
                    <br />
                    En esta charla, cubriré las formas proactivas que puede adoptar e incorporar a su rutina diaria, con el fin de prepararse para un proceso de gestión de incidentes más fluido y eficiente. Esto incluye formas de mantenerse actualizado regularmente sobre problemas y cambios en la producción, transferencias de guardia, ser una persona de referencia, etc.
                    <br />
                    <br />
                    También mostraré las mejores prácticas que he finalizado a lo largo de los años que me ayudaron a obtener una visión clara de cómo gestionar incidentes de producción de la manera más rápida y eficiente posible.
                    <br />
                    <br />
                    Adoptar los consejos que le daré le garantizará que no solo hablará con el ejemplo, sino que también actuará en lo que respecta a la gestión de incidentes.
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <p className="card-text" style={{ textAlign: 'left', margin: '0', padding: '0' }}>Hila Fish</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p className="card-text" style={{ margin: '0', padding: '0' }}>
                                10:30 PM - 50 min
                            </p>
                        </div>
                    </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

          {/* 4 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardcuatroTD">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">11:20 PM - 40 min</p>
                <p>Un puente entre MLOps y DevOps con OpenShift AI.</p>
                <p>Juan Vicente Herrera Ruiz de Alejo</p>

                <button onClick={quartoShow} className="button menu-btn">Más Detalles</button>

                <Modal 
                    show={quartoS} 
                    onHide={quartoHid} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Navegando por el caos: un enfoque holístico para la gestión de incidentes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Red Hat OpenShift AI (RHOAI) es una plataforma para que científicos de datos, profesionales de IA, desarrolladores, ingenieros de aprendizaje automático y equipos de operaciones prototipen, construyan, implementen y monitoreen modelos de IA. Mostraremos como usarla en una demo en vivo.
                    <br />
                    <br />
                    Una de las principales dificultades a las que se enfrentan los proyectos de IA es la brecha entre la ciencia de datos y la ingeniería. Los equipos de ingeniería y operaciones no siempre están familiarizados con las complejidades de la inteligencia artificial, la ciencia de datos y el aprendizaje automático. Del mismo modo, los científicos de datos a veces carecen de los recursos de ingeniería y la experiencia para crear, implementar y monitorear modelos en entornos de nube modernos.
                    <br />
                    <br />
                    Las operaciones de aprendizaje automático (MLOps) ayudan a las organizaciones a resolver este desafío. MLOps se inspira en los principios de DevOps y aporta muchos de los beneficios de DevOps a los proyectos de IA, optimizando todo el ciclo de vida de los modelos de ML.
                    <br />
                    <br />
                    Operacionalizar el ciclo de vida del ML: Muchas organizaciones luchan por llevar sus modelos de IA más allá de las etapas de capacitación porque los equipos que entrenan estos modelos carecen de las herramientas para implementar, entregar y mantener sistemas basados ​​en IA en producción. Para resolver este problema, RHOAI proporciona herramientas como entornos de trabajo estables, canales de integración y despliegue continuos (CI/CD) y marcos de servicio de modelos.
                    <br />
                    <br />
                    Con estas herramientas, los usuarios pueden poner en funcionamiento sus flujos de trabajo de aprendizaje automático y lograr reproducibilidad, impulsar la automatización, una mejor colaboración, ahorro de costos y una mejor gobernanza y cumplimiento.
                    <br />
                    <br />
                    Entornos de trabajo de aprendizaje automático complejos: Los profesionales de la IA a menudo luchan por integrar y mantener la gran cantidad de herramientas, bibliotecas y versiones necesarias para la ciencia de datos y el aprendizaje automático, incluido el importante esfuerzo necesario para configurar el soporte y los controladores de GPU y mantenerlos actualizados. RHOAI proporciona a los científicos de datos entornos de trabajo listos para usar que están preconfigurados con bibliotecas y herramientas estándar de IA/ML.
                    <br />
                    <br />
                    Se mostrará como ejecutar en la plataforma trainings y tests de sencillos modelos (LLMs) en una demo en tiempo real.
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <p className="card-text" style={{ textAlign: 'left', margin: '0', padding: '0' }}>Juan V. H. Ruiz de Alejo</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p className="card-text" style={{ margin: '0', padding: '0' }}>
                            11:20 PM - 40 min
                            </p>
                        </div>
                    </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

          {/* 5 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardgranV">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">12:00 PM - 60 min</p>
                <p>Pausa para café.</p>
                <br />
                <p>Breack.</p>
              </div>
            </div>
          </div>
      
          {/* 6 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardmanzanares">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">13:00 PM - 60 min</p>
                <p>Ambientes efímeros con Serverless y Custom Resources.</p>
                <p>Oscar Cortes Bracho</p>

                <button onClick={sestoShow} className="button menu-btn">Más Detalles</button>

                <Modal 
                    show={sestoS} 
                    onHide={sestoHid} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Navegando por el caos: un enfoque holístico para la gestión de incidentes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Uno de los principales problemas que encontramos cuando trabajamos con Serverless a nivel arquitectura, es el paso de los ambientes de desarrollo y testing a los ambientes productivos, la misma naturaleza del Serverless hace que sea complejo la validación de manera local delas nuevas funcionalidades, esto conlleva tener que validar las features en el Cloud provider directamente que dependiendo de distintos factores puede ser un cuello de botella.
                    <br />
                    <br />
                    Aquí es donde aparecen los ambientes de desarrollo efímeros que puedan vivir lo que la funcionalidad demore desarrollándose; sin embargo, esto no es tan simple de implementar en la práctica
                    <br />
                    <br />
                    Por otro lado, tenemos la dificultad de que necesitamos hidratar con datos los ambientes de Test y Desarrollo para validar nuestras funcionalidades, y además en ocasiones la necesidad de personalizarlos, para esto herramientas como Custom Resources con CloudFormation pueden ser de mucha utilizar
                    <br />
                    <br />
                    El objetivo de esta charla será mostrar como construir ambientes efímeros en GitLab CI/CD
                    que acompañen el ciclo de vida de una funcionalidad, desplegar en AWS ante la creación de la rama y destruirlos ante la propuesta del un Merge Request, customizando recursos como las bases de datos en estos ambientes, hidratando con datos específicos.
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <p className="card-text" style={{ textAlign: 'left', margin: '0', padding: '0' }}>Oscar Cortes Bracho</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p className="card-text" style={{ margin: '0', padding: '0' }}>
                            13:00 PM - 60 min
                            </p>
                        </div>
                    </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

          {/* 7 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardmanzanaresD">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">14:00 PM - 50 min</p>
                <p>SDLC con OWASP.</p>
                <p>Gabriela García</p>

                <button onClick={septShow} className="button menu-btn">Más Detalles</button>

                <Modal 
                    show={septS} 
                    onHide={septHid} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>SDLC con OWASP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Discutimos cómo integrar la seguridad en cada etapa del SDLC, desde la planificación hasta el mantenimiento, para crear aplicaciones robustas y seguras utilizando las directrices, elementos y software de OWASP para crear un "framework" propio de seguridad para desarrolladores.
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <p className="card-text" style={{ textAlign: 'left', margin: '0', padding: '0' }}>Gabriela García</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p className="card-text" style={{ margin: '0', padding: '0' }}>
                            14:00 PM - 50 min
                            </p>
                        </div>
                    </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

          {/* 8 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardmetropolitano">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">14:50 PM - 50 min</p>
                <p>Creación de una plataforma de datos nativa de la nube teniendo en cuenta la seguridad.</p>
                <p>Natalie Godec</p>

                <button onClick={octavoShow} className="button menu-btn">Más Detalles</button>

                <Modal 
                    show={octavoS} 
                    onHide={octavoHid} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Creación de una plataforma de datos nativa de la nube teniendo en cuenta la seguridad</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Discutimos cómo integrar la seguridad en cada etapa del SDLC, desde la planificación hasta el mantenimiento, para crear aplicaciones robustas y seguras utilizando las directrices, elementos y software de OWASP para crear un "framework" propio de seguridad para desarrolladores.
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <p className="card-text" style={{ textAlign: 'left', margin: '0', padding: '0' }}>Natalie Godec</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p className="card-text" style={{ margin: '0', padding: '0' }}>
                            14:50 PM - 50 min
                            </p>
                        </div>
                    </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

          {/* 9 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardmetropolitanoD">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">16:30 PM - 60 min</p>
                <p>Lunch.</p>
                <br />
                <p>Breack.</p>
              </div>
            </div>
          </div>

          {/* 10 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardministerios">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">18:15 PM - 50 min</p>
                <p>Proteger las cargas de trabajo de Kubernetes: del código al clúster.</p>
                <p>Álvaro Revuelta M.</p>

                <button onClick={diezShow} className="button menu-btn">Más Detalles</button>

                <Modal 
                    show={diezS} 
                    onHide={diezHid} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Proteger las cargas de trabajo de Kubernetes: del código al clúster</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Esta charla se centra en proteger las cargas de trabajo de Kubernetes y recorrer todo el proceso; desde la codificación hasta la implementación. Cubre la protección de imágenes de contenedores, la configuración de políticas y la garantía de una comunicación segura entre microservicios. Además de escanear continuamente en busca de vulnerabilidades descubiertas recientemente.
                    <br />
                    <br />
                    Los asistentes aprenderán a utilizar herramientas como Kube-hunter y Trivy para gestionar vulnerabilidades y garantizar que sus clústeres permanezcan seguros a lo largo del tiempo.
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <p className="card-text" style={{ textAlign: 'left', margin: '0', padding: '0' }}>Álvaro Revuelta M.</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p className="card-text" style={{ margin: '0', padding: '0' }}>
                            18:15 PM - 50 min
                            </p>
                        </div>
                    </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

          {/* 11 Evento */}
          <div className="col-md-6 mb-4">
            <div className="card cardministeriosD">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">19:05 PM - 50 min</p>
                <p>Istio Ambient Mesh: Sidecar vs Sidecar-less como si tuviera 10 años.</p>
                <p>Antonio Berben</p>

                <button onClick={onceShow} className="button menu-btn">Más Detalles</button>

                <Modal 
                    show={onceS} 
                    onHide={onceHid} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Istio Ambient Mesh: Sidecar vs Sidecar-less como si tuviera 10 años</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    En esta charla explicaremos en un inglés sencillo y sin palabras de moda la diferencia entre el modelo con Sidecar y el modelo sin Sidecar.
                    <br />
                    <br />
                    Para Service Meshes, el modelo sidecar era la única forma viable de garantizar que la malla pudiera tomar el control de la red de aplicaciones.
                    <br />
                    <br />
                    Con la evolución de Kubernetes, esa afirmación ha quedado obsoleta.
                    <br />
                    <br />
                    Hoy, Istio Service Mesh ha traído la alternativa. Un modelo que reduce la cantidad de recursos necesarios para hacer posible la malla y elimina la sensación de que Istio está ahí.
                    <br />
                    <br />
                    Con Istio Ambient Mesh, el usuario que implementa una carga de trabajo en Kubernetes no nota que la aplicación es parte de una malla. Es totalmente transparente.
                    <br />
                    <br />
                    Conclusiones clave:
                    <br />
                    - Concepto de malla de servicios.
                    <br />
                    - Concepto de sidecar.
                    <br />
                    - Concepto de Sidecar-less.
                    <br />
                    - Desafíos resueltos por el modo sin Sidecar en comparación con el modo Sidecar.
                    <br />
                    - Istio Ambient Mesh y sus componentes.
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <p className="card-text" style={{ textAlign: 'left', margin: '0', padding: '0' }}>Antonio Berben</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p className="card-text" style={{ margin: '0', padding: '0' }}>
                            19:05 PM - 50 min
                            </p>
                        </div>
                    </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

          {/* 12 Evento */}
         <div className="col-md-6 mb-4">
            <div className="card cardplazaM">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">19:55 PM - 70 min</p>
                <p>Instalación de Whonix en QEMU/KVM.</p>
                <p>Pablo Gómez - Caldito</p>

                <button onClick={doceShow} className="button menu-btn">Más Detalles</button>

                <Modal 
                    show={doceS} 
                    onHide={doceHid} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Instalación de Whonix en QEMU/KVM</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Después de asistir a este taller, habrá instalado Whonix en su computadora portátil sobre QEMU/KVM. También mostrará cómo funciona QEMU/KVM como una mejor alternativa a los hipervisores propietarios.
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <p className="card-text" style={{ textAlign: 'left', margin: '0', padding: '0' }}>Pablo Gómez - Caldito</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p className="card-text" style={{ margin: '0', padding: '0' }}>
                            19:55 PM - 70 min
                            </p>
                        </div>
                    </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

          {/* 13 Evento */}
         <div className="col-md-6 mb-4">
            <div className="card cardpuertaA">
              <div className="overlay"></div>
              <div className="card-body text-white">
                <h5 className="card-title"><span className='heading'>Taller:</span>Salon Actos</h5>
                <p className="card-text">21:60 PM - 60 min</p>
                <p>Closing.</p>
                <p>End...</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </AnimationWrapper>
    </section>
  );
};

export default EventSchedule;

