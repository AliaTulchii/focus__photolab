import { useState } from "react";
import Button from "../Button/Button";
import RightModal from "../Modals/RightModal/RightModal";

const Booking = () => {
  const [showBooked, setShowBooked] = useState(false);
  const [selectedHours, setSelectedHours] = useState(0); // Використовуємо number замість string
  const [selectedPrice, setSelectedPrice] = useState(0); // Використовуємо number замість string

  const openModalBooked = (minutes: number, price: number) => {
    setShowBooked(true);
    setSelectedHours(minutes);
    setSelectedPrice(price);
  };

  const closeModal = () => {
    setShowBooked(false);
  };

  return (
    <div>
      <ul className="start__list">
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"1 година - 1 грн"}
            onClick={() => openModalBooked(80, 1)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"2 години - 2 грн"}
            onClick={() => openModalBooked(120, 2)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"3 години - 3 грн"}
            onClick={() => openModalBooked(180, 3)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"4 години - 4 грн"}
            onClick={() => openModalBooked(240, 4)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"5 годин - 5 грн"}
            onClick={() => openModalBooked(300, 5)}
          />
        </li>
      </ul>
      <RightModal
        showBooked={showBooked}
        closeModal={closeModal}
        selectedHours={selectedHours}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

export default Booking;
