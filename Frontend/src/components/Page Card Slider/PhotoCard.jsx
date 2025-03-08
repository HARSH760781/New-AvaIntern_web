import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import "./PhotoCard.css";

const ITEM_DISTANCE = 10;

const PhotoCard = (props) => {
  const el = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cards = el.current.children;

    // Initial cards position
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i];
      const angle = Math.random() * 20 - 10;
      anime({
        targets: c,
        rotateZ: angle,
        translateZ: -i * ITEM_DISTANCE,
        translateX: 0, // Start with no horizontal translation
        duration: 1200,
      });
      c.dataset.z = (-i * ITEM_DISTANCE).toString();
    }

    // Auto-slide feature
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [props.imageData]);

  useEffect(() => {
    const cards = el.current.children;

    // Animate the top card to slide out
    const topCard = cards[0];
    anime({
      targets: topCard,
      translateX: -600, // Slide the card left off-screen
      translateZ: -1000, // Move it to the bottom in Z-axis
      easing: "easeOutQuad",
      duration: 800,
      complete: () => {
        // Move the top card to the bottom of the stack
        el.current.appendChild(topCard);
        topCard.style.transform = `translateX(600px) translateZ(${
          -cards.length * ITEM_DISTANCE
        }px)`; // Reset position for the next cycle
      },
    });

    // Animate the next card to slide in
    const nextCard = cards[1];
    anime({
      targets: nextCard,
      translateX: [600, 0], // Slide the card in from the right
      translateZ: 0, // Bring it to the front
      easing: "easeOutQuad",
      duration: 800,
    });

    // Update the Z positions of the remaining cards
    for (let i = 1; i < cards.length; i++) {
      const c = cards[i];
      anime({
        targets: c,
        translateZ: -(i - 1) * ITEM_DISTANCE, // Move cards closer
        duration: 800,
      });
      c.dataset.z = (-(i - 1) * ITEM_DISTANCE).toString();
    }
  }, [currentIndex]);

  return (
    <div className="container my-4">
      <div className="photocard" ref={el}>
        {props.imageData.map((it, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${it})` }}
            className="photocard-item"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCard;
