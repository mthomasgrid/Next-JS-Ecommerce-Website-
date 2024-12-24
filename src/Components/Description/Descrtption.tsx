import "./Description.css";
import Image from "next/image";

export default function Description() {
  return (
    <>
      <section className="description-section">
        <div className="description-section-navbar">
          <ul>
            <li className="description-section-navbar-active">Description</li>
            <li>Additional Info</li>
            <li>Reviews</li>
            <li>Video</li>
          </ul>
        </div>

        <div className="description-section-content">
          <p className="description-section-content-title">Varius tempor.</p>
          <p className="description-section-content-subdescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
            consectetur. Pellentesque diam dolor, tincidunt nec ante congue,
            tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis
            ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec
            ultricies diam. Integer feugiat odio ut dictum viverra. Donec
            vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut
            sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas
            quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam
            in est purus
          </p>
          <p className="description-section-content-title">More Details.</p>
          <div className="description-section-content-list">
            <ul>
              <li>
              <Image src="/icons/tickmark.svg" alt="Check Icon" width={16} height={16}  className="description-tick"/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur.
              </li>
              <li>
              <Image src="/icons/tickmark.svg" alt="Check Icon" width={16} height={16} className="description-tick"/>
                Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac
                porttitor libero consectetur. Pellentesque diam dolor, tincidunt
                nec ante.
              </li>
              <li>
              <Image src="/icons/tickmark.svg" alt="Check Icon" width={16} height={16} className="description-tick"/>
                Pellentesque diam dolor, tincidunt nec ante congue, tincidunt
                facilisis tortor.
              </li>
              <li>
              <Image src="/icons/tickmark.svg" alt="Check Icon" width={16} height={16} className="description-tick"/>
                Mauris vitae massa molestie, sagittis ligula vel, egestas massa.
                Phasellus quis sodales augue. Donec nec ultricies diam.
              </li>
              <li>
              <Image src="/icons/tickmark.svg" alt="Check Icon" width={16} height={16} className="description-tick"/>
                Phasellus quis sodales augue. Integer feugiat odio ut dictum
                viverra.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
