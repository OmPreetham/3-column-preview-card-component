const PreviewCard = () => {
  return (
    <section>
      <article>
        <div>
          <img src="./images/icon-sedans.svg" alt="Sedan Icon" />
        </div>
        <div className="description-container">
          <p>
            <strong>Sedans</strong>
          </p>
          <p className="description">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
        </div>
        <div className="learn-more-container">
          <button className="orange-button">Learn More</button>
        </div>
      </article>
      <article>
        <div>
          <img src="./images/icon-suvs.svg" alt="SUV Icon" />
        </div>
        <div className="description-container">
          <p>
            <strong>SUVS</strong>
          </p>
          <p className="description">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
        </div>
        <div className="learn-more-container">
          <button className="cyan-button">Learn More</button>
        </div>
      </article>
      <article>
        <div>
          <img src="./images/icon-luxury.svg" alt="Luxury Icon" />
        </div>
        <div className="description-container">
          <p>
            <strong>Luxury</strong>
          </p>
          <p className="description">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
        </div>
        <div className="learn-more-container">
          <button className="dark-cyan-button">Learn More</button>
        </div>
      </article>
    </section>
  )
}
export default PreviewCard
