import "./Description.css";

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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.5L5.5 12L14 3.5"
                    stroke="#8A8FB9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur.
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.5L5.5 12L14 3.5"
                    stroke="#8A8FB9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac
                porttitor libero consectetur. Pellentesque diam dolor, tincidunt
                nec ante.
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.5L5.5 12L14 3.5"
                    stroke="#8A8FB9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Pellentesque diam dolor, tincidunt nec ante congue, tincidunt
                facilisis tortor.
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.5L5.5 12L14 3.5"
                    stroke="#8A8FB9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Mauris vitae massa molestie, sagittis ligula vel, egestas massa.
                Phasellus quis sodales augue. Donec nec ultricies diam.
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.5L5.5 12L14 3.5"
                    stroke="#8A8FB9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
