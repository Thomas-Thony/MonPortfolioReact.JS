import * as React from "react";
import "../../styles/cnil.css";

function CNIL() {
  return (
      <>
        <hr/>
            <p className="Description">
                Description sur la CNIL et le RGPD.
            </p>
        <hr/>
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
                    download="Certificat_module1_thomas-thony.png"
                  >
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
