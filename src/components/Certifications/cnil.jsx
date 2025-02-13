import * as React from "react";
import "../../styles/cnil.css";

function CNIL() {
  return (
      <>
        <hr/>
            <p className="Description">
              La CNIL est une autorité administrative indépendante chargée de veiller à la protection des données personnelles et au respect de la vie privée en France. Elle joue un rôle central dans l’application du RGPD (Règlement Général sur la Protection des Données), un cadre juridique européen qui encadre la collecte et le traitement des données personnelles afin de renforcer les droits des citoyens. La CNIL informe les citoyens sur leurs droits, accompagne les organisations dans leur mise en conformité et peut sanctionner les manquements. À travers ses actions, elle garantit un usage responsable des données numériques et veille à la préservation des libertés individuelles dans un environnement numérique
            </p>
      <hr />
      <div className="Certifs_CNIL">
        <div className="responsive">
          <div className="gallery">
            <div className="fonctionImage">
              <img
                className="certif_cnil"
                src="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png"
                alt="Certificat module 1"
                />
              <div className="millieu_cnil">
                <div className="text_cnil">
                  <a
                    href="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png"
                    download="Certificat_module1_thomas-thony.png">
                    Module 1
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <div className="fonctionImage">
              <img
                className="certif_cnil"
                src="/public/certfs/CNIL/PNG/Certificat_module2_thomas-thony.png"
                alt="Certificat module 2"
              />
              <div className="millieu_cnil">
                <div className="text_cnil">
                  <a
                    href="/public/certfs/CNIL/PNG/Certificat_module2_thomas-thony.png"
                    download="Certificat_module2_thomas-thony.png"
                  >
                    Module 2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <div className="fonctionImage">
              <img
                className="certif_cnil"
                src="/public/certfs/CNIL/PNG/Certificat_module3_thomas-thony_1.png"
                alt="Certificat module 3"
              />
              <div className="millieu_cnil">
                <div className="text_cnil">
                  <a
                    href="/public/certfs/CNIL/PNG/Certificat_module3_thomas-thony_1.png"
                    download="Certificat_module3_thomas-thony.png">
                    Module 3
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <div className="fonctionImage">
              <img
                className="certif_cnil"
                src="/public/certfs/CNIL/PNG/Certificat_module4_thomas-thony.png"
                alt="Certificat module 4"
              />
              <div className="millieu_cnil">
                <div className="text_cnil">
                  <a
                    href="/public/certfs/CNIL/PNG/Certificat_module4_thomas-thony.png"
                    download="Certificat_module4_thomas-thony.png"
                  >
                    Module 4
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
      <div className="dernierModule">
        <div className="responsive">
          <div className="gallery">
            <div className="fonctionImage">
              <img
                className="certif_cnil"
                src="/public/certfs/CNIL/PNG/Certificat_module5_thomas-thony.png"
                alt="Certificat module 5"
              />
              <div className="millieu_cnil">
                <div className="text_cnil">
                  <a
                    href="/public/certfs/CNIL/PNG/Certificat_module5_thomas-thony.png"
                    download="Certificat_module5_thomas-thony.png"
                  >
                    Module 5
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>  
        </div>
    </>
  );
}

export default CNIL;
