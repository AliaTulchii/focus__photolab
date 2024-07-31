import { useState } from "react";
import Button from "../Button/Button";
import RightModal from "../Modals/RightModal/RightModal";

const Booking = () => {
  const [showBooked, setShowBooked] = useState(false);
  const [selectedHours, setSelectedHours] = useState(0); 
  const [selectedPrice, setSelectedPrice] = useState(0); 

  const openModalBooked = (hours: number, minutes: number, price: number) => {
    setShowBooked(true);
    setSelectedHours(hours * 60 + minutes); 
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
            text={"1 година - 800 грн"}
            onClick={() => openModalBooked(1, 20, 800)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"2 години - 1600 грн"}
            onClick={() => openModalBooked(2, 0, 1600)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"3 години - 2200 грн"}
            onClick={() => openModalBooked(3, 0, 2200)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"4 години - 2900 грн"}
            onClick={() => openModalBooked(4, 0, 2900)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"5 годин - 3500 грн"}
            onClick={() => openModalBooked(5, 0, 3500)}
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
